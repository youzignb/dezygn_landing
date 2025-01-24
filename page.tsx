import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Twitter, ArrowRight, Link2, Sparkles } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-24%20at%2023.32.22-HYU3YfOCLgIFclDzJhhJmIlBJ1Hkhn.png"
            alt="Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-400">We&apos;re hiring</span>
          <Button variant="ghost" className="text-gray-400">
            Sign In
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
        </div>
      </header>

      {/* Announcement Banner */}
      <div className="mx-auto max-w-2xl px-4">
        <div className="flex items-center justify-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm text-gray-300">
          <Twitter className="h-4 w-4" />
          <span>Introducing bolt.new: Dev sandbox with AI from StackBlitz</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto mt-24 max-w-3xl px-4 text-center">
        <h1 className="mb-4 text-5xl font-bold">What do you want to build?</h1>
        <p className="mb-12 text-gray-400">Prompt, run, edit, and deploy full-stack web apps.</p>

        {/* Command Input */}
        <div className="relative mb-12">
          <Input
            type="text"
            placeholder="i want to create a new design"
            className="h-14 bg-gray-900 pl-12 pr-12 text-lg"
          />
          <div className="absolute left-4 top-1/2 flex -translate-y-1/2 gap-2">
            <Link2 className="h-5 w-5 text-gray-500" />
            <Sparkles className="h-5 w-5 text-gray-500" />
          </div>
          <Button size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700">
            <ArrowRight className="h-5 w-5" />
          </Button>
          <div className="absolute right-20 top-1/2 -translate-y-1/2 text-sm text-gray-500">
            Use <kbd className="rounded bg-gray-800 px-1.5 py-0.5">Shift</kbd> +{" "}
            <kbd className="rounded bg-gray-800 px-1.5 py-0.5">Return</kbd> for a new line
          </div>
        </div>

        {/* Quick Start Templates */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          <Button variant="outline" className="bg-gray-900 text-gray-300">
            Start a blog with Astro
          </Button>
          <Button variant="outline" className="bg-gray-900 text-gray-300">
            Build a mobile app with NativeScript
          </Button>
          <Button variant="outline" className="bg-gray-900 text-gray-300">
            Create a docs site with Vitepress
          </Button>
          <Button variant="outline" className="bg-gray-900 text-gray-300">
            Scaffold UI with shadcn
          </Button>
          <Button variant="outline" className="bg-gray-900 text-gray-300">
            Draft a presentation with Slidev
          </Button>
          <Button variant="outline" className="bg-gray-900 text-gray-300">
            Code a video with Remotion
          </Button>
        </div>

        {/* Technology Stack Text */}
        <p className="mb-8 text-gray-500">or start a blank app with your favorite stack</p>

        {/* Technology Icons Grid */}
        <div className="mb-24 grid grid-cols-7 gap-8 px-12">
          {Array.from({ length: 14 }).map((_, i) => (
            <div key={i} className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900">
              {/* Placeholder for tech icons */}
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="flex items-center justify-center gap-4 text-sm text-gray-500">
          <Twitter className="h-4 w-4" />
          <a href="#" className="hover:text-gray-300">
            GitHub
          </a>
          <a href="#" className="hover:text-gray-300">
            Discord
          </a>
          <span>•</span>
          <a href="#" className="hover:text-gray-300">
            Help Center
          </a>
          <span>•</span>
          <a href="#" className="hover:text-gray-300">
            Careers
          </a>
          <span>•</span>
          <a href="#" className="hover:text-gray-300">
            Terms
          </a>
          <a href="#" className="hover:text-gray-300">
            Privacy
          </a>
          <span>•</span>
          <div className="flex items-center gap-1">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>StackBlitz</span>
          </div>
        </footer>
      </main>
    </div>
  )
}

