"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Rae's Painting",
    price: "GH₵300.00",
    image: "/images/sampleart.jpg",
    hasOptions: true,
    category: "Decor",
  },
  {
    id: 2,
    name: "Open Space Bed",
    price: "GH₵5,000.00",
    image: "/images/bedding.png",
    hasOptions: true,
    category: "Furniture",
  },
  {
    id: 3,
    name: "Zuri Chair",
    price: "GH₵1,433.00",
    image: "/images/whitebackchair.png",
    hasOptions: false,
    category: "Furniture",
  },
  {
    id: 4,
    name: "Uzuri Table",
    price: "From GH₵700.00",
    image: "/images/whitetable.png",
    hasOptions: true,
    category: "Furniture",
  },
  {
    id: 5,
    name: "Cloudy Mirror",
    price: "GH₵350.00",
    image: "/images/mirror3.png",
    hasOptions: false,
    category: "Decor",
  },
];

// Define category colors
const categoryColors: { [key: string]: string } = {
  Furniture: "bg-[#F4F1DE] text-[#3D405B]",

  Sculptures: "bg-[#81B29A] text-white",
  Decor: "bg-[#E07A5F] text-white",
  Others: "bg-[#3D405B] text-white",
};

export default function FeaturedProducts() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-8">
      {products.map((product) => (
        <div key={product.id} className="flex flex-col bg-white p-4">
          <div className="relative aspect-square bg-white mb-4 group">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <div className="text-base font-medium text-gray-900 truncate">
                {product.name}
              </div>
              <span
                className={`
                whitespace-nowrap px-2.5 py-1 text-xs font-medium rounded-full
                ${categoryColors[product.category]}
              `}
              >
                {product.category}
              </span>
            </div>
            <p className="text-sm text-gray-900">{product.price}</p>

            <Link href={`/product/${product.id}`}>
              <Button
                variant="outline"
                className="w-full rounded-none border-black/30 text-black hover:border-2 hover:text-black"
              >
                <span className="flex items-center justify-center gap-2">
                  View Details
                </span>
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
