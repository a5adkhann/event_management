import React from 'react';
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-indigo-700 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Make Every Event <span className="text-yellow-300">Unforgettable</span>
          </h1>
          <p className="text-lg text-gray-100 mb-8">
            From small meetups to grand conferences, EventSphere helps you plan, manage, and succeed with style.
          </p>
          <div className="flex gap-4">
            <button className="bg-yellow-300 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition">
              <Link to="/events">Explore Events</Link>
            </button>
            <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-700 transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Image (optional) */}
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80" 
            alt="Event illustration" 
            className="rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
