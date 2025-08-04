import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const blogDetailsData = {
  1: {
    title: "Understanding Your Birth Chart",
    author: "Aacharya Ji",
    date: "July 25, 2024",
    image: "astrology_blog_1.webp",
    content: `<p>This is the detailed content for blog post number 1.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>`,
  },
  2: {
    title: "Vastu Tips for a Prosperous Home",
    author: "Aacharya Ji",
    date: "July 26, 2024",
    image: "astrology_blog_2.webp",
    content: `<p>This is the detailed content for blog post number 2.</p>
    <p>Five easy vastu tips you can implement today to bring positive energy and wealth.</p>`,
  },
  3: {
    title: "The Power of Gemstones",
    author: "Aacharya Ji",
    date: "July 27, 2024",
    image: "astrology_blog_3.jpg",
    content: `<p>This is the detailed content for blog post number 3.</p>
    <p>Discover how wearing the right gemstone can amplify your planetary strengths and bring good fortune.</p>`,
  },
};

function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogDetailsData[id];

  if (!blog) return <div className="container mx-auto px-6 py-16">Not found.</div>;
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <button
          className="text-orange-500 hover:text-orange-600 font-semibold transition-colors duration-300 mb-8 flex items-center"
          onClick={() => navigate("/blog")}
        >
          <i className="fas fa-arrow-left mr-2"></i> Back to All Blogs
        </button>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">{blog.title}</h2>
        <p className="text-gray-500 text-sm mb-6">
          Published by {blog.author} on {blog.date}
        </p>
        <img
          src={blog.image}
          alt="Blog Post Image"
          className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
        />
        <div
          className="prose max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></div>
      </div>
    </section>
  );
}

export default BlogDetails;