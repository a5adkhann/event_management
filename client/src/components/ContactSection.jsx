import React from 'react';

const ContactSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-100" id="contact">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <form className="space-y-6">
            <div>
              <label className="block mb-1 font-medium">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
          <p className="mb-4 text-gray-700">We’re here to help. Reach out anytime!</p>
          <div className="space-y-4 text-gray-600">
            <p><strong>📍 Address:</strong> 123 Event St, Karachi, Pakistan</p>
            <p><strong>📞 Phone:</strong> +92 312 3456789</p>
            <p><strong>✉️ Email:</strong> support@eventsphere.com</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
