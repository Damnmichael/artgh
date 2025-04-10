"use client";

import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    quote:
      "The artwork I purchased has completely transformed my living space. The quality and craftsmanship exceeded my expectations.",
    author: "Michael",
    title: "Art Lover",
  },
  {
    id: 2,
    quote:
      "The bed i got from uzuri is soo comfy and the design is amazing. I love it",
    author: "Michael",
    title: "Interior Lover",
  },
  {
    id: 3,
    quote:
      "The plant is making my room look soo nice and the price is just right.",
    author: "Kofi",
    title: "Plant Lover",
  },
  {
    id: 4,
    quote:
      "Uzuri keeps reminding me of how pretty i look every morning because of the mirror i got from them. I love it",
    author: "Rae",
    title: "Architect",
  },
];

export default function TestimonialSlider() {
  const [, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      className="w-full max-w-3xl mx-auto"
    >
      <CarouselContent>
        {testimonials.map((testimonial) => (
          <CarouselItem key={testimonial.id}>
            <div className="text-center px-4 md:px-8 py-8">
              <Quote className="mx-auto h-10 w-10 text-gray-300 mb-6" />
              <blockquote className="text-xl md:text-2xl font-serif italic mb-6 text-[#E07A5F]">
                {testimonial.quote}
              </blockquote>
              <div className="font-medium">{testimonial.author}</div>
              <div className="text-gray-500 text-sm">{testimonial.title}</div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center gap-2 mt-6">
        <CarouselPrevious className="static transform-none rounded-none border-[#E07A5F] text-black hover:bg-[#E07A5F] hover:text-white" />
        <CarouselNext className="static transform-none rounded-none border-[#E07A5F] text-black hover:bg-[#E07A5F] hover:text-white" />
      </div>
    </Carousel>
  );
}
