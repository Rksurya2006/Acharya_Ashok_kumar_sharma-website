import React, { useState } from "react";

const servicesData = [
  { name: "Love & Relationships", price: 2500 },
  { name: "Career & Business", price: 3000 },
  { name: "Education & Studies", price: 2000 },
  { name: "Vastu Shastra", price: 5000 },
  { name: "Palmistry Analysis", price: 3500 },
  { name: "Numerology", price: 2800 },
  { name: "Health & Wellness", price: 2200 },
  { name: "Other", price: 2500 },
];

function BookAppointment({ onSuccess }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: servicesData[0].name,
    date: "",
    time: "09:00",
    message: "",
  });

  const [price, setPrice] = useState(servicesData[0].price);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (name === "service") {
      const found = servicesData.find((s) => s.name === value);
      setPrice(found ? found.price : 0);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Simulate API call
    setTimeout(onSuccess, 1200);
    setForm({
      name: "",
      email: "",
      phone: "",
      service: servicesData[0].name,
      date: "",
      time: "09:00",
      message: "",
    });
    setPrice(servicesData[0].price);
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Book Your Appointment
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Fill out the form below to schedule a personal consultation with Aacharya Ashok Ji. We will get back to you within 24 hours to confirm your appointment and payment.
        </p>
        <div className="bg-gray-100 rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input name="name" value={form.name} onChange={handleChange} type="text" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input name="email" value={form.email} onChange={handleChange} type="email" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input name="phone" value={form.phone} onChange={handleChange} type="tel" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Service of Interest</label>
              <select name="service" value={form.service} onChange={handleChange} className="mt-1 block w-full pl-3 pr-10 py-2 border-gray-300 rounded-md">
                {servicesData.map((s) => (
                  <option key={s.name} value={s.name}>{s.name} - ₹{s.price}</option>
                ))}
              </select>
            </div>
            <div className="bg-gray-200 rounded-md p-4 flex items-center justify-between">
              <span className="font-semibold text-lg text-gray-800">Total Price:</span>
              <span className="font-bold text-xl text-orange-500">₹{price}</span>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Select Date</label>
              <input name="date" value={form.date} onChange={handleChange} type="date" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Select Time Slot</label>
              <select name="time" value={form.time} onChange={handleChange} className="mt-1 block w-full pl-3 pr-10 py-2 border-gray-300 rounded-md" required>
                {[...Array(24).keys()].map((h) => (
                  <option key={h} value={h.toString().padStart(2, "0")+":00"}>
                    {h.toString().padStart(2, "0")+":00"}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Your Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" required />
            </div>
            <div className="flex flex-col space-y-4">
              <button type="submit" className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300 transform hover:scale-105">
                Book Now
              </button>
              <button type="reset" className="bg-gray-200 text-gray-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition-colors duration-300 transform hover:scale-105">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default BookAppointment;