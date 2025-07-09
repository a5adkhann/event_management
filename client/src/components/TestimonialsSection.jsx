import React from 'react';

const TestimonialsSection = () => {
  const reviews = [
    {
      name: "Sarah Ahmed",
      comment: "EventSphere made our corporate meetup seamless and fun!",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Ali Khan",
      comment: "Thanks to EventSphere, our wedding was stress-free and memorable.",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((r, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md text-left flex gap-4 items-center">
              <img src={r.image} alt={r.name} className="w-16 h-16 rounded-full object-cover" />
              <div>
                <p className="text-gray-700 italic">"{r.comment}"</p>
                <p className="mt-2 font-semibold text-blue-900">{r.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
