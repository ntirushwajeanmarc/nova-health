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
          // Replace the existing iframe with this corrected version
<iframe
  title="Kanombe Location"
  className="w-full h-[300px] rounded-lg border-0 shadow-lg"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5089967050483!2d30.174369715211367!3d-1.9822465983639818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19db595f2e80a6c3%3A0x7091830a6abe9317!2sNOVA%20VILLAGE!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus"
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
