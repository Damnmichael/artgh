"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

// Add these animation variants near the top of the file, after the navigation const
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
};

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
          <Link href="/" className="flex items-center">
            <Image
              src={
                isScrolled || pathname !== "/"
                  ? "/images/sunset-nbg.svg"
                  : "/images/uzuri-white.svg"
              }
              alt="Uzuri"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[#E07A5F] ${
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
              variant={isScrolled || pathname !== "/" ? "outline" : "outline"}
              className={
                isScrolled || pathname !== "/"
                  ? "text-black rounded-none px-8 border-black/30  hover:bg-white/10 hover:text-black hover:border-2"
                  : "text-white rounded-none px-8 bg-white/10  hover:bg-white/10 hover:text-white hover:border-2"
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
              <motion.div
                className="flex flex-col h-full"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  className="flex items-center justify-between mb-8"
                  variants={itemVariants}
                >
                  <Image
                    src="/images/sunset-nbg.svg"
                    alt="Uzuri"
                    width={120}
                    height={40}
                    className="h-8 w-auto"
                  />
                </motion.div>
                <nav className="flex flex-col space-y-6">
                  {navigation.map((item) => (
                    <motion.div key={item.name} variants={itemVariants}>
                      <SheetClose asChild>
                        <Link
                          href={item.href}
                          className={`text-lg font-medium transition-colors hover:text-primary ${
                            pathname === item.href
                              ? "text-[#E07A5F]"
                              : "text-gray-400"
                          }`}
                        >
                          {item.name}
                        </Link>
                      </SheetClose>
                    </motion.div>
                  ))}
                </nav>
                <motion.div className="mt-auto pt-8" variants={itemVariants}>
                  <SheetClose asChild>
                    <Button
                      asChild
                      className="w-full rounded-none bg-[#E07A5F] text-white hover:bg-[#E07A5F]/80 "
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
                  </SheetClose>
                </motion.div>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
