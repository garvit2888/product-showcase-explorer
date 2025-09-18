'use client';

import { ProductSkeleton } from './ProductSkeleton';

interface ProductSkeletonGridProps {
  count?: number;
}

export function ProductSkeletonGrid({ count = 8 }: ProductSkeletonGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <ProductSkeleton key={index} />
      ))}
    </div>
  );
}