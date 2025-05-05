import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-4 text-[#E07A5F]">
            About Uzuri
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connecting exceptional artists with discerning collectors since 2010
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif mb-6 text-[#E07A5F]">
                Our Story
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Uzuri is a haven of accent furniture, elegant décor and
                complementary art pieces. Inspired by nature and the rich
                African culture, stories, and artistry. Uzuri offers a
                beautifully curated collection of accent tables, comfortable
                chairs and its complements to make your space feel welcoming and
                cozy. Each item is thoughtfully crafted, reflecting the beauty
                of skilled craftsmanship and the soul of our local artisans.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                What began as a small gallery in at home has evolved into a
                renowned platform for artistic expression and discovery.
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
                src="/images/artabout.jpg?height=600&width=500"
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
              <h2 className="text-3xl font-serif mb-6 text-[#E07A5F]">
                Our Mission
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                At Artistry Gallery, our mission is to bridge the gap between
                exceptional artists and discerning collectors. We strive to
                create a platform that celebrates artistic excellence, fosters
                cultural dialogue, and makes the experience of discovering and
                acquiring art both accessible and meaningful.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-4 text-[#E07A5F]">
                    Curate
                  </h3>
                  <p className="text-gray-600">
                    We carefully select artworks that demonstrate exceptional
                    quality, originality, and artistic vision.
                  </p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-4 text-[#E07A5F]">
                    Connect
                  </h3>
                  <p className="text-gray-600">
                    We create meaningful connections between artists,
                    collectors, and art enthusiasts through our platform.
                  </p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-4 text-[#E07A5F]">
                    Cultivate
                  </h3>
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
            <h2 className="text-3xl font-serif mb-4 text-[#E07A5F]">
              Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the passionate individuals behind Artistry Gallery
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              {
                name: "R.H.N.A Mettle",
                title: "Founder & Creative Director",
                image: "/images/ceo.jpg?height=600&width=400",
              },
              {
                name: "Marcus Johnson",
                title: "Head Curator",
                image: "/images/ceo2.jpg?height=600&width=400",
              },
              {
                name: "Sophia Rodriguez",
                title: "Artist Relations",
                image: "/images/ceo2.jpg?height=600&width=400",
              },
              {
                name: "David Kim",
                title: "Gallery Manager",
                image: "/images/ceo2.jpg?height=600&width=400",
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
                <h3 className="text-xl font-medium text-[#E07A5F]">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        {/* <section className="bg-[#c09e80] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif mb-6 text-white">
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
                variant="outline"
                className="rounded-none border-[#c09e80]  text-black hover:bg-[#c09e80] hover:text-white"
              >
                <Link href="/gallery">View Gallery</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
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
        </section> */}
      </div>
    </div>
  );
}
