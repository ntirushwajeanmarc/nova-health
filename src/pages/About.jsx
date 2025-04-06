// src/pages/About.tsx
import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';

const About = () => {
  return (
    <>
      <Header />

      {/* About Hero Section */}
      <section
        className="relative h-[400px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-6 text-center z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-serif mb-4 text-primary">About Nova Health Ltd</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Learn about our company and our commitment to quality housing in Kanombe.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition duration-500">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Nova Health Building"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-serif mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2018, Nova Health Ltd has established itself as a premier real estate developer in Kigali, Rwanda. We specialize in building high‑quality residential apartments that combine modern design with practical functionality.
            </p>
            <p className="text-gray-700 mb-4">
              Our flagship development in Kanombe near the airport features two‑floor and ground‑floor apartments designed to meet the needs of both local residents and expatriates looking for comfortable housing options.
            </p>
            <p className="text-gray-700 mb-6">
              At Nova Health Ltd, we believe everyone deserves a comfortable and well‑designed living space. Our mission is to provide affordable luxury housing that enhances our residents’ quality of life.
            </p>
            <Button>Learn More</Button>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl font-serif mb-4">Our Core Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These principles guide everything we do at Nova Health Ltd.
          </p>
        </div>
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Quality',
              icon: (
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.59 3.58L10 14.17l-2.59-2.59L6 13l4 4 8-8z" />
                </svg>
              ),
              desc: 'We never compromise on materials or craftsmanship—every project meets our highest standards.',
            },
            {
              title: 'Integrity',
              icon: (
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 3h2v6h-2zm0 8h2v2h-2z" />
                </svg>
              ),
              desc: 'Honesty and transparency are at the heart of every interaction with our clients.',
            },
            {
              title: 'Customer Focus',
              icon: (
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              ),
              desc: 'Your satisfaction drives us—every decision is made with your needs in mind.',
            },
          ].map(({ title, icon, desc }) => (
            <div
              key={title}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500 text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                {icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl font-serif mb-4">Meet Our Leadership</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The professionals driving Nova Health Ltd forward.
          </p>
        </div>
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: 'John Doe',
              role: 'CEO',
              img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
              desc: 'With 15+ years in real estate, John leads Nova Health’s vision and growth.',
            },
            {
              name: 'Jane Smith',
              role: 'COO',
              img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80',
              desc: 'Jane ensures operational excellence and on-time delivery for every project.',
            },
            {
              name: 'Michael Johnson',
              role: 'Lead Architect',
              img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
              desc: 'Michael crafts innovative designs that balance form, function, and comfort.',
            },
          ].map(({ name, role, img, desc }) => (
            <div
              key={name}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-500"
            >
              <img src={img} alt={name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{name}</h3>
                <p className="text-primary mb-3">{role}</p>
                <p className="text-gray-700">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif mb-4">Ready to Find Your Dream Home?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Explore our apartments in Kanombe. Rent or buy — we have the perfect option for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button primary={false}>View Properties</Button>
            <Button primary={false}>Contact Us</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
