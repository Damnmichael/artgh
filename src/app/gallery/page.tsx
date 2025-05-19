import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products } from "@/data/featured-products";

// Define category colors
const categoryColors: { [key: string]: string } = {
  Furniture: "bg-[#F4F1DE] text-[#3D405B]",
  Sculptures: "bg-[#81B29A] text-white",
  Decor: "bg-[#E07A5F] text-white",
  Others: "bg-[#3D405B] text-white",
};

const categories = [
  { id: "all", name: "All" },
  { id: "Sculptures", name: "Sculptures" },
  { id: "Decor", name: "Decor" },
  { id: "Furniture", name: "Furniture" },
  { id: "Others", name: "Others" },
];

export default function GalleryPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl  text-[#E07A5F] md:text-5xl font-serif mb-4">
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
                  className="data-[state=active]:border-b-2 data-[state=active]:border-[#E07A5F] data-[state=active]:rounded-none data-[state=active]:shadow-none px-6 py-3"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* All Products */}
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-8">
              {products.length === 0 ? (
                <div className="col-span-full text-center text-gray-500 py-8">
                  No contents here
                </div>
              ) : (
                products.map((product) => (
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
                ))
              )}
            </div>
          </TabsContent>

          {/* Category Tabs */}
          {categories.slice(1).map((category) => {
            const filteredProducts = products.filter(
              (product) => product.category === category.id
            );
            return (
              <TabsContent
                key={category.id}
                value={category.id}
                className="mt-0"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-8">
                  {filteredProducts.length === 0 ? (
                    <div className="col-span-full text-center text-gray-500 py-8">
                      No contents here
                    </div>
                  ) : (
                    filteredProducts.map((product) => (
                      <div
                        key={product.id}
                        className="flex flex-col bg-white p-4"
                      >
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
                          <p className="text-sm text-gray-900">
                            {product.price}
                          </p>
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
                    ))
                  )}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl md:text-3xl font-serif mb-4 text-[#E07A5F]">
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
            className="rounded-none border-[#E07A5F]  text-black hover:bg-[#E07A5F] hover:text-white"
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
