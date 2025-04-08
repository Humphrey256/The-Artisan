import React from 'react';

const About = () => {
  const artists = [
    { id: 1, name: 'King Artisan', role: 'Founder & Lead Artist', bio: 'Contemporary mixed-media artist with a focus on sustainability.', image: '/images/olivia.jpg' },
    { id: 2, name: 'Marcus Chen', role: 'Sculpture Specialist', bio: 'Transforms reclaimed materials into bold statement pieces.', image: '/images/marcus.jpg' },
  ];

  return (
    <div className="about-page mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12 md:py-16 rounded-xl mb-12">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Story
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Celebrating art that connects people and cultures since 2000.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission flex flex-col lg:flex-row gap-10 items-center mb-16">
        <div className="mission-text lg:w-1/2">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">
            Why We Create
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We believe art should be accessible, thought-provoking, and sustainable.
            Every piece in our collection is crafted with ethically sourced materials
            and a commitment to fair-trade practices.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-semibold">2000+</p>
              <p className="text-sm text-gray-600">Artworks Created</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-semibold">50+</p>
              <p className="text-sm text-gray-600">Countries Reached</p>
            </div>
          </div>
        </div>
        <div className="mission-image lg:w-1/2">
          <img 
            src="/images/studio.jpg" 
            alt="Art studio" 
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </section>

      {/* Team Section */}
      <section className="team mb-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Meet the Artists
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our talented team of artists bringing creativity to life
          </p>
        </div>
        <div className="artist-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {artists.map((artist) => (
            <div 
              key={artist.id} 
              className="artist-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-64 md:h-72 overflow-hidden">
                <img 
                  src={artist.image} 
                  alt={artist.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-1">{artist.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{artist.role}</p>
                <p className="text-gray-600">{artist.bio}</p>
                <div className="mt-4 flex space-x-3">
                  <button className="text-blue-500 hover:text-blue-700">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </button>
                  <button className="text-blue-500 hover:text-blue-700">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="values mb-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Our Values
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>
        <div className="values-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="value-item bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-xl font-bold mb-3">Sustainability</h3>
            <p className="text-gray-600">
              90% recycled or upcycled materials in all our artworks, minimizing environmental impact.
            </p>
          </div>
          <div className="value-item bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold mb-3">Community</h3>
            <p className="text-gray-600">
              Partnering with local artisans globally to support traditional craftsmanship.
            </p>
          </div>
          <div className="value-item bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold mb-3">Innovation</h3>
            <p className="text-gray-600">
              Blending traditional techniques with cutting-edge digital art forms.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;