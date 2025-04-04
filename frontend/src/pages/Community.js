// src/pages/Community.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Added import
import Footer from '../components/Footer'; // Added import

const Community = () => {
  const [activeTab, setActiveTab] = useState('featured');

  // Sample data
  const featuredArtists = [
    { id: 1, name: 'Priya Patel', art: '/images/art1.jpg', likes: 142, bio: 'Watercolorist exploring cultural identity' },
    { id: 2, name: 'Jamal Carter', art: '/images/art2.jpg', likes: 98, bio: 'Street artist blending graffiti with calligraphy' }
  ];

  const userGalleries = [
    { id: 1, user: 'ArtLover22', art: '/images/user-art1.jpg', caption: 'My take on surrealism' },
    { id: 2, user: 'CanvasQueen', art: '/images/user-art2.jpg', caption: 'Inspired by our latest collection!' }
  ];

  const events = [
    { id: 1, title: 'Virtual Art Jam', date: 'Oct 15, 2023', desc: 'Live collaborative painting session' },
    { id: 2, title: 'Sustainability Workshop', date: 'Nov 2, 2023', desc: 'Eco-friendly art materials demo' }
  ];

  return (
    <div className="community-page">
      <Navbar />

      <section className="bg-gray-100 py-10">
        <h1 className="text-4xl font-bold text-center">Join Our Creative Family</h1>
        <p className="text-center text-gray-700 mt-4">
          Connect with artists worldwide and share your journey.
        </p>
      </section>

      <div className="tabs">
        <button
          onClick={() => setActiveTab('featured')}
          className={activeTab === 'featured' ? 'active' : ''}
        >
          Featured Artists
        </button>
        <button
          onClick={() => setActiveTab('galleries')}
          className={activeTab === 'galleries' ? 'active' : ''}
        >
          User Galleries
        </button>
        <button
          onClick={() => setActiveTab('events')}
          className={activeTab === 'events' ? 'active' : ''}
        >
          Events
        </button>
      </div>

      {activeTab === 'featured' && (
        <section className="featured-artists">
          <h2>Artist Spotlights</h2>
          <div className="artist-grid">
            {featuredArtists.map((artist) => (
              <div key={artist.id} className="artist-card">
                <img src={artist.art} alt={artist.name} />
                <div className="artist-info">
                  <h3>{artist.name}</h3>
                  <p className="bio">{artist.bio}</p>
                  <div className="likes">❤️ {artist.likes} likes</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeTab === 'galleries' && (
        <section className="user-galleries">
          <h2>Community Creations</h2>
          <div className="gallery-grid">
            {userGalleries.map((item) => (
              <div key={item.id} className="gallery-item">
                <img src={item.art} alt={item.caption} />
                <p className="caption">"{item.caption}"</p>
                <p className="user">— @{item.user}</p>
              </div>
            ))}
          </div>
          <button className="upload-cta">Share Your Art →</button>
        </section>
      )}

      {activeTab === 'events' && (
        <section className="events">
          <h2>Upcoming Events</h2>
          <div className="event-list">
            {events.map((event) => (
              <div key={event.id} className="event-card">
                <h3>{event.title}</h3>
                <p className="date">{event.date}</p>
                <p className="desc">{event.desc}</p>
                <button className="rsvp">RSVP</button>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="discussion">
        <h2>Join the Conversation</h2>
        <div className="forum-preview">
          <div className="forum-topic">
            <h3>Tips for Beginner Painters?</h3>
            <p>24 comments</p>
          </div>
          <div className="forum-topic">
            <h3>Exhibit Review: Modern Abstracts NYC</h3>
            <p>16 comments</p>
          </div>
        </div>
        <button className="view-all">View All Discussions</button>
      </section>

      <Footer />
    </div>
  );
};

export default Community;