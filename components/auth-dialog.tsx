"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface AuthDialogProps {
  isOpen: boolean
  onClose: () => void
}

export function AuthDialog({ isOpen, onClose }: AuthDialogProps) {
  const handleAuth = () => {
    onClose();
    window.location.href = "https://chat.dezygn.com/auth";
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-[#18181B] border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.1)] backdrop-blur-xl">
        <DialogHeader className="flex items-center">
          <DialogTitle className="text-2xl font-semibold text-[#E0E0E0]">Sign in to continue</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <DialogDescription className="text-center text-gray-400 text-[15px]">
            Create an account or sign in to send messages
          </DialogDescription>
          <Button
            variant="outline"
            className="w-full bg-[#27272A] text-[#E0E0E0] border-white/10 hover:bg-[#323232]"
            onClick={handleAuth}
          >
            Sign In
          </Button>
          <Button 
            className="w-full bg-white text-black hover:bg-gray-100"
            onClick={handleAuth}
          >
            Sign up for free
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
