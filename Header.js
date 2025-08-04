import React from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/reviews", label: "Clients & Reviews" },
  { to: "/blog", label: "Blog" },
  { to: "/media", label: "Media" },
];

function Header({ openReviewModal }) {
  const location = useLocation();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gray-900">
          Aacharya Ashok Kumar Sharma Ji
        </Link>
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-gray-600 hover:text-orange-500 transition-colors duration-300${
                location.pathname === link.to ? " font-bold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/book-appointment"
            className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300"
          >
            Book an Appointment
          </Link>
        </div>
        {/* Mobile menu omitted for brevity */}
      </nav>
    </header>
  );
}

export default Header;