
import React, { useCallback } from 'react';
import { Filters } from '../types';
import { XIcon, StarIcon } from './Icon';

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  filters: Filters;
  onFilterChange: (newFilters: Partial<Filters>) => void;
  onClearFilters: () => void;
  categories: string[];
  brands: string[];
  maxPrice: number;
}

const FilterSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="py-6 border-b border-gray-200">
    <h3 className="flow-root">
      <div className="flex items-center justify-between w-full">
        <span className="font-medium text-gray-900">{title}</span>
      </div>
    </h3>
    <div className="pt-6">{children}</div>
  </div>
);

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  isOpen,
  onClose,
  filters,
  onFilterChange,
  onClearFilters,
  categories,
  brands,
  maxPrice,
}) => {
  const handleCategoryChange = useCallback((category: string) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
    onFilterChange({ categories: newCategories });
  }, [filters.categories, onFilterChange]);

  const handleBrandChange = useCallback((brand: string) => {
    const newBrands = filters.brands.includes(brand)
      ? filters.brands.filter(b => b !== brand)
      : [...filters.brands, brand];
    onFilterChange({ brands: newBrands });
  }, [filters.brands, onFilterChange]);

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ price: { ...filters.price, max: Number(e.target.value) } });
  };
  
  const handleRatingChange = (rating: number) => {
    onFilterChange({ rating: rating === filters.rating ? 0 : rating });
  };

  const content = (
    <form className="lg:h-full flex flex-col">
      <div className="flex-1 px-4 py-6 sm:px-6 lg:px-0 overflow-y-auto">
        <div className="flex items-baseline justify-between">
            <h2 className="text-lg font-medium text-gray-900">Filters</h2>
            <button
                type="button"
                className="text-gray-500 hover:text-gray-700 font-medium text-sm"
                onClick={onClearFilters}
            >
                Clear all
            </button>
        </div>
        
        <FilterSection title="Category">
          <div className="space-y-4">
            {categories.map(category => (
              <div key={category} className="flex items-center">
                <input
                  id={`filter-category-${category}`}
                  type="checkbox"
                  checked={filters.categories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor={`filter-category-${category}`} className="ml-3 text-sm text-gray-600">{category}</label>
              </div>
            ))}
          </div>
        </FilterSection>

        <FilterSection title="Brand">
          <div className="space-y-4">
            {brands.map(brand => (
              <div key={brand} className="flex items-center">
                <input
                  id={`filter-brand-${brand}`}
                  type="checkbox"
                  checked={filters.brands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                  className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor={`filter-brand-${brand}`} className="ml-3 text-sm text-gray-600">{brand}</label>
              </div>
            ))}
          </div>
        </FilterSection>

        <FilterSection title="Price">
          <div className="space-y-4">
            <input
              type="range"
              min={0}
              max={maxPrice}
              value={filters.price.max}
              onChange={handlePriceChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>$0</span>
              <span>${filters.price.max}</span>
            </div>
          </div>
        </FilterSection>
        
        <FilterSection title="Rating">
            <div className="flex flex-col space-y-2">
                {[4, 3, 2, 1].map((rate) => (
                    <button type="button" key={rate} onClick={() => handleRatingChange(rate)} className={`flex items-center text-left p-2 rounded-md ${filters.rating === rate ? 'bg-indigo-50' : 'hover:bg-gray-100'}`}>
                        {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} filled={i < rate} className="w-5 h-5" />
                        ))}
                        <span className="ml-2 text-sm text-gray-600">& Up</span>
                    </button>
                ))}
            </div>
        </FilterSection>
      </div>
    </form>
  );

  return (
    <>
      {/* Mobile filter dialog */}
      <div className={`fixed inset-0 bg-black bg-opacity-25 z-40 ${isOpen ? 'block' : 'hidden'} lg:hidden`} onClick={onClose}></div>
      <div className={`fixed inset-y-0 left-0 w-full max-w-xs bg-white shadow-xl z-50 transform transition ease-in-out duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}>
        <div className="h-full flex flex-col">
            <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={onClose}
                >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </button>
            </div>
            {content}
        </div>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden lg:block lg:w-64 lg:flex-shrink-0">
        <div className="h-full relative">
          {content}
        </div>
      </aside>
    </>
  );
};

export default FilterSidebar;
