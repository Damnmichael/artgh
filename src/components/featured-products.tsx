"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const products = [
  {
    id: 1,
    name: "Abstract Harmony",
    artist: "Elena Moretti",
    price: "$1,200",
    image: "/images/sampleart.jpg?height=600&width=500",
    category: "Painting",
  },
  {
    id: 2,
    name: "Serene Landscape",
    artist: "Thomas Chen",
    price: "$950",
    image: "/images/samplesculpture.jpg?height=600&width=500",
    category: "Painting",
  },
  {
    id: 3,
    name: "Urban Reflections",
    artist: "Maya Johnson",
    price: "$1,500",
    image: "/images/loginart.jpg?height=600&width=500",
    category: "Photography",
  },
  {
    id: 4,
    name: "Bronze Elegance",
    artist: "Robert Kline",
    price: "$2,800",
    image: "/images/contour.jpg?height=600&width=500",
    category: "Sculpture",
  },
  {
    id: 5,
    name: "Digital Dreams",
    artist: "Sophia Lee",
    price: "$780",
    image: "/images/sampleart.jpg?height=600&width=500",
    category: "Digital Art",
  },
  {
    id: 6,
    name: "Ethereal Whispers",
    artist: "James Wilson",
    price: "$1,350",
    image: "/images/hero.jpg?height=600&width=500",
    category: "Mixed Media",
  },
];

export default function FeaturedProducts() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem
            key={product.id}
            className="md:basis-1/2 lg:basis-1/3 pl-4"
          >
            <div className="p-1">
              <Card className="border-none rounded-none overflow-hidden">
                <CardContent className="p-0">
                  <div
                    className="relative overflow-hidden group"
                    onMouseEnter={() => setHoveredId(product.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <div className="aspect-[4/4] md:aspect-[3/4] relative">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div
                      className={`absolute inset-0 bg-black/60 flex flex-col justify-end p-6 transition-opacity duration-300 ${
                        hoveredId === product.id ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <Button
                        asChild
                        variant="outline"
                        className="border-[#E07A5F] text-black hover:bg-[#E07A5F] hover:text-white rounded-none w-full"
                      >
                        <a
                          href={`https://marketplace.example.com/product/${product.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-gray-500 mb-1">
                      {product.category}
                    </div>
                    <h3 className="font-medium text-lg text-[#E07A5F]">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{product.artist}</p>
                    <p className="mt-2 font-medium">{product.price}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-end gap-2 mt-8">
        <CarouselPrevious className="static transform-none rounded-none border-[#E07A5F] text-black hover:bg-[#E07A5F] hover:text-white" />
        <CarouselNext className="static transform-none rounded-none border-[#E07A5F] text-black hover:bg-[#E07A5F] hover:text-white" />
      </div>
    </Carousel>
  );
}
