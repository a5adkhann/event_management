import React from 'react';

const CallToActionSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-indigo-700 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Host an Amazing Event?
        </h2>
        <p className="text-lg mb-8">
          Join EventSphere today and let’s bring your ideas to life!
        </p>
        <button className="bg-yellow-300 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default CallToActionSection;
