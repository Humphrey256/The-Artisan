// src/pages/Home.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // Your CSS file

const Home = () => {
  const products = [
    { id: 1, name: 'Berge Casual Bag', price: 68.56, category: 'Casual Bag', image: '/images/bag1.jpg' },
    { id: 2, name: 'Brown Casual Bag', price: 68.56, category: 'Casual Bag', image: '/images/bag2.jpg' },
    { id: 3, name: 'Orange Casual Bag', price: 68.56, category: 'Casual Bag', image: '/images/bag3.jpg' },
  ];

  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <h1>Our New Collection</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      <section className="new-collection">
        <h2>New Collection</h2>
        <div className="products">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      <section className="promo">
        <h2>Special Promo</h2>
        {/* Add promo items here */}
      </section>

      <Footer />
    </div>
  );
};

export default Home;