import React from 'react';
import { FaCalendarAlt, FaUsers, FaBullhorn } from 'react-icons/fa';

const ServicesSection = () => {
  const services = [
    {
      icon: <FaCalendarAlt className="text-3xl text-blue-900" />,
      title: "Event Planning",
      desc: "Organize conferences, parties, and corporate events efficiently.",
    },
    {
      icon: <FaUsers className="text-3xl text-blue-900" />,
      title: "Guest Management",
      desc: "Track RSVPs, send invites, and manage attendees easily.",
    },
    {
      icon: <FaBullhorn className="text-3xl text-blue-900" />,
      title: "Promotions",
      desc: "Boost visibility through social and email marketing tools.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((s, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <div className="mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
