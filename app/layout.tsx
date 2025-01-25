import { Inter } from "next/font/google"
import "./globals.css"
import { Metadata, Viewport } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Dezygn",
  description: "What do you want to design today?",
  icons: {
    icon: '/favicon.ico',
  },
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
      <body>
        <div className="bg-yellow-100 text-center p-2 text-gray-800">
          We are updating Dezygn landing page to V3 this week-end. You can still access <a href="https://my.dezygn.com" className="underline font-medium">V2 here</a>
        </div>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
