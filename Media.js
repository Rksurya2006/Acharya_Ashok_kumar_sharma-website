import React from "react";
const mediaClients = [
  {
    name: "Upendra Kushwaha",
    desc: '""Acharya ji Blessing Upendra Kushwaha(Ex. Minister India)""',
    img: "client1.jpg",
  },
  {
    name: "Khesari Lal Yadav",
    desc: '"Acharya ji Blessing Khesari Lal Yadav(Bhojpuri Filmstar,Singer)"',
    img: "client2.jpg",
  },
  {
    name: "Manoj Tiwari",
    desc: '"Acharya ji Blessing Manoj Tiwari(Bhojpuri Filmstar,Politician,Singer)"',
    img: "client3.jpg",
  },
  {
    name: "Tejashwi Yadav",
    desc: '"Acharya ji Blessings Tejashwi Yadav(Ex. Dy. CM Bihar)"',
    img: "client4.jpg",
  },
  // Add more clients as needed
];

function Media() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Famous Clients Blessings by Aacharya Ji
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {mediaClients.map((client, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-500 hover:scale-105"
            >
              <img
                src={client.img}
                alt={client.name}
                className="w-full aspect-square object-cover"
              />
              <div className="p-4 text-center">
                <p className="text-gray-700 font-semibold">{client.name}</p>
                <p className="text-sm text-gray-500 mt-1">{client.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Media;