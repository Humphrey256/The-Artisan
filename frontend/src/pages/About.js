// src/pages/About.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/About.css'; // Your CSS file

const About = () => {
  const artists = [
    { id: 1, name: 'Olivia Wilson', role: 'Founder & Lead Artist', bio: 'Contemporary mixed-media artist with a focus on sustainability.', image: '/images/olivia.jpg' },
    { id: 2, name: 'Marcus Chen', role: 'Sculpture Specialist', bio: 'Transforms reclaimed materials into bold statement pieces.', image: '/images/marcus.jpg' },
  ];

  return (
    <div className="about-page">
      <Navbar />
      
      <section className="about-hero">
        <h1>Our Story</h1>
        <p>Celebrating art that connects people and cultures since 2015.</p>
      </section>

      <section className="mission">
        <div className="mission-text">
          <h2>Why We Create</h2>
          <p>
            We believe art should be accessible, thought-provoking, and sustainable. 
            Every piece in our collection is crafted with ethically sourced materials 
            and a commitment to fair-trade practices.
          </p>
        </div>
        <div className="mission-image">
          <img src="/images/studio.jpg" alt="Art studio" />
        </div>
      </section>

      <section className="team">
        <h2>Meet the Artists</h2>
        <div className="artist-grid">
          {artists.map((artist) => (
            <div key={artist.id} className="artist-card">
              <img src={artist.image} alt={artist.name} />
              <h3>{artist.name}</h3>
              <p className="role">{artist.role}</p>
              <p className="bio">{artist.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="values">
        <h2>Our Values</h2>
        <div className="values-list">
          <div className="value-item">
            <span>🌱</span>
            <h3>Sustainability</h3>
            <p>90% recycled or upcycled materials</p>
          </div>
          <div className="value-item">
            <span>🤝</span>
            <h3>Community</h3>
            <p>Partnering with local artisans globally</p>
          </div>
          <div className="value-item">
            <span>🎨</span>
            <h3>Innovation</h3>
            <p>Blending traditional and digital techniques</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;