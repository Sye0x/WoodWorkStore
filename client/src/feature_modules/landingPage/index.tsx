import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  ShoppingBag,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const products = [
  {
    name: "Oak Dining Table",
    category: "Dining Furniture",
    price: "$1,299",
    image: "https://images.unsplash.com/photo-161 table",
  },
  {
    name: "Minimalist Wooden Chair",
    category: "Living Room",
    price: "$349",
    image: "https://images.unsplash.com/photo-1503602646674-775c7bb1c6e7",
  },
  {
    name: "Modern Coffee Table",
    category: "Living Room",
    price: "$599",
    image: "https://images.unsplash.com/photo-1499933374294-4584851497cc",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F4] text-[#30271F]">
      {/* Navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="#" className="text-2xl font-bold tracking-tight">
          wood<span className="text-[#A4774D]">work.</span>
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#home" className="hover:text-[#A4774D]">
            Home
          </a>
          <a href="#products" className="hover:text-[#A4774D]">
            Products
          </a>
          <a href="#about" className="hover:text-[#A4774D]">
            About Us
          </a>
          <a href="#contact" className="hover:text-[#A4774D]">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Button className="hidden bg-[#30271F] text-white hover:bg-[#594534] sm:flex">
            <ShoppingBag className="mr-2 size-4" />
            Shop Now
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu />
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-12 md:grid-cols-2 md:py-20"
      >
        <div className="space-y-7">
          <span className="inline-block rounded-full bg-[#EDE5D9] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#896441]">
            Crafted with nature
          </span>

          <h1 className="max-w-xl text-5xl font-semibold leading-[1.12] tracking-tight md:text-7xl">
            Furniture that makes your house a{" "}
            <span className="text-[#A4774D]">home.</span>
          </h1>

          <p className="max-w-md text-base leading-7 text-[#82766A]">
            Discover beautifully handcrafted wooden furniture designed to bring
            warmth, comfort, and timeless elegance to your space.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button className="h-12 bg-[#30271F] px-7 text-white hover:bg-[#594534]">
              Explore Collection
              <ArrowRight className="ml-2 size-4" />
            </Button>

            <Button
              variant="outline"
              className="h-12 border-[#D8CABB] bg-transparent px-7"
            >
              Our Story
            </Button>
          </div>

          <div className="flex gap-10 pt-5">
            <div>
              <h3 className="text-2xl font-bold">10+</h3>
              <p className="text-sm text-[#82766A]">Years of experience</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">500+</h3>
              <p className="text-sm text-[#82766A]">Happy customers</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">100%</h3>
              <p className="text-sm text-[#82766A]">Quality wood</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
            alt="Warm modern wooden living room"
            className="h-[420px] w-full rounded-2xl object-cover md:h-[560px]"
          />

          <Card className="absolute -bottom-6 -left-4 flex flex-row items-center gap-4 border-0 bg-white p-4 shadow-xl md:-left-8">
            <div className="rounded-full bg-[#F2E9DC] p-3 text-[#A4774D]">
              <Star className="size-5 fill-current" />
            </div>
            <div>
              <p className="font-semibold">Made with care</p>
              <p className="text-xs text-muted-foreground">
                Every detail matters.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#A4774D]">
              Our collection
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Made for your space.
            </h2>
          </div>

          <a
            href="#products"
            className="hidden items-center gap-2 text-sm font-semibold sm:flex"
          >
            View all <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card
              key={product.name}
              className="group overflow-hidden rounded-xl border-[#EAE2D8] bg-white p-0 shadow-none"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex items-center justify-between p-5">
                <div>
                  <p className="mb-1 text-xs text-[#A4774D]">
                    {product.category}
                  </p>
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="mt-2 font-bold">{product.price}</p>
                </div>

                <Button variant="outline" size="icon" className="rounded-full">
                  <ArrowUpRight className="size-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-[#30271F] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1538688423619-a81d3f23454b"
            alt="Beautiful wooden furniture interior"
            className="h-96 w-full rounded-xl object-cover"
          />

          <div className="space-y-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C49B72]">
              Why choose us
            </p>
            <h2 className="text-4xl font-semibold leading-tight">
              Natural materials. Timeless designs.
            </h2>
            <p className="leading-7 text-white/60">
              We believe great furniture should last for generations. Every
              piece is thoughtfully designed with quality materials, attention
              to detail, and a passion for craftsmanship.
            </p>
            <Button className="bg-[#C49B72] text-[#30271F] hover:bg-[#D7B28D]">
              Learn More <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-6 py-10 sm:flex-row sm:items-center"
      >
        <a href="#" className="text-2xl font-bold">
          wood<span className="text-[#A4774D]">work.</span>
        </a>
        <p className="text-sm text-[#82766A]">
          © 2026 Wood Work. Crafted with care.
        </p>
        <p className="text-sm text-[#82766A]">Furniture made to last.</p>
      </footer>
    </div>
  );
}
