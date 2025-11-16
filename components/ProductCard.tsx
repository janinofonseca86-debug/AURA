
import React from 'react';
import { Product } from '../types';
import { StarIcon } from './Icon';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative flex flex-col">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 h-80">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href="#">
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
        </div>
        <div className="text-right">
            <p className="text-sm font-medium text-gray-900">${product.price.toFixed(2)}</p>
            {product.originalPrice && (
                 <p className="text-xs text-gray-500 line-through">${product.originalPrice.toFixed(2)}</p>
            )}
        </div>
      </div>
      <div className="mt-1 flex items-center">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} filled={i < Math.round(product.rating)} className="h-4 w-4" />
        ))}
        <span className="ml-2 text-xs text-gray-500">{product.reviews} reviews</span>
      </div>
    </div>
  );
};

export default ProductCard;
