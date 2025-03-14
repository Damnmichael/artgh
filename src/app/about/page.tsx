import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">
            About Artistry
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connecting exceptional artists with discerning collectors since 2010
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Artistry Gallery was founded with a singular vision: to create a
                space where art transcends mere decoration to become a
                meaningful part of people's lives. What began as a small gallery
                in a historic downtown building has evolved into a renowned
                platform for artistic expression and discovery.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our journey has been guided by a deep appreciation for
                craftsmanship, creativity, and the transformative power of art.
                We believe that every piece tells a story, evokes emotion, and
                has the potential to create profound connections between the
                artist and the viewer.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, Artistry Gallery represents a diverse community of
                established and emerging artists from around the world. We
                continue to curate collections that challenge, inspire, and
                enrich the lives of our clients.
              </p>
            </div>
            <div className="relative h-[500px] w-full">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Artistry Gallery"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="mb-24 bg-stone-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-serif mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                At Artistry Gallery, our mission is to bridge the gap between
                exceptional artists and discerning collectors. We strive to
                create a platform that celebrates artistic excellence, fosters
                cultural dialogue, and makes the experience of discovering and
                acquiring art both accessible and meaningful.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-4">Curate</h3>
                  <p className="text-gray-600">
                    We carefully select artworks that demonstrate exceptional
                    quality, originality, and artistic vision.
                  </p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-4">Connect</h3>
                  <p className="text-gray-600">
                    We create meaningful connections between artists,
                    collectors, and art enthusiasts through our platform.
                  </p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-4">Cultivate</h3>
                  <p className="text-gray-600">
                    We nurture artistic growth and appreciation through
                    education, events, and community engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the passionate individuals behind Artistry Gallery
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alexandra Chen",
                title: "Founder & Creative Director",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Marcus Johnson",
                title: "Head Curator",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Sophia Rodriguez",
                title: "Artist Relations",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "David Kim",
                title: "Gallery Manager",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium">{member.name}</h3>
                <p className="text-gray-600">{member.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-black text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif mb-6">
              Join Our Artistic Journey
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Explore our curated collection and find the perfect piece to
              enhance your space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-none px-8"
              >
                <Link href="/gallery">View Gallery</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 rounded-none px-8"
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
        </section>
      </div>
    </div>
  );
}
