import React from "react";

const services = [
  {
    icon: "fas fa-hand-holding-heart",
    title: "Love & Relationships",
    description:
      "Navigate the complexities of love with personalized astrological readings. Find your partner, resolve conflicts, and build lasting happiness. Our unique relationship synastry system analyzes the compatibility between two birth charts to provide a deeper understanding of your connection.",
  },
  {
    icon: "fas fa-briefcase",
    title: "Career & Business",
    description:
      "Unlock your professional potential. Get insights on career choices, business ventures, and financial growth based on your birth chart. Our career analysis system provides a detailed report on favorable periods and potential challenges in your professional life.",
  },
  {
    icon: "fas fa-graduation-cap",
    title: "Education & Studies",
    description:
      "Find the right academic path and overcome educational hurdles with astrological guidance. We use a planetary influence system to identify subjects and fields where a student's natural abilities will shine.",
  },
  {
    icon: "fas fa-home",
    title: "Vastu Shastra",
    description:
      "Create a harmonious environment in your home or office. Vastu corrections for prosperity, health, and peace. Below is a simple diagram illustrating Vastu principles for a home.",
    vastuDiagram: true,
  },
  {
    icon: "fas fa-child",
    title: "Child Astrology",
    description:
      "Understand your child's personality, potential, and challenges through their birth chart. Our child development system provides a comprehensive report on their strengths and weaknesses, guiding you to nurture their growth effectively.",
  },
  {
    icon: "fas fa-heartbeat",
    title: "Health & Wellness",
    description:
      "Receive astrological insights into your health and find remedies to boost your well-being. Our health prediction system maps planetary positions to potential health concerns, allowing for proactive care and remedies.",
  },
];

function Services() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Astrological Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="bg-white rounded-lg shadow-lg p-8 text-center transition duration-300 hover:shadow-xl"
            >
              <i className={`${service.icon} text-5xl text-orange-500 mb-4`} />
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              {service.vastuDiagram && (
                <div className="mt-6 flex justify-center">
                  {/* Vastu Diagram */}
                  <div className="w-64 h-64 bg-gray-100 border-2 border-gray-300 rounded-lg relative flex flex-col justify-between p-4">
                    <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1 p-2">
                      <div className="bg-red-200 border border-red-300 rounded-sm text-xs flex items-center justify-center p-1">North-East<br/>(Prayer)</div>
                      <div className="bg-gray-200 border border-gray-300 rounded-sm text-xs flex items-center justify-center p-1">North<br/>(Wealth)</div>
                      <div className="bg-blue-200 border border-blue-300 rounded-sm text-xs flex items-center justify-center p-1">North-West<br/>(Support)</div>
                      <div className="bg-gray-200 border border-gray-300 rounded-sm text-xs flex items-center justify-center p-1">East<br/>(Health)</div>
                      <div className="bg-yellow-200 border border-yellow-300 rounded-sm text-xs flex items-center justify-center p-1">Center<br/>(Brahmasthan)</div>
                      <div className="bg-green-200 border border-green-300 rounded-sm text-xs flex items-center justify-center p-1">West<br/>(Benefits)</div>
                      <div className="bg-yellow-200 border border-yellow-300 rounded-sm text-xs flex items-center justify-center p-1">South-East<br/>(Kitchen)</div>
                      <div className="bg-gray-200 border border-gray-300 rounded-sm text-xs flex items-center justify-center p-1">South<br/>(Fame)</div>
                      <div className="bg-red-200 border border-red-300 rounded-sm text-xs flex items-center justify-center p-1">South-West<br/>(Master)</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;