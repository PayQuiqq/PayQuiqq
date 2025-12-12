"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Zap } from "lucide-react"
import Link from "next/link"
import { WalletConnect } from "@/components/wallet-connect"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-primary text-primary-foreground shadow-sm">
              <Zap className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-primary">
              QuikPay
            </span>
          </Link>

          {/* Center links */}
          <div className="hidden md:flex items-center space-x-8 text-sm text-muted-foreground">
            <a href="/#features" className="hover:text-primary transition-colors">
              Features
            </a>
            <a href="/#how-it-works" className="hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="/#testimonials" className="hover:text-primary transition-colors">
              Testimonials
            </a>
            <a href="/#faq" className="hover:text-primary transition-colors">
              FAQ
            </a>
          </div>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center space-x-4">
            <WalletConnect />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card rounded-lg mt-2 border border-border">
              
              <a
                href="/#how-it-works"
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                How it Works
              </a>
              <Link
                href="/merchant"
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                For Merchants
              </Link>
              <div className="px-3 py-2">
                <WalletConnect />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
