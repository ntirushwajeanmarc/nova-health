import React from 'react';
import ContactForm from '../components/ContactForm';
import Button from '../components/Button';

const Contact = () => {
  return (
    <div>
      {/* Contact Hero Section */}
      <section
        className="relative h-[400px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-6 text-center z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-serif mb-6  text-primary">Contact Us</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Reach out to our team for more details on our premium apartments in
            Kanombe. We’re here to help.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Location */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center border border-gray-200">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Location</h3>
              <p className="text-gray-600">
                Kanombe, Near Airport<br />
                Kigali, Rwanda
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center border border-gray-200">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Phone Number</h3>
              <p className="text-gray-600">
                +250 78 123 4567<br />
                +250 72 987 6543
              </p>
            </div>

            {/* Email */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center border border-gray-200">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Email Address</h3>
              <p className="text-gray-600">
                info@novahealth.com<br />
                sales@novahealth.com
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-12">
            {/* Contact Form */}
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-8 text-center">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Map & Business Hours */}
            <div className="md:w-1/2 space-y-8">
              <div>
                <h2 className="text-3xl font-semibold mb-6">Find Us</h2>
                <iframe
                  title="Kanombe Location"
                  className="w-full h-[300px] rounded-lg border-0 shadow-lg"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.1234567890123!2d30.123456!3d-1.234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d8f0f0f0f0f0f0%3A0xabcdef1234567890!2sKanombe%20Airport%2C%20Kigali!5e0!3m2!1sen!2srw!4v0000000000000"
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between">
                    <span className="font-medium">Mon – Fri:</span>
                    <span>8:00 AM – 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Saturday:</span>
                    <span>9:00 AM – 4:00 PM</span>
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

      {/* FAQ */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Quick answers to common questions. Don’t hesitate to reach out if you need more assistance.
          </p>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'Do I need to make an appointment to view an apartment?',
                a: 'We recommend scheduling an appointment to ensure availability.',
              },
              {
                q: 'How quickly do you respond to inquiries?',
                a: 'We respond within 24 hours during business hours.',
              },
              {
                q: 'Is there parking available for visitors?',
                a: 'Yes, we have visitor parking available.',
              },
              {
                q: 'Can I request a virtual tour of the apartments?',
                a: 'Yes, we offer virtual tours via video calls. Contact us to arrange a tour.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">{q}</h3>
                <p className="text-gray-600">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">Ready to Find Your New Home?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get in touch with us today to schedule a viewing or learn more about our apartments.
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
