"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import type { Watch } from "@/lib/watch-data";

interface ProductCardProps {
  watch: Watch;
}

export function ProductCard({ watch }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const discountPercentage = watch.originalPrice
    ? Math.round(
        ((watch.originalPrice - watch.price) / watch.originalPrice) * 100
      )
    : 0;

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-border/50 hover:border-border transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full">
      {/* Discount Badge */}
      {discountPercentage > 0 && (
        <Badge className="absolute top-4 left-4 z-10 bg-gradient-to-r from-red-500 to-red-600 text-white border-0 shadow-lg">
          -{discountPercentage}%
        </Badge>
      )}

      {/* Stock Status */}
      {!watch.inStock && (
        <Badge
          variant="secondary"
          className="absolute top-4 right-4 z-10 bg-muted/80 text-muted-foreground"
        >
          Out of Stock
        </Badge>
      )}

      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-muted/20 to-muted/40">
        {/* Loading skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-muted/40 to-muted/60 animate-pulse flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
          </div>
        )}

        <Image
          src={watch.image}
          alt={watch.name}
          fill
          className={`object-cover transition-all duration-700 group-hover:scale-110 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onLoad={() => setImageLoaded(true)}
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Overlay Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Link href={`/products/${watch.id}`}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 border-0"
            >
              <Eye className="w-4 h-4 mr-2" />
              View
            </Button>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4 flex flex-col flex-grow">
        {/* Brand & Rating */}
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            {watch.brand}
          </p>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{watch.rating}</span>
            <span className="text-sm text-muted-foreground">
              ({watch.reviewCount})
            </span>
          </div>
        </div>

        {/* Name */}
        <h3 className="font-bold text-xl leading-tight line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {watch.name}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed flex-grow">
          {watch.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {watch.features.slice(0, 2).map((feature, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-xs bg-gradient-to-r from-secondary/50 to-secondary/30 text-secondary-foreground border-0"
            >
              {feature}
            </Badge>
          ))}
          {watch.features.length > 2 && (
            <Badge variant="outline" className="text-xs">
              +{watch.features.length - 2} more
            </Badge>
          )}
        </div>

        {/* Price - Fixed at bottom */}
        <div className="flex items-center justify-between pt-2 mt-auto">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                ${watch.price.toLocaleString()}
              </span>
              {watch.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${watch.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>

          <Link href={`/products/${watch.id}`}>
            <Button
              variant="ghost"
              size="sm"
              disabled={!watch.inStock}
              className="bg-gradient-to-r from-secondary/20 to-secondary/10 hover:from-secondary/30 hover:to-secondary/20 transition-all duration-300 rounded-full px-6"
            >
              {watch.inStock ? "View Details" : "Notify Me"}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
