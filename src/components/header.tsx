"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-serif font-medium">
            <span
              className={
                isScrolled || pathname !== "/" ? "text-[#c09e80]" : "text-white"
              }
            >
              The ArtVaultGh
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[#c09e80] ${
                  pathname === item.href
                    ? isScrolled || pathname !== "/"
                      ? "text-primary"
                      : "text-white"
                    : isScrolled || pathname !== "/"
                    ? "text-gray-600"
                    : "text-white/80"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Shop Button */}
          <div className="hidden md:block">
            <Button
              asChild
              variant={isScrolled || pathname !== "/" ? "default" : "outline"}
              className={
                isScrolled || pathname !== "/"
                  ? "rounded-none bg-[#c09e80] text-white hover:bg-black/80"
                  : "rounded-none border-white text-black hover:bg-black/10"
              }
            >
              <a
                href="https://marketplace.example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                Shop Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Menu"
              >
                <Menu
                  className={
                    isScrolled || pathname !== "/" ? "text-black" : "text-white"
                  }
                />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-2xl font-serif font-medium">
                    Artistry
                  </span>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" aria-label="Close">
                      <X />
                    </Button>
                  </SheetTrigger>
                </div>
                <nav className="flex flex-col space-y-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-lg font-medium transition-colors hover:text-primary ${
                        pathname === item.href
                          ? "text-primary"
                          : "text-gray-600"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto pt-8">
                  <Button
                    asChild
                    className="w-full rounded-none bg-black text-white hover:bg-black/80"
                  >
                    <a
                      href="https://marketplace.example.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      Shop Now
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
