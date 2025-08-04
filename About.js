import React from "react";

function About() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Aacharya Ashok Kumar Sharma Ji
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="md:w-1/3">
            <img
              src="astrologer_profile.jpg"
              alt="Aacharya Ashok Ji"
              className="rounded-full shadow-lg w-48 h-48 md:w-full md:h-auto mx-auto md:mx-0"
            />
          </div>
          <div className="md:w-2/3 mt-8 md:mt-0 text-center md:text-left">
            <p className="text-gray-600 text-lg leading-relaxed">
              Aacharya Ashok Ji, a name synonymous with authentic and effective astrology, has been practicing for over two decades. Born into a family of respected astrologers, he inherited a deep understanding of Vedic scriptures and celestial sciences. His journey began under the tutelage of his grandfather, where he mastered the nuances of predictive astrology, Vastu Shastra, and numerology.
            </p>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              He is not just an astrologer; he is a compassionate guide and mentor. His unique approach combines traditional astrological principles with a modern, psychological perspective, providing practical solutions that are easy to implement. Aacharya Ashok Ji believes in empowering his clients to take control of their lives, not just predict their future.
            </p>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Over the years, he has consulted with thousands of individuals, celebrities, and business leaders, helping them navigate crucial life decisions with confidence. His dedication to his clients and his profound knowledge make him one of the most sought-after astrologers in India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;