import React from "react";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    image: "astrology_blog_1.webp",
    title: "Understanding Your Birth Chart",
    excerpt: "A simple guide to the basics of your kundli and how it influences your life's journey.",
  },
  {
    id: 2,
    image: "astrology_blog_2.webp",
    title: "Vastu Tips for a Prosperous Home",
    excerpt: "Five easy vastu tips you can implement today to bring positive energy and wealth.",
  },
  {
    id: 3,
    image: "astrology_blog_3.jpg",
    title: "The Power of Gemstones",
    excerpt: "Discover how wearing the right gemstone can amplify your planetary strengths and bring good fortune.",
  },
];

function Blog() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Astrology Blog
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-gray-50 rounded-lg shadow-lg transition duration-500 hover:scale-105 overflow-hidden"
            >
              <img
                src={blog.image}
                alt="Blog post image"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{blog.excerpt}</p>
                <Link
                  to={`/blog/${blog.id}`}
                  className="text-orange-500 font-semibold hover:text-orange-600 transition-colors duration-300"
                >
                  Read More <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;