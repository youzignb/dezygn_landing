import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Search, ChefHat, X } from 'lucide-react';
import HeaderV3 from '../../components/HeaderV3';
import FooterV3 from '../../components/FooterV3';

interface Recipe {
  id: string;
  name: string;
  description: string | null;
  recipe_short_description: string | null;
  thumbnail_url: string | null;
  category: string;
  emoji: string | null;
}

const CATEGORY_LABELS: Record<string, string> = {
  automotive: 'Automotive',
  baby_kids: 'Baby & Kids',
  bags_luggage: 'Bags & Luggage',
  beauty: 'Beauty',
  candles_fragrance: 'Candles & Fragrance',
  conversion: 'Conversion',
  cosmetics: 'Cosmetics',
  design: 'Design',
  electronics: 'Electronics',
  fashion: 'Fashion',
  food_beverage: 'Food & Beverage',
  gardening_plants: 'Gardening & Plants',
  golf: 'Golf',
  health_supplements: 'Health & Supplements',
  home_furniture: 'Home & Furniture',
  jewelry: 'Jewelry',
  lifestyle: 'Lifestyle',
  marketing: 'Marketing',
  model: 'Model',
  operations: 'Operations',
  outdoor_camping: 'Outdoor & Camping',
  pet_supplies: 'Pet Supplies',
  sports_fitness: 'Sports & Fitness',
  stationery_office: 'Stationery & Office',
  studio: 'Studio',
  toys_games: 'Toys & Games',
};

function categoryLabel(category: string): string {
  return CATEGORY_LABELS[category] || category.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

async function fetchRecipes(): Promise<Recipe[]> {
  const params = new URLSearchParams({
    select: 'id,name,description,recipe_short_description,thumbnail_url,category,emoji',
    is_active: 'eq.true',
    order: 'category.asc,sort_order.asc',
  });

  const res = await fetch(`${SUPABASE_URL}/rest/v1/recipes?${params}`, {
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
    },
  });

  if (!res.ok) throw new Error('Failed to fetch recipes');
  return res.json();
}

function RecipeCard({ recipe }: { recipe: Recipe }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all">
      {/* Thumbnail */}
      <div className="relative aspect-[4/3] bg-white/[0.02] overflow-hidden">
        {recipe.thumbnail_url && !imgError ? (
          <>
            {!imgLoaded && (
              <div className="absolute inset-0 animate-pulse bg-white/5" />
            )}
            <img
              src={recipe.thumbnail_url}
              alt={recipe.name}
              loading="lazy"
              onLoad={() => setImgLoaded(true)}
              onError={() => setImgError(true)}
              className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                imgLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-600">
            <ChefHat className="w-10 h-10" />
          </div>
        )}

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1 bg-black/60 backdrop-blur-sm text-xs text-gray-200 font-medium px-2.5 py-1 rounded-full border border-white/10">
            {recipe.emoji && <span>{recipe.emoji}</span>}
            {categoryLabel(recipe.category)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white mb-1.5 group-hover:text-purple-300 transition-colors">
          {recipe.name}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
          {recipe.recipe_short_description || recipe.description || ''}
        </p>
      </div>
    </div>
  );
}

function RecipeCardSkeleton() {
  return (
    <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden">
      <div className="aspect-[4/3] bg-white/[0.02] animate-pulse" />
      <div className="p-5 space-y-3">
        <div className="h-5 w-3/4 bg-white/5 rounded animate-pulse" />
        <div className="h-4 w-full bg-white/5 rounded animate-pulse" />
      </div>
    </div>
  );
}

const RecipesPage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchRecipes()
      .then(setRecipes)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const categories = useMemo(() => {
    const cats = [...new Set(recipes.map((r) => r.category))];
    return cats.sort((a, b) => categoryLabel(a).localeCompare(categoryLabel(b)));
  }, [recipes]);

  const filtered = useMemo(() => {
    let result = recipes;
    if (activeCategory) {
      result = result.filter((r) => r.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (r) =>
          r.name.toLowerCase().includes(q) ||
          r.description?.toLowerCase().includes(q) ||
          r.recipe_short_description?.toLowerCase().includes(q)
      );
    }
    return result;
  }, [recipes, activeCategory, search]);

  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <Helmet>
        <title>Recipe Library — 268 AI Photography Templates | Dezygn</title>
        <meta
          name="description"
          content="Browse 268 ready-to-use AI product photography recipes across 26 categories. From lifestyle shots to studio setups — find the perfect template for your brand."
        />
        <link rel="canonical" href="https://dezygn.com/features/recipes" />
      </Helmet>

      <HeaderV3 />

      <main className="pt-24">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
            <ol className="flex items-center gap-2">
              <li>
                <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link to="/features" className="hover:text-gray-300 transition-colors">Features</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-300">Recipes</li>
            </ol>
          </nav>
        </div>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 mb-6">
            <ChefHat className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">Recipe Library</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {loading ? 'Loading' : filtered.length}{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ready-to-Use Recipes
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Browse our library of AI photography templates. Pick a recipe, add your product, and generate studio-quality images in seconds.
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search recipes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/[0.05] border border-white/10 rounded-xl pl-11 pr-10 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-500 hover:text-gray-300 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </section>

        {/* Category Filter */}
        {!loading && categories.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 pb-8">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              <button
                onClick={() => setActiveCategory(null)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  !activeCategory
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/[0.05] text-gray-400 border border-white/10 hover:text-white hover:border-white/20'
                }`}
              >
                All ({recipes.length})
              </button>
              {categories.map((cat) => {
                const count = recipes.filter((r) => r.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                    className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeCategory === cat
                        ? 'bg-purple-600 text-white'
                        : 'bg-white/[0.05] text-gray-400 border border-white/10 hover:text-white hover:border-white/20'
                    }`}
                  >
                    {categoryLabel(cat)} ({count})
                  </button>
                );
              })}
            </div>
          </section>
        )}

        {/* Recipe Grid */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {Array.from({ length: 12 }).map((_, i) => (
                <RecipeCardSkeleton key={i} />
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-gray-400 mb-4">Something went wrong loading recipes.</p>
              <button
                onClick={() => window.location.reload()}
                className="text-purple-400 hover:text-purple-300 transition-colors text-sm"
              >
                Try again
              </button>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400">No recipes found matching your search.</p>
              <button
                onClick={() => { setSearch(''); setActiveCategory(null); }}
                className="text-purple-400 hover:text-purple-300 transition-colors text-sm mt-2"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          )}
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Try any recipe with your product
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
              Upload your product photo, pick a recipe, and let Awa generate studio-quality images in seconds. Free to start.
            </p>
            <a
              href="https://chat.dezygn.com/signup"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>

      <FooterV3 />
    </div>
  );
};

export default RecipesPage;
