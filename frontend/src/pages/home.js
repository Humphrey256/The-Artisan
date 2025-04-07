// src/pages/Home.js
import React from 'react';

const Home = () => {
  const products = [
    { id: 1, name: 'Berge Casual Bag', price: 68.56, category: 'Casual Bag', image: '/images/bag1.jpg' },
    { id: 2, name: 'Brown Casual Bag', price: 68.56, category: 'Casual Bag', image: '/images/bag2.jpg' },
    { id: 3, name: 'Orange Casual Bag', price: 68.56, category: 'Casual Bag', image: '/images/bag3.jpg' },
  ];

  return (
    <div className="home mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="hero bg-gray-100 py-12 md:py-20 rounded-lg mb-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our New Collection
          </h1>
          <div className="relative max-w-md mx-auto">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full border border-gray-300 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* New Collection Section */}
      <section className="new-collection mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12">
          New Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="product-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-700 font-medium mb-4">${product.price.toFixed(2)}</p>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promo Section */}
      <section className="promo bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 md:p-10 mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Special Promo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Limited Time Offer</h3>
            <p className="text-gray-600">Get 20% off on all casual bags this week!</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Free Shipping</h3>
            <p className="text-gray-600">On orders over $100</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;