// stripe-setup-funnel.mjs — idempotently provisions the 4 funnel offers as
// Stripe Products + one-time Prices in whatever account STRIPE_SECRET_KEY points
// at (test or live — inferred from the key prefix). Prints the price IDs and the
// exact env lines to paste.
//
// Usage:
//   STRIPE_SECRET_KEY=sk_test_... npm run stripe:setup
//
// SAFETY: this script reads the key ONLY from process.env — it never hunts the
// filesystem for credentials and never prints the key. Re-running is safe: it
// reuses any product/price it already created (matched by metadata.offer).
import Stripe from "stripe";

const KEY = process.env.STRIPE_SECRET_KEY;
if (!KEY) {
  console.error(
    [
      "STRIPE_SECRET_KEY is not set.",
      "",
      "Run with the key in the environment (the runner provides it):",
      "  STRIPE_SECRET_KEY=sk_test_xxx npm run stripe:setup",
      "",
      "Use a sk_test_… key first to provision TEST mode; swap to sk_live_… for live.",
    ].join("\n"),
  );
  process.exit(1);
}

const MODE = KEY.startsWith("sk_live_")
  ? "live"
  : KEY.startsWith("sk_test_")
    ? "test"
    : "unknown";

const stripe = new Stripe(KEY);

const FUNNEL = "client-system";

// The 4 offers. Amounts in cents. `offer` is the idempotency key in metadata.
const OFFERS = [
  {
    offer: "front-end",
    envHint: "front-end product ($37)",
    name: "The AI Creative Client System",
    description:
      "The complete playbook for landing paying AI-photography clients on Upwork by sending a free custom sample before you pitch.",
    amount: 3700,
  },
  {
    offer: "bump",
    envHint: "order bump ($27)",
    name: "The 2-Minute Setup Pack",
    description:
      "Two custom GPTs that build your Upwork profile + portfolio in 2 minutes, on a free ChatGPT account.",
    amount: 2700,
  },
  {
    offer: "oto1",
    envHint: "OTO 1 ($69)",
    name: "The Fulfillment Masterclass",
    description:
      "The 5-step AI photography method, two full live client-project recordings, the prompting course, and the revision/feedback workflow.",
    amount: 6900,
  },
  {
    offer: "oto2",
    envHint: "OTO 2 ($99)",
    name: "The Dezygn Credit Deal",
    description:
      "1,500 credits kept permanently + 30 days of Agency features (Upwork job feed, batch outreach visuals).",
    amount: 9900,
  },
];

async function findProductByOffer(offer) {
  // List funnel products and match on metadata.offer. (Avoids the search API so
  // it works on every account immediately.)
  for await (const product of stripe.products.list({ active: true, limit: 100 })) {
    if (
      product.metadata?.funnel === FUNNEL &&
      product.metadata?.offer === offer
    ) {
      return product;
    }
  }
  return null;
}

async function findOneTimePrice(productId, amount) {
  for await (const price of stripe.prices.list({ product: productId, active: true, limit: 100 })) {
    if (
      price.unit_amount === amount &&
      price.currency === "usd" &&
      !price.recurring
    ) {
      return price;
    }
  }
  return null;
}

async function ensureOffer(o) {
  let product = await findProductByOffer(o.offer);
  let createdProduct = false;
  if (!product) {
    product = await stripe.products.create({
      name: o.name,
      description: o.description,
      metadata: { funnel: FUNNEL, offer: o.offer },
    });
    createdProduct = true;
  }

  let price = await findOneTimePrice(product.id, o.amount);
  let createdPrice = false;
  if (!price) {
    price = await stripe.prices.create({
      product: product.id,
      unit_amount: o.amount,
      currency: "usd",
      metadata: { funnel: FUNNEL, offer: o.offer },
    });
    createdPrice = true;
  }

  return {
    offer: o.offer,
    productId: product.id,
    priceId: price.id,
    createdProduct,
    createdPrice,
  };
}

async function main() {
  console.log(`\nStripe funnel setup — mode: ${MODE.toUpperCase()} (inferred from key prefix; key not printed)\n`);

  const results = {};
  for (const o of OFFERS) {
    const r = await ensureOffer(o);
    results[o.offer] = { productId: r.productId, priceId: r.priceId };
    const tag = [
      r.createdProduct ? "product:created" : "product:reused",
      r.createdPrice ? "price:created" : "price:reused",
    ].join(" · ");
    console.log(`  ${o.offer.padEnd(10)} ${o.envHint.padEnd(24)} ${r.priceId}  [${tag}]`);
  }

  console.log("\nJSON (offer → { productId, priceId }):");
  console.log(JSON.stringify(results, null, 2));

  console.log("\nFront-end env lines to paste (replace the publishable key + function URLs):");
  console.log("  VITE_STRIPE_PUBLISHABLE_KEY=pk_" + (MODE === "live" ? "live" : "test") + "_xxx");
  console.log("  VITE_CREATE_PI_FN_URL=https://<project-ref>.supabase.co/functions/v1/stripe-create-payment-intent");
  console.log("  VITE_CHARGE_FN_URL=https://<project-ref>.supabase.co/functions/v1/stripe-charge-upsell");
  console.log(
    "\nNote: the front-end charges by AMOUNT (mapped server-side in the edge functions), not by these price IDs.",
  );
  console.log(
    "The price IDs above are for your records / dashboard reporting / future invoice-based billing.\n",
  );
}

main().catch((err) => {
  console.error("\nstripe-setup-funnel failed:", err.message || err);
  process.exit(1);
});
