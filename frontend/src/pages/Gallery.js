// src/pages/Gallery.js
import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Gallery = () => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await fetch('/api/artworks');
        const data = await response.json();
        setArtworks(data);
        console.log("Fetched artworks:", data); // Optional debug
      } catch (err) {
        console.error('Error fetching artworks:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchArtworks();
  }, []);

  const filteredArtworks = filter === 'all'
    ? artworks
    : artworks.filter(art => art.category === filter);

  return (
    <div className="gallery-page">

      <div className="gallery-header bg-gray-100 py-10">
        <h1 className="text-4xl font-bold text-center">Art Gallery</h1>

        <div className="flex justify-center mt-4 flex-wrap gap-2">
          {['all', 'painting', 'sculpture', 'photography'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded transition ${
                filter === cat ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="text-center text-gray-500 mt-10">Loading artworks...</div>
      ) : (
        <div className="artworks-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
          {filteredArtworks.map((artwork) => (
            <div key={artwork._id} className="artwork-card border rounded-lg shadow-md overflow-hidden">
              <img
                src={artwork.imageUrl}
                alt={artwork.title}
                className="w-full h-64 object-cover"
              />
              <div className="artwork-details p-4">
                <h3 className="text-xl font-semibold">{artwork.title}</h3>
                <p className="text-gray-600">{artwork.artist}</p>
                <p className="text-gray-800">${artwork.price.toFixed(2)}</p>
                <button
                  onClick={() => addToCart(artwork)}
                  className="mt-3 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default Gallery;
