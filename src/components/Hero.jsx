import Button from './Button';

const Hero = () => {
  return (
    <section className="relative h-[600px] bg-cover bg-center flex items-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')" }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-xl text-white">
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
      </div>
    </section>
  );
};

export default Hero;
