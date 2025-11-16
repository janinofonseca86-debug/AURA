
import React, { useState } from 'react';
import { SearchIcon, UserIcon, HeartIcon, ShoppingBagIcon, MenuIcon, XIcon, FilterIcon } from './Icon';

interface HeaderProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    onFilterToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery, onFilterToggle }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = ['New In', 'Clothing', 'Shoes', 'Accessories', 'Brands', 'Sale'];

    return (
        <header className="sticky top-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Mobile Menu & Filter Toggles */}
                    <div className="flex items-center lg:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-gray-900">
                            {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                        </button>
                        <button onClick={onFilterToggle} className="ml-4 text-gray-600 hover:text-gray-900">
                            <FilterIcon className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Logo */}
                    <div className="flex-shrink-0">
                         <a href="#" className="text-2xl font-bold tracking-tight text-gray-900">AURA</a>
                    </div>
                    
                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex lg:space-x-8">
                        {navLinks.map((link) => (
                            <a key={link} href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">{link}</a>
                        ))}
                    </nav>

                    {/* Search & Icons */}
                    <div className="flex items-center justify-end">
                        <div className="relative hidden sm:block">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search products..."
                                className="pl-10 pr-4 py-2 w-40 lg:w-64 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <SearchIcon className="h-5 w-5 text-gray-400" />
                            </div>
                        </div>

                        <div className="flex items-center ml-4 space-x-4">
                            <button className="p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors">
                                <UserIcon className="h-6 w-6" />
                            </button>
                            <button className="p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors relative">
                                <HeartIcon className="h-6 w-6" />
                                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
                            </button>
                            <button className="p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors">
                                <ShoppingBagIcon className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden border-t border-gray-200">
                    <nav className="px-2 pt-2 pb-3 space-y-1">
                        {navLinks.map((link) => (
                             <a key={link} href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">{link}</a>
                        ))}
                    </nav>
                     <div className="p-4 border-t">
                        <div className="relative">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search products..."
                                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <SearchIcon className="h-5 w-5 text-gray-400" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
