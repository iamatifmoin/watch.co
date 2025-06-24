import { ProductCard } from "@/components/product-card";
import { watches } from "@/lib/watch-data";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter, SlidersHorizontal } from "lucide-react";

export default function ProductsPage() {
  return (
    <div className="container px-4 py-12">
      {/* Header */}
      <div className="text-center space-y-4 mb-16 animate-in slide-in-from-top-4 duration-700">
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="bg-clip-text">Watch Collection</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover exceptional timepieces crafted by master horologists.
        </p>
      </div>

      {/* Filters & Sort */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 p-6 rounded-2xl bg-gradient-to-r from-card/50 to-card/30 border border-border/50 animate-in slide-in-from-top-6 duration-700 delay-150">
        <div className="flex items-center gap-4">
          <Button variant="outline" className="gap-2 rounded-full">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
          <Button variant="ghost" className="gap-2 rounded-full">
            <SlidersHorizontal className="h-4 w-4" />
            Advanced
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground whitespace-nowrap">
            {watches.length} products
          </span>
          <Select defaultValue="featured">
            <SelectTrigger className="w-[180px] rounded-full">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {watches.map((watch, index) => (
          <div
            key={watch.id}
            className="animate-in slide-in-from-bottom-8 duration-700"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <ProductCard watch={watch} />
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-16 animate-in slide-in-from-bottom-4 duration-700 delay-500">
        <Button
          size="lg"
          variant="outline"
          className="px-8 py-6 text-lg rounded-full border-2 hover:bg-muted/50 transition-all duration-300"
        >
          Load More Watches
        </Button>
      </div>
    </div>
  );
}
