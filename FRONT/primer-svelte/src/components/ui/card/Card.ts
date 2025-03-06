// src/components/ProductCard/ProductCard.ts
export interface Product {
    name: string;
    price: string;
    image: string;
    rating: number;
  }
  
  export const DEFAULT_PRODUCT: Product = {
    name: "Product Name",
    price: "$0.00",
    image: "/images/default-product.webp",
    rating: 0,
  };