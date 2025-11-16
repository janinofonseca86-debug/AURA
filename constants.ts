
import { Product } from './types';

export const MOCK_PRODUCTS: Product[] = [
  { id: '1', name: 'Organic Cotton Tee', brand: 'EcoWear', price: 29.99, category: 'Tops', imageUrl: 'https://picsum.photos/seed/p1/400/500', rating: 4.5, reviews: 120 },
  { id: '2', name: 'Slim Fit Denim Jeans', brand: 'Urban Threads', price: 89.99, originalPrice: 110.00, category: 'Jeans', imageUrl: 'https://picsum.photos/seed/p2/400/500', rating: 4.2, reviews: 250 },
  { id: '3', name: 'Leather Ankle Boots', brand: 'Vagabond', price: 159.50, category: 'Shoes', imageUrl: 'https://picsum.photos/seed/p3/400/500', rating: 4.8, reviews: 95 },
  { id: '4', name: 'Classic Trench Coat', brand: 'London Fog', price: 220.00, category: 'Jackets', imageUrl: 'https://picsum.photos/seed/p4/400/500', rating: 4.9, reviews: 180 },
  { id: '5', name: 'Silk Scarf', brand: 'Artisan Co.', price: 45.00, category: 'Accessories', imageUrl: 'https://picsum.photos/seed/p5/400/500', rating: 4.6, reviews: 78 },
  { id: '6', name: 'Cashmere Sweater', brand: 'LuxeKnit', price: 180.00, category: 'Knitwear', imageUrl: 'https://picsum.photos/seed/p6/400/500', rating: 4.9, reviews: 112 },
  { id: '7', name: 'Linen Summer Dress', brand: 'Breezy', price: 75.00, category: 'Dresses', imageUrl: 'https://picsum.photos/seed/p7/400/500', rating: 4.7, reviews: 210 },
  { id: '8', name: 'Minimalist Wristwatch', brand: 'Timeless', price: 250.00, category: 'Accessories', imageUrl: 'https://picsum.photos/seed/p8/400/500', rating: 4.8, reviews: 150 },
  { id: '9', name: 'High-Waisted Trousers', brand: 'Modern Tailor', price: 95.00, originalPrice: 120.00, category: 'Trousers', imageUrl: 'https://picsum.photos/seed/p9/400/500', rating: 4.3, reviews: 99 },
  { id: '10', name: 'Canvas Tote Bag', brand: 'CarryAll', price: 35.00, category: 'Bags', imageUrl: 'https://picsum.photos/seed/p10/400/500', rating: 4.5, reviews: 300 },
  { id: '11', name: 'Chunky Sole Sneakers', brand: 'Urban Threads', price: 120.00, category: 'Shoes', imageUrl: 'https://picsum.photos/seed/p11/400/500', rating: 4.4, reviews: 189 },
  { id: '12', name: 'Puffer Jacket', brand: 'EcoWear', price: 199.99, category: 'Jackets', imageUrl: 'https://picsum.photos/seed/p12/400/500', rating: 4.7, reviews: 132 },
  { id: '13', name: 'Ribbed Knit Beanie', brand: 'LuxeKnit', price: 32.00, category: 'Accessories', imageUrl: 'https://picsum.photos/seed/p13/400/500', rating: 4.9, reviews: 401 },
  { id: '14', name: 'Pleated Midi Skirt', brand: 'Breezy', price: 65.50, category: 'Skirts', imageUrl: 'https://picsum.photos/seed/p14/400/500', rating: 4.6, reviews: 115 },
  { id: '15', name: 'Leather Crossbody Bag', brand: 'Vagabond', price: 130.00, category: 'Bags', imageUrl: 'https://picsum.photos/seed/p15/400/500', rating: 4.8, reviews: 88 },
  { id: '16', name: 'Wool Blazer', brand: 'Modern Tailor', price: 175.00, category: 'Jackets', imageUrl: 'https://picsum.photos/seed/p16/400/500', rating: 4.7, reviews: 65 },
];

export const CATEGORIES = [...new Set(MOCK_PRODUCTS.map(p => p.category))];
export const BRANDS = [...new Set(MOCK_PRODUCTS.map(p => p.brand))];
export const MAX_PRICE = MOCK_PRODUCTS.reduce((max, p) => (p.price > max ? p.price : max), 0);
