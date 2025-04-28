"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export default function Navbar() {
  // Simplified state management
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-600"
          >
            <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
            <path d="M13.6 2.26a4 4 0 0 0-3.2 0L8 3l-.6.26a4 4 0 0 1-3.2 0L4 3" />
            <path d="M13.6 21.74a4 4 0 0 1-3.2 0L10 22l-.6-.26a4 4 0 0 0-3.2 0L6 22" />
            <path d="m22 12-3-2v4l3-2Z" />
            <path d="M22 12H17" />
            <path d="M13 7v10" />
            <path d="M13 7h1" />
            <path d="M13 17h1" />
          </svg>
          <span className="text-xl font-bold text-blue-600">Scanalyze</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-6">
          <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-blue-600">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-blue-600">
            How It Works
          </Link>
          <Link href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-blue-600">
            Testimonials
          </Link>
        </nav>

        <div className="hidden md:flex md:items-center md:gap-4">
          <Button variant="outline" size="sm">
            Log in
          </Button>
          <Button size="sm">Sign up</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="block md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container mx-auto px-4 pb-6 md:hidden">
          <nav className="flex flex-col gap-4">
            <Link
              href="#features"
              className="text-sm font-medium text-gray-600 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-gray-600 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-gray-600 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="outline" size="sm" className="w-full justify-center">
                Log in
              </Button>
              <Button size="sm" className="w-full justify-center">
                Sign up
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
