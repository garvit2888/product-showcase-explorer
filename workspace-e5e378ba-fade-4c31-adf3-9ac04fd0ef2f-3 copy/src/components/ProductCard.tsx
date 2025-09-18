'use client';

import { motion } from 'framer-motion';
import { Product } from '@/services/api';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export function ProductCard({ product, onViewDetails }: ProductCardProps) {
  const discountPrice = product.price * (1 - product.discountPercentage / 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-cover"
          />
          {product.discountPercentage > 0 && (
            <Badge className="absolute top-2 right-2 bg-red-500 text-white">
              -{product.discountPercentage}%
            </Badge>
          )}
        </div>
        
        <CardContent className="flex-1 p-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg line-clamp-2">{product.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
            
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{product.category}</Badge>
              <Badge variant="outline">{product.brand}</Badge>
            </div>
            
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-sm text-muted-foreground">({product.stock} in stock)</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">${discountPrice.toFixed(2)}</span>
              {product.discountPercentage > 0 && (
                <span className="text-sm text-muted-foreground line-through">
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="p-4 pt-0">
          <Button 
            onClick={() => onViewDetails(product)}
            className="w-full"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            View Details
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}