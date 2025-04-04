// src/pages/Gallery.js
import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Ensure correct import

const Gallery = () => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const { addToCart } = useContext(CartContext);

  // Fetch artworks from backend
  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch('/api/artworks');
        const data = await response.json();
        setArtworks(data);
      } catch (err) {
        console.error('Error fetching artworks:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchArtworks();
  }, []);

  // Filter artworks by category
  const filteredArtworks = filter === 'all'
    ? artworks
    : artworks.filter(art => art.category === filter);

  return (
    <div className="gallery-page">

      <div className="gallery-header bg-gray-100 py-10">
        <h1 className="text-4xl font-bold text-center">Art Gallery</h1>
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('painting')}
            className={`px-4 py-2 ${filter === 'painting' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Paintings
          </button>
          <button
            onClick={() => setFilter('sculpture')}
            className={`px-4 py-2 ${filter === 'sculpture' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Sculptures
          </button>
          <button
            onClick={() => setFilter('photography')}
            className={`px-4 py-2 ${filter === 'photography' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Photography
          </button>
        </div>
      </div>

      {loading ? (
        <div className="loading">Loading artworks...</div>
      ) : (
        <div className="artworks-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredArtworks.map((artwork) => (
            <div key={artwork._id} className="artwork-card border rounded-lg shadow-lg overflow-hidden">
              <img
                src={artwork.imageUrl}
                alt={artwork.title}
                className="artwork-image w-full h-64 object-cover"
              />
              <div className="artwork-details p-4">
                <h3 className="text-xl font-semibold">{artwork.title}</h3>
                <p className="artist text-gray-600">{artwork.artist}</p>
                <p className="price text-gray-800">${artwork.price.toFixed(2)}</p>
                <button
                  onClick={() => addToCart(artwork)}
                  className="add-to-cart mt-2 px-4 py-2 bg-green-500 text-white rounded"
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