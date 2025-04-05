import React from 'react';
import ContactForm from '../components/ContactForm';
import Button from '../components/Button';

const Contact = () => {
  return (
    <div>
      {/* Contact Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center flex items-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg">Get in touch with our team for inquiries about our apartments in Kanombe.</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Address */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Our Location</h3>
              <p className="text-gray-600">
                Kanombe, Near Airport<br />
                Kigali, Rwanda
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Phone Number</h3>
              <p className="text-gray-600">
                +250 78 123 4567<br />
                +250 72 987 6543
              </p>
            </div>

            {/* Email */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Email Address</h3>
              <p className="text-gray-600">
                info@novahealth.com<br />
                sales@novahealth.com
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-12">
            {/* Contact Form */}
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Map and Business Hours */}
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-8">Find Us</h2>
              
              {/* Map Placeholder - In a real implementation, this would be a Google Maps embed */}
              <div className="bg-gray-200 h-[300px] rounded-lg mb-8 flex items-center justify-center">
                <p className="text-gray-600">Map of Kanombe, Near Airport Location</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="font-medium">Monday - Friday:</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Saturday:</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find quick answers to common questions about contacting and visiting us.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Do I need to make an appointment to view an apartment?</h3>
              <p className="text-gray-600">
                Yes, we recommend scheduling an appointment to ensure a staff member is available to show you the properties and answer your questions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How quickly do you respond to inquiries?</h3>
              <p className="text-gray-600">
                We aim to respond to all inquiries within 24 hours during business days. For urgent matters, we recommend calling our office directly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Is there parking available for visitors?</h3>
              <p className="text-gray-600">
                Yes, we have designated visitor parking spaces at our office location. Our staff will provide directions when you schedule your visit.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Can I request a virtual tour of the apartments?</h3>
              <p className="text-gray-600">
                Absolutely! We offer virtual tours for clients who cannot visit in person. Please contact us to arrange a convenient time for a video call.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your New Home?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a viewing or learn more about our available apartments in Kanombe.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button primary={false}>Schedule a Viewing</Button>
            <Button primary={false}>Call Us Now</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
