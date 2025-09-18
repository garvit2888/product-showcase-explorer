'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Product, ProductsResponse } from '@/services/api';
import { fetchProducts, fetchCategories } from '@/services/api';
import { ProductGrid } from '@/components/ProductGrid';
import { ProductFilters } from '@/components/ProductFilters';
import { ProductModal } from '@/components/ProductModal';
import { ProductPagination } from '@/components/ProductPagination';
import { ProductSkeletonGrid } from '@/components/ProductSkeletonGrid';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, X, ShoppingCart, Package } from 'lucide-react';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch categories
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetchCategories();
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    getCategories();
  }, []);

  // Fetch products
  const fetchProductData = useCallback(async () => {
    setLoading(true);
    try {
      const skip = (currentPage - 1) * itemsPerPage;
      const response = await fetchProducts(itemsPerPage, skip, selectedCategory);
      
      let fetchedProducts = response.data.products;
      setTotalItems(response.data.total);
      setTotalPages(Math.ceil(response.data.total / itemsPerPage));
      
      // Apply search filter
      if (searchQuery) {
        fetchedProducts = fetchedProducts.filter(product =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
      
      // Apply sorting
      switch (sortBy) {
        case 'price-asc':
          fetchedProducts.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          fetchedProducts.sort((a, b) => b.price - a.price);
          break;
        case 'rating-desc':
          fetchedProducts.sort((a, b) => b.rating - a.rating);
          break;
        case 'title-asc':
          fetchedProducts.sort((a, b) => a.title.localeCompare(b.title));
          break;
      }
      
      setProducts(fetchedProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  }, [currentPage, itemsPerPage, selectedCategory, searchQuery, sortBy]);

  useEffect(() => {
    fetchProductData();
  }, [fetchProductData]);

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setSortBy('default');
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Package className="w-8 h-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold">Product Showcase Explorer</h1>
                <p className="text-sm text-muted-foreground">Discover amazing products with ease</p>
              </div>
            </div>
            <Badge variant="secondary" className="text-sm">
              {totalItems} Products
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <ProductFilters
            categories={categories}
            selectedCategory={selectedCategory}
            searchQuery={searchQuery}
            sortBy={sortBy}
            onCategoryChange={setSelectedCategory}
            onSearchChange={setSearchQuery}
            onSortChange={setSortBy}
            onClearFilters={handleClearFilters}
          />

          <div className="space-y-6">
            {loading ? (
              <ProductSkeletonGrid count={itemsPerPage} />
            ) : products.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">No products found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your filters or search query
                </p>
                <Button onClick={handleClearFilters}>
                  Clear all filters
                </Button>
              </motion.div>
            ) : (
              <>
                <ProductGrid
                  products={products}
                  onViewDetails={handleViewDetails}
                />
                
                {totalPages > 1 && (
                  <ProductPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    itemsPerPage={itemsPerPage}
                    totalItems={totalItems}
                    onPageChange={handlePageChange}
                    onItemsPerPageChange={handleItemsPerPageChange}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </main>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}