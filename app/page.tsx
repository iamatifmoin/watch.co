import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Truck } from "lucide-react";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
        <div className="relative z-10 container px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                Exceptional Timepieces
              </span>
              <br />
              <span className="bg-gradient-to-l from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                for Every Moment
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover luxury watches from the world's finest craftsmen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground px-8 py-6 text-lg rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-primary/25"
                >
                  Explore Collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <Link href="/products">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 text-lg rounded-full border-2 hover:bg-muted/50 transition-all duration-300"
                >
                  Watch Catalog
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-gradient-to-r from-secondary/20 to-transparent rounded-full blur-3xl" />
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-transparent to-muted/20">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-8 rounded-2xl bg-gradient-to-b from-card/50 to-card/20 border border-border/50">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Premium Quality</h3>
              <p className="text-muted-foreground">
                Curated selection of authentic luxury timepieces.
              </p>
            </div>

            <div className="text-center space-y-4 p-8 rounded-2xl bg-gradient-to-b from-card/50 to-card/20 border border-border/50">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary/20 to-primary/20 rounded-2xl flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Authentic Guarantee</h3>
              <p className="text-muted-foreground">
                Certification and warranty for peace of mind.
              </p>
            </div>

            <div className="text-center space-y-4 p-8 rounded-2xl bg-gradient-to-b from-card/50 to-card/20 border border-border/50">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Free Worldwide Shipping</h3>
              <p className="text-muted-foreground">
                Secure delivery with full insurance coverage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
