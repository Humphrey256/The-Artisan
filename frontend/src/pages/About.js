// src/pages/About.js
import React from 'react';
import Navbar from '../components/Navbar'; // Added import
import Footer from '../components/Footer'; // Added import

const About = () => {
  const artists = [
    { id: 1, name: 'King Artisan', role: 'Founder & Lead Artist', bio: 'Contemporary mixed-media artist with a focus on sustainability.', image: '/images/olivia.jpg' },
    { id: 2, name: 'Marcus Chen', role: 'Sculpture Specialist', bio: 'Transforms reclaimed materials into bold statement pieces.', image: '/images/marcus.jpg' },
  ];

  return (
    <div className="about-page">

      <section className="bg-gray-100 py-10">
        <h1 className="text-4xl font-bold text-center">Our Story</h1>
        <p className="text-center text-gray-700 mt-4">
          Celebrating art that connects people and cultures since 2015.
        </p>
      </section>

      <section className="mission">
        <div className="mission-text">
          <h2 className="text-3xl font-semibold">Why We Create</h2>
          <p className="text-gray-700 mt-4">
            We believe art should be accessible, thought-provoking, and sustainable.
            Every piece in our collection is crafted with ethically sourced materials
            and a commitment to fair-trade practices.
          </p>
        </div>
        <div className="mission-image">
          <img src="/images/studio.jpg" alt="Art studio" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </section>

      <section className="team">
        <h2 className="text-3xl font-semibold text-center">Meet the Artists</h2>
        <div className="artist-grid grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {artists.map((artist) => (
            <div key={artist.id} className="artist-card bg-white p-6 rounded-lg shadow-md">
              <img src={artist.image} alt={artist.name} className="w-full h-auto rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">{artist.name}</h3>
              <p className="role text-gray-600">{artist.role}</p>
              <p className="bio text-gray-700 mt-2">{artist.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="values">
        <h2 className="text-3xl font-semibold text-center">Our Values</h2>
        <div className="values-list grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="value-item bg-white p-6 rounded-lg shadow-md">
            <span className="text-2xl">🌱</span>
            <h3 className="text-xl font-semibold mt-2">Sustainability</h3>
            <p className="text-gray-700 mt-2">90% recycled or upcycled materials</p>
          </div>
          <div className="value-item bg-white p-6 rounded-lg shadow-md">
            <span className="text-2xl">🤝</span>
            <h3 className="text-xl font-semibold mt-2">Community</h3>
            <p className="text-gray-700 mt-2">Partnering with local artisans globally</p>
          </div>
          <div className="value-item bg-white p-6 rounded-lg shadow-md">
            <span className="text-2xl">🎨</span>
            <h3 className="text-xl font-semibold mt-2">Innovation</h3>
            <p className="text-gray-700 mt-2">Blending traditional and digital techniques</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;