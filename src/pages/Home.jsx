import React from 'react';
import Hero from '../components/Hero';
import PropertyCard from '../components/PropertyCard';
import FeatureCard from '../components/FeatureCard';
import ContactForm from '../components/ContactForm';
import Button from '../components/Button';

const Home = () => {
  // Sample property data
  const properties = [
    {
      id: 1,
      title: 'Modern Apartment with Balcony',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      price: 400,
      location: 'Kanombe, Near Airport',
      bedrooms: 2,
      bathrooms: 1,
      area: 850,
      type: 'rent'
    },
    {
      id: 2,
      title: 'Luxury Two-Floor Apartment',
      image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      price: 100000,
      location: 'Kanombe, Near Airport',
      bedrooms: 3,
      bathrooms: 2,
      area: 1200,
      type: 'sale'
    },
    {
      id: 3,
      title: 'Cozy Studio Apartment',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      price: 400,
      location: 'Kanombe, Near Airport',
      bedrooms: 1,
      bathrooms: 1,
      area: 600,
      type: 'rent'
    },
    {
      id: 4,
      title: 'Family Apartment with Garden',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      price: 100000,
      location: 'Kanombe, Near Airport',
      bedrooms: 4,
      bathrooms: 2,
      area: 1500,
      type: 'sale'
    }
  ];

  // Sample features data
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"></path>
        </svg>
      ),
      title: 'Quality Construction',
      description: 'Built with high-quality materials and modern construction techniques for durability and comfort.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"></path>
        </svg>
      ),
      title: 'Prime Location',
      description: 'Conveniently located near Kigali International Airport with easy access to transportation and amenities.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 9.3V4h-3v2.6L12 3 2 12h3v8h5v-6h4v6h5v-8h3l-3-2.7zm-9 .7c0-1.1.9-2 2-2s2 .9 2 2h-4z"></path>
        </svg>
      ),
      title: 'Modern Amenities',
      description: 'Enjoy modern amenities including high-speed internet, security systems, and energy-efficient appliances.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"></path>
        </svg>
      ),
      title: 'Flexible Payment Options',
      description: 'Choose between renting a room for $400/month or purchasing an entire apartment for $100,000.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Property Listings Section */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Properties</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our selection of premium apartments available for rent or purchase in the desirable Kanombe area near Kigali International Airport.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {properties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button>View All Properties</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Apartments</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our apartments offer the perfect blend of comfort, convenience, and luxury for both short-term rentals and permanent residences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index} 
                icon={feature.icon} 
                title={feature.title} 
                description={feature.description} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Ready to Find Your New Home?</h2>
              <p className="mb-6">
                Contact us today to schedule a viewing or learn more about our available apartments in Kanombe.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button>View Properties</Button>
                <Button primary={false}>Contact Us</Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
