
import React from 'react';

const Footer: React.FC = () => {
  const sections = {
    'Shop': ['Women', 'Men', 'Kids', 'Home'],
    'Company': ['About', 'Careers', 'Press', 'Affiliates'],
    'Help': ['Contact Us', 'Shipping', 'Returns', 'FAQ'],
    'Connect': ['Instagram', 'Facebook', 'Twitter', 'Pinterest']
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(sections).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">{title}</h3>
              <ul className="mt-4 space-y-4">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-base text-gray-500 hover:text-gray-900">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-base text-gray-400 md:order-1">&copy; 2024 Aura Marketplace, Inc. All rights reserved.</p>
          <form className="mt-4 md:mt-0 md:order-2">
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <div className="flex sm:max-w-xs">
                <input id="email-address" type="email" autoComplete="email" required className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your email" />
                <div className="ml-3 flex-shrink-0">
                    <button type="submit" className="w-full bg-indigo-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Sign up
                    </button>
                </div>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
