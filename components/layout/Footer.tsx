"use client"

import React from "react"
import { Separator } from "@/components/ui/separator"
import { Github, Twitter, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="w-full bg-muted/40 border-t">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h2 className="text-xl font-semibold">ShadeCN Landing</h2>
            <p className="text-sm text-muted-foreground">
              Build modern interfaces with shadcn/ui + Next.js
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <Separator className="my-4" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ShadeCN Landing. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-foreground">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-foreground">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
