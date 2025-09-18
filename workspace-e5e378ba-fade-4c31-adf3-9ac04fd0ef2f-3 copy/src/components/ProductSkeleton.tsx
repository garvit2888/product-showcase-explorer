'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function ProductSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden">
        <div className="aspect-square overflow-hidden">
          <Skeleton className="w-full h-full" />
        </div>
        
        <CardContent className="flex-1 p-4">
          <div className="space-y-2">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            
            <div className="flex gap-2">
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-6 w-16" />
            </div>
            
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-8" />
              <Skeleton className="h-4 w-16" />
            </div>
            
            <div className="flex items-center gap-2">
              <Skeleton className="h-8 w-16" />
              <Skeleton className="h-4 w-12" />
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="p-4 pt-0">
          <Skeleton className="w-full h-10" />
        </CardFooter>
      </Card>
    </motion.div>
  );
}