import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Media from "./pages/Media";
import BookAppointment from "./pages/BookAppointment";
import SuccessModal from "./components/SuccessModal";
import ReviewModal from "./components/ReviewModal";

function App() {
  const [successModal, setSuccessModal] = useState({ show: false, title: "", message: "" });
  const [reviewModal, setReviewModal] = useState(false);
  const [reviews, setReviews] = useState([
    { name: "Rahul Sharma", text: "Aacharya Ji's guidance on my career path was spot on...", rating: 4.5 },
    { name: "Priya Singh", text: "I was struggling with family issues...", rating: 5 },
    { name: "Anjali Mehta", text: "Aacharya Ji's compassionate approach...", rating: 5 },
    { name: "Vishal Gupta", text: "I'm a skeptic no more...", rating: 4.5 },
  ]);

  // Add review handler
  const addReview = (review) => {
    setReviews([review, ...reviews]);
    setSuccessModal({
      show: true,
      title: "Review Submitted!",
      message: "Thank you for your valuable feedback. Your review has been submitted successfully.",
    });
  };

  // Booking success handler
  const handleBookingSuccess = () => {
    setSuccessModal({
      show: true,
      title: "Appointment Booked!",
      message: "Thank you for booking an appointment with Aacharya Ashok Ji. We have received your request and will contact you shortly to confirm details and payment.",
    });
  };

  return (
    <Router>
      <div className="bg-gray-50 text-gray-800 min-h-screen font-inter custom-scrollbar">
        <Header openReviewModal={() => setReviewModal(true)} />
        {/* Main content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/reviews"
            element={
              <Reviews
                reviews={reviews}
                openReviewModal={() => setReviewModal(true)}
              />
            }
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/media" element={<Media />} />
          <Route
            path="/book-appointment"
            element={<BookAppointment onSuccess={handleBookingSuccess} />}
          />
        </Routes>
        <Footer />
        <SuccessModal
          show={successModal.show}
          title={successModal.title}
          message={successModal.message}
          onClose={() => setSuccessModal({ show: false, title: "", message: "" })}
        />
        <ReviewModal
          show={reviewModal}
          onClose={() => setReviewModal(false)}
          onSubmit={addReview}
        />
      </div>
    </Router>
  );
}

export default App;