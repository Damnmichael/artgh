"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import FeaturedProducts from "@/components/featured-products";
import TestimonialSlider from "@/components/testimonial-slider";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/images/hero.jpg?height=1080&width=1920')",
          }}
        />
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="container relative z-20 mx-auto px-4 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-light text-white mb-6">
            Exquisite Artistry
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8 font-light">
            Discover unique pieces that transform spaces and inspire emotions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#c09e80] text-white hover:bg-[#c09e80]/90 rounded-none px-8"
            >
              <Link href="/gallery">Explore Collection</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-black hover:bg-white/10 rounded-none px-8"
            >
              <a
                href="https://marketplace.example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shop Now <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-24 bg-stone-50"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl text-[#c09e80] md:text-4xl font-serif mb-6">
                Our Artistic Vision
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We curate exceptional pieces that blend traditional
                craftsmanship with contemporary aesthetics. Each artwork in our
                collection is carefully selected for its unique character and
                artistic merit.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Our mission is to connect discerning collectors with
                extraordinary artists, creating a platform where art transcends
                mere decoration to become a meaningful part of your life.
              </p>
              <Button
                asChild
                variant="outline"
                className="rounded-none border-[#c09e80] text-black hover:bg-[#c09e80] hover:text-white"
              >
                <Link href="/about" className="flex items-center ">
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative h-[500px] w-full"
            >
              <div
                className="absolute top-0 right-0 w-4/5 h-4/5 bg-cover bg-center border-8 border-white shadow-xl"
                style={{
                  backgroundImage:
                    "url('/images/contour.jpg?height=600&width=800')",
                }}
              />
              <div
                className="absolute bottom-0 left-0 w-3/5 h-3/5 bg-cover bg-center border-8 border-white shadow-xl"
                style={{
                  backgroundImage:
                    "url('/images/hero.jpg?height=500&width=700')",
                }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Featured Products */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-24"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-[#c09e80]">
              Featured Artworks
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our curated selection of exceptional pieces that exemplify
              artistic excellence and creative vision
            </p>
          </div>
          <FeaturedProducts />
          <div className="text-center mt-12 flex items-center justify-center">
            <Button
              variant="outline"
              className="rounded-none border-[#c09e80] text-black hover:bg-[#c09e80] hover:text-white"
            >
              <a
                href="https://marketplace.example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                View All Collections <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-24 bg-stone-100"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-[#c09e80]">
              Client Testimonials
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our clients about their experiences with our art and
              service
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-24 bg-[#c09e80] text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Transform Your Space
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Ready to elevate your environment with exceptional art? Visit our
            marketplace to find the perfect piece.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-white/90 rounded-none px-10"
          >
            <a
              href="https://marketplace.example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop Now <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </motion.section>
    </div>
  );
}
