"use client";

import Link from "next/link";
import { Watch, Search, ShoppingBag, User } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="p-2 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
            <Watch className="h-6 w-6 text-primary" />
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            watch.co
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/products"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Watches
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Brands
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Collections
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            About
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="hidden lg:flex relative max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search watches..."
            className="pl-10 bg-muted/50 border-border/50 focus:bg-background transition-colors duration-300"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
              0
            </span>
            <span className="sr-only">Shopping cart</span>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
