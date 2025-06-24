import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getWatchById, watches } from "@/lib/watch-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Star,
  Heart,
  Share2,
  ShoppingCart,
  ArrowLeft,
  Shield,
  Truck,
  RotateCcw,
} from "lucide-react";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return watches.map((watch) => ({
    id: watch.id,
  }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const watch = getWatchById(params.id);

  if (!watch) {
    notFound();
  }

  const discountPercentage = watch.originalPrice
    ? Math.round(
        ((watch.originalPrice - watch.price) / watch.originalPrice) * 100
      )
    : 0;

  return (
    <div className="container px-4 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-8 text-sm text-muted-foreground">
        <Link href="/products" className="hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4 inline mr-1" />
          Back to Collection
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Section */}
        <div className="space-y-4">
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-muted/20 to-muted/40">
            <Image
              src={watch.image}
              alt={watch.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {discountPercentage > 0 && (
              <Badge className="absolute top-6 left-6 bg-gradient-to-r from-red-500 to-red-600 text-white border-0 shadow-lg text-base px-3 py-1">
                -{discountPercentage}% OFF
              </Badge>
            )}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge
                variant="secondary"
                className="text-sm font-medium uppercase tracking-wider"
              >
                {watch.brand}
              </Badge>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              {watch.name}
            </h1>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(watch.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="font-medium">{watch.rating}</span>
              <span className="text-muted-foreground">
                ({watch.reviewCount} reviews)
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                ${watch.price.toLocaleString()}
              </span>
              {watch.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  ${watch.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            {!watch.inStock && (
              <Badge variant="destructive" className="w-fit">
                Out of Stock
              </Badge>
            )}
          </div>

          {/* Description */}
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {watch.description}
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Key Features</h3>
            <div className="grid grid-cols-2 gap-3">
              {watch.features.map((feature, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="justify-start p-3 bg-gradient-to-r from-secondary/50 to-secondary/30 text-secondary-foreground border-0"
                >
                  {feature}
                </Badge>
              ))}
            </div>
          </div>

          {/* Specifications */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Specifications</h3>
            <div className="space-y-3 p-6 rounded-2xl bg-gradient-to-br from-card/50 to-card/30 border border-border/50">
              {Object.entries(watch.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="text-muted-foreground capitalize font-medium">
                    {key.replace(/([A-Z])/g, " $1").trim()}:
                  </span>
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground py-6 text-lg rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-primary/25"
              disabled={!watch.inStock}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              {watch.inStock ? "Add to Cart" : "Notify When Available"}
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-full py-6 text-lg rounded-full border-2 hover:bg-muted/50 transition-all duration-300"
            >
              Buy Now
            </Button>
          </div>

          {/* Guarantees */}
          <div className="grid grid-cols-3 gap-4 pt-8">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 mx-auto bg-gradient-to-r from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm font-medium">Authentic Guarantee</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 mx-auto bg-gradient-to-r from-primary/20 to-primary/20 rounded-full flex items-center justify-center">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm font-medium">Free Shipping</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 mx-auto bg-gradient-to-r from-primary/10 to-primary/20 rounded-full flex items-center justify-center">
                <RotateCcw className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm font-medium">30-Day Returns</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
