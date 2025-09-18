'use client';

import { motion } from 'framer-motion';
import { Product } from '@/services/api';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onViewDetails: (product: Product) => void;
}

export function ProductGrid({ products, onViewDetails }: ProductGridProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <ProductCard
            product={product}
            onViewDetails={onViewDetails}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}