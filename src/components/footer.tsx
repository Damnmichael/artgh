import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-[#E07A5F] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="text-2xl font-serif font-medium mb-4 block"
            >
              Artistry
            </Link>
            <p className="text-white mt-4 mb-6">
              Curating exceptional art pieces that transform spaces and inspire
              emotions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="text-white hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="text-white hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-white hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-white hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h3 className="text-lg font-medium mb-6">Collections</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://marketplace.example.com/paintings"
                  className="text-white hover:text-white transition-colors"
                >
                  Paintings
                </a>
              </li>
              <li>
                <a
                  href="https://marketplace.example.com/sculptures"
                  className="text-white hover:text-white transition-colors"
                >
                  Sculptures
                </a>
              </li>
              <li>
                <a
                  href="https://marketplace.example.com/photography"
                  className="text-white hover:text-white transition-colors"
                >
                  Photography
                </a>
              </li>
              <li>
                <a
                  href="https://marketplace.example.com/digital-art"
                  className="text-white hover:text-white transition-colors"
                >
                  Digital Art
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-medium mb-6">Stay Updated</h3>
            <p className="text-white mb-4">
              Subscribe to our newsletter for updates on new collections and
              exhibitions.
            </p>
            <div className="flex flex-col space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white border-white text-black placeholder:text-gray-500 focus-visible:ring-gray-700"
              />
              <Button className="bg-white text-black hover:bg-white/90 rounded-none">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm">
            © {new Date().getFullYear()} Artistry Gallery. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-white hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
