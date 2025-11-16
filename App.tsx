
import React, { useState, useMemo, useCallback } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FilterSidebar from './components/FilterSidebar';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import { Product, Filters } from './types';
import { MOCK_PRODUCTS, MAX_PRICE, CATEGORIES, BRANDS } from './constants';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterSidebarOpen, setFilterSidebarOpen] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    categories: [],
    brands: [],
    price: { min: 0, max: Math.ceil(MAX_PRICE) },
    rating: 0,
  });

  const handleFilterChange = useCallback((newFilters: Partial<Filters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilters({
      categories: [],
      brands: [],
      price: { min: 0, max: Math.ceil(MAX_PRICE) },
      rating: 0,
    });
    setSearchQuery('');
  }, []);

  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(product => {
      const searchLower = searchQuery.toLowerCase();
      const nameMatch = product.name.toLowerCase().includes(searchLower);
      const brandMatch = product.brand.toLowerCase().includes(searchLower);

      const categoryMatch = filters.categories.length === 0 || filters.categories.includes(product.category);
      const brandFilterMatch = filters.brands.length === 0 || filters.brands.includes(product.brand);
      const priceMatch = product.price >= filters.price.min && product.price <= filters.price.max;
      const ratingMatch = product.rating >= filters.rating;

      return (nameMatch || brandMatch) && categoryMatch && brandFilterMatch && priceMatch && ratingMatch;
    });
  }, [searchQuery, filters]);

  return (
    <div className="bg-gray-50 font-sans text-gray-800 antialiased">
      <Header 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onFilterToggle={() => setFilterSidebarOpen(prev => !prev)}
      />
      <main>
        <HeroSection />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <FilterSidebar 
              isOpen={isFilterSidebarOpen}
              onClose={() => setFilterSidebarOpen(false)}
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={clearFilters}
              categories={CATEGORIES}
              brands={BRANDS}
              maxPrice={Math.ceil(MAX_PRICE)}
            />
            <div className="flex-1">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Products ({filteredProducts.length})</h2>
              </div>
              <ProductGrid products={filteredProducts} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
