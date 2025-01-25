"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Paperclip, Send } from "lucide-react"
import { AuthDialog } from "@/components/auth-dialog"
import { Footer } from "@/components/footer"

const PLATFORM_LOGOS = [
  {
    name: "Shopify",
    url: "https://cdn3.iconfinder.com/data/icons/transparent-on-dark-grey/500/icon-02-1024.png",
  },
  {
    name: "Instagram",
    url: "https://cdn.brandfetch.io/ido5G85nya/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  },
  {
    name: "Twitter",
    url: "https://cdn.brandfetch.io/idAgPm7IvG/theme/dark/id_UA-KZwS.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  },
  {
    name: "Facebook",
    url: "https://cdn3.iconfinder.com/data/icons/transparent-on-dark-grey/500/icon-02-512.png",
  },
  {
    name: "Reddit",
    url: "https://cdn.brandfetch.io/idbnlnCBDY/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  },
  {
    name: "LinkedIn",
    url: "https://cdn.brandfetch.io/idJFz6sAsl/id7IxffEDM.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  },
]

export default function Page() {
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div className="min-h-screen bg-[#18181B] text-[#E0E0E0] antialiased">
      {/* Header */}
      <header className="flex items-center justify-between p-6">
        <Link href="https://dezygn.com">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dezygn-icon-2-Q9NaYO05l9LGqkcAxF3PAs6QmxfS0k.png"
            alt="Dezygn Logo"
            width={40}
            height={40}
            className="h-10 w-10"
          />
        </Link>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-gray-300 hover:text-gray-200 hover:bg-[#27272A]" asChild>
            <Link href="https://chat.dezygn.com/auth">Sign In</Link>
          </Button>
          <Button className="bg-gradient-to-r from-[#aa1fbd] to-[#3a6ad9] hover:opacity-90 text-white" asChild>
            <Link href="https://chat.dezygn.com/auth">Get Started</Link>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto mt-24 max-w-3xl px-4 text-center">
        <h1 className="mb-4 text-5xl font-bold text-[#E0E0E0]">What do you want to design?</h1>
        <p className="mb-12 text-gray-300 text-[15px]">Create outstanding marketing visuals in seconds.</p>

        {/* Command Input */}
        <div className="relative mb-12">
          <div className="relative h-[140px] rounded-xl bg-[#09090B] border border-white/10">
            <input
              ref={inputRef}
              type="text"
              placeholder="How can Dezygn help you today"
              className="absolute left-4 top-4 w-[80%] bg-transparent text-gray-400 outline-none placeholder:text-gray-400"
            />
            <div 
              className="absolute bottom-4 left-4 cursor-pointer hover:opacity-80"
              onClick={() => setIsAuthDialogOpen(true)}
            >
              <Paperclip className="h-5 w-5 text-gray-400" />
            </div>
            <Button
              className="absolute right-4 top-4 bg-[#3a6ad9] hover:opacity-90"
              onClick={() => setIsAuthDialogOpen(true)}
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Quick Start Templates */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {[
            "Social media image",
            "3D book cover",
            "T-shirt mockup",
            "Billboard ad",
            "Business card design",
            "Website mockup",
          ].map((item) => (
            <Button
              key={item}
              variant="outline"
              className="bg-[#1A1A1A] text-gray-300 border-white/10 hover:bg-[#27272A] hover:text-gray-200"
            >
              {item}
            </Button>
          ))}
        </div>

        {/* Social Proof */}
        <div className="text-center">
          <p className="mb-8 text-gray-400">Create designs for any platform</p>
          <div className="grid grid-cols-6 gap-8 px-12">
            {PLATFORM_LOGOS.map((platform) => (
              <div
                key={platform.name}
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1A1A1A] border border-white/10"
              >
                <Image
                  src={platform.url || "/placeholder.svg"}
                  alt={`${platform.name} logo`}
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain opacity-60 hover:opacity-100 transition-opacity"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      <AuthDialog isOpen={isAuthDialogOpen} onClose={() => setIsAuthDialogOpen(false)} />
      <Footer />
    </div>
  )
}
