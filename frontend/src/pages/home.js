// src/pages/Home.js
import React from 'react';

const Home = () => {
  const products = [
    { id: 1, name: 'Berge Casual Bag', price: 68.56, category: 'Casual Bag', image: '/images/bag1.jpg' },
    { id: 2, name: 'Brown Casual Bag', price: 68.56, category: 'Casual Bag', image: '/images/bag2.jpg' },
    { id: 3, name: 'Orange Casual Bag', price: 68.56, category: 'Casual Bag', image: '/images/bag3.jpg' },
  ];

  return (
    <div className="home">
      <div className="hero bg-gray-100 py-10">
        <h1 className="text-4xl font-bold text-center">Our New Collection</h1>
        <div className="flex justify-center mt-4">
          <input type="text" placeholder="Search..." className="border border-gray-300 rounded px-4 py-2" />
        </div>
      </div>

      <section className="new-collection py-10">
        <h2 className="text-3xl font-bold text-center">New Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {products.map((product) => (
            <div key={product.id} className="product-card border rounded p-4">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <h3 className="text-xl font-bold mt-4">{product.name}</h3>
              <p className="text-gray-700">${product.price.toFixed(2)}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      <section className="promo">
        <h2>Special Promo</h2>
        {/* Add promo items here */}
      </section>
    </div>
  );
};

export default Home;