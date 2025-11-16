
export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  category: string;
  rating: number;
  reviews: number;
}

export interface Filters {
  categories: string[];
  brands: string[];
  price: {
    min: number;
    max: number;
  };
  rating: number;
}
