import React from 'react';

const FeaturedEventsSection = () => {
  const events = [
    {
      name: "TechCon 2025",
      date: "Aug 15, 2025",
      image: "https://source.unsplash.com/600x400/?tech,event",
    },
    {
      name: "Wedding Gala",
      date: "Sep 2, 2025",
      image: "https://source.unsplash.com/600x400/?wedding,event",
    },
    {
      name: "Startup Meetup",
      date: "Oct 12, 2025",
      image: "https://source.unsplash.com/600x400/?startup,event",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Featured Events</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <div key={idx} className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
              <img src={event.image} alt={event.name} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{event.name}</h3>
                <p className="text-gray-600">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEventsSection;
