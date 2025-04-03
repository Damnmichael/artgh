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
    author: "Sarah Johnson",
    title: "Art Collector",
  },
  {
    id: 2,
    quote:
      "I've been collecting art for over a decade, and the pieces from Artistry Gallery stand out for their uniqueness and emotional depth.",
    author: "Michael Chen",
    title: "Interior Designer",
  },
  {
    id: 3,
    quote:
      "Working with Artistry Gallery to find the perfect statement piece for my client's home was a seamless experience. Their curation is impeccable.",
    author: "Emma Rodriguez",
    title: "Interior Designer",
  },
  {
    id: 4,
    quote:
      "The digital art collection is innovative and thought-provoking. I appreciate how Artistry Gallery embraces both traditional and contemporary mediums.",
    author: "David Thompson",
    title: "Tech Executive",
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
