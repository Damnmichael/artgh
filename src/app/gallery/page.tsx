import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = [
  { id: "all", name: "All" },
  { id: "paintings", name: "Paintings" },
  { id: "sculptures", name: "Sculptures" },
  { id: "photography", name: "Photography" },
  { id: "digital", name: "Digital Art" },
];

const artworks = [
  {
    id: 1,
    name: "Abstract Harmony",
    artist: "Elena Moretti",
    price: "$1,200",
    image: "/images/sampleart.jpg?height=600&width=500",
    category: "paintings",
  },
  {
    id: 2,
    name: "Serene Landscape",
    artist: "Thomas Chen",
    price: "$950",
    image: "/images/sampleart.jpg?height=600&width=500",
    category: "paintings",
  },
  {
    id: 3,
    name: "Urban Reflections",
    artist: "Maya Johnson",
    price: "$1,500",
    image: "/images/sampleart.jpg?height=600&width=500",
    category: "photography",
  },
  {
    id: 4,
    name: "Bronze Elegance",
    artist: "Robert Kline",
    price: "$2,800",
    image: "/images/sampleart.jpg?height=600&width=500",
    category: "sculptures",
  },
  {
    id: 5,
    name: "Digital Dreams",
    artist: "Sophia Lee",
    price: "$780",
    image: "/images/sampleart.jpg?height=600&width=500",
    category: "digital",
  },
  {
    id: 6,
    name: "Ethereal Whispers",
    artist: "James Wilson",
    price: "$1,350",
    image: "/images/sampleart.jpg?height=600&width=500",
    category: "paintings",
  },
  {
    id: 7,
    name: "Marble Grace",
    artist: "Olivia Martinez",
    price: "$3,200",
    image: "/images/sampleart.jpg?height=600&width=500",
    category: "sculptures",
  },
  {
    id: 8,
    name: "City Lights",
    artist: "Daniel Kim",
    price: "$1,100",
    image: "/images/sampleart.jpg?height=600&width=500",
    category: "photography",
  },
  {
    id: 9,
    name: "Virtual Reality",
    artist: "Alex Turner",
    price: "$950",
    image: "/images/sampleart.jpg?height=600&width=500",
    category: "digital",
  },
  {
    id: 10,
    name: "Ocean Memories",
    artist: "Natalie Wright",
    price: "$1,450",
    image: "/images/sampleart.jpg?height=600&width=500",
    category: "paintings",
  },
  {
    id: 11,
    name: "Bronze Dancer",
    artist: "Christopher Lee",
    price: "$2,600",
    image: "/images/sampleart.jpg?height=600&width=500",
    category: "sculptures",
  },
  {
    id: 12,
    name: "Neon Futures",
    artist: "Emma Davis",
    price: "$820",
    image: "/images/sampleart.jpg?height=600&width=500",
    category: "digital",
  },
];

export default function GalleryPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl  text-[#c09e80] md:text-5xl font-serif mb-4">
            Our Gallery
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of exceptional artworks from talented
            artists around the world
          </p>
        </div>

        {/* Gallery Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-transparent border-b border-gray-200 w-full flex justify-center overflow-x-auto">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:border-b-2 data-[state=active]:border-[#c09e80] data-[state=active]:rounded-none data-[state=active]:shadow-none px-6 py-3"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* All Artworks */}
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {artworks.map((artwork) => (
                <ArtworkCard key={artwork.id} artwork={artwork} />
              ))}
            </div>
          </TabsContent>

          {/* Category Tabs */}
          {categories.slice(1).map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {artworks
                  .filter((artwork) => artwork.category === category.id)
                  .map((artwork) => (
                    <ArtworkCard key={artwork.id} artwork={artwork} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl md:text-3xl font-serif mb-4 text-[#c09e80]">
            Ready to Add Beauty to Your Space?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Visit our marketplace to browse our complete collection and find the
            perfect piece for your home or office.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-none border-[#c09e80]  text-black hover:bg-[#c09e80] hover:text-white"
          >
            <a
              href="https://marketplace.example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Marketplace <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

function ArtworkCard({ artwork }: { artwork: (typeof artworks)[0] }) {
  return (
    <div className="group">
      <div className="relative overflow-hidden mb-4">
        <div className="aspect-[3/4] relative">
          <Image
            src={artwork.image || "/placeholder.svg"}
            alt={artwork.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Button
            asChild
            variant="outline"
            className="border-[#c09e80] text-black hover:bg-[#c09e80] hover:text-black rounded-none"
          >
            <a
              href={`https://marketplace.example.com/product/${artwork.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Details
            </a>
          </Button>
        </div>
      </div>
      <div>
        <h3 className="font-medium text-lg">{artwork.name}</h3>
        <p className="text-gray-600 text-sm">{artwork.artist}</p>
        <p className="mt-2 font-medium">{artwork.price}</p>
      </div>
    </div>
  );
}
