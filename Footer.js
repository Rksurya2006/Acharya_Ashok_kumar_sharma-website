import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Aacharya Ashok Kumar Sharma Ji</h3>
          <p className="text-gray-400">Guiding you to a better future with the power of Vedic astrology and ancient wisdom.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">Home</a></li>
            <li><a href="/services" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">Services</a></li>
            <li><a href="/about" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">About</a></li>
            <li><a href="/reviews" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">Clients & Reviews</a></li>
            <li><a href="/blog" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">Blog</a></li>
            <li><a href="/media" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">Media</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Info</h3>
          <ul className="space-y-2 text-gray-400">
            <li><i className="fas fa-map-marker-alt mr-2 text-orange-500"></i> Patna, Bihar, India</li>
            <li><i className="fas fa-phone-alt mr-2 text-orange-500"></i> +91 9162754175</li>
            <li><i className="fas fa-envelope mr-2 text-orange-500"></i> suryakantmanibhardwaj@gmail.com</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300"><i className="fab fa-facebook-f text-2xl"></i></a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300"><i className="fab fa-twitter text-2xl"></i></a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300"><i className="fab fa-instagram text-2xl"></i></a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300"><i className="fab fa-linkedin-in text-2xl"></i></a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 text-center text-gray-500 mt-8 pt-8 border-t border-gray-700">
        &copy; 2025 Aacharya Ashok Ji. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;