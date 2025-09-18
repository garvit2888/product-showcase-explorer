import axios from 'axios';

const BASE_URL = 'https://dummyjson.com';

// Product interface
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

// Products response interface
export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

// Category interface
export interface Category {
  name: string;
  slug: string;
  url: string;
}

export const fetchProducts = async (limit = 10, skip = 0, category?: string) => {
  let url = `${BASE_URL}/products?limit=${limit}&skip=${skip}`;
  if (category && category !== 'all') {
    url = `${BASE_URL}/products/category/${category}?limit=${limit}&skip=${skip}`;
  }
  return await axios.get<ProductsResponse>(url);
};

export const fetchCategories = async () => {
  return await axios.get<string[]>(`${BASE_URL}/products/categories`);
};

export const fetchProductDetails = async (id: number) => {
  return await axios.get<Product>(`${BASE_URL}/products/${id}`);
};

export const searchProducts = async (query: string, limit = 10, skip = 0) => {
  return await axios.get<ProductsResponse>(`${BASE_URL}/products/search?q=${query}&limit=${limit}&skip=${skip}`);
};