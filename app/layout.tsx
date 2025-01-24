import { Inter } from "next/font/google"
import "./globals.css"
import { Metadata } from "next"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Dezygn",
  description: "What do you want to design today?",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Dezygn",
    description: "What do you want to design today?",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dezygn",
    description: "What do you want to design today?",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
