import Button from './Button';

const Hero = () => {
  return (
    <section
      className="relative h-[600px] bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-white">
          {/* Left Text Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              The Most Affordable Place To Stay In Kanombe Near Airport
            </h1>
            <p className="text-lg mb-8">
              Luxury apartments for rent or purchase with modern amenities and convenient location.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button>View Properties</Button>
              <Button primary={false}>Contact Us</Button>
            </div>
          </div>

          {/* Right Floating Map */}
          <div className="relative w-full md:w-[400px] lg:w-[480px] h-[280px] rounded-xl overflow-hidden shadow-2xl bg-white">
            <iframe
              title="Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63705.98130808773!2d30.10304455!3d-1.9684661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca7681c5d05e5%3A0x72a8ffb8f6c4a83f!2sKanombe%2C%20Kigali!5e0!3m2!1sen!2srw!4v1689343328310!5m2!1sen!2srw"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
