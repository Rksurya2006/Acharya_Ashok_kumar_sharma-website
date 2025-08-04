import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function Reviews({ reviews, openReviewModal }) {
  const chartRef = useRef(null);
  useEffect(() => {
    if (!chartRef.current) return;
    const chartInstance = new Chart(chartRef.current, {
      type: "polarArea",
      data: {
        labels: ["5 Stars", "4 Stars", "3 Stars", "2 Stars", "1 Star"],
        datasets: [
          {
            data: [90, 8, 1, 0.5, 0.5],
            backgroundColor: [
              "#FBBF24",
              "#FCD34D",
              "#FDE68A",
              "#FEE2E2",
              "#FEF3C7",
            ],
          },
        ],
      },
      options: {
        plugins: {
          legend: { position: "bottom" },
          title: { display: false },
        },
      },
    });
    return () => chartInstance.destroy();
  }, []);

  // Generate star rating icons
  function generateStars(rating) {
    let stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    for (let i = 0; i < fullStars; i++) stars.push(<i key={i} className="fas fa-star text-yellow-400"></i>);
    if (hasHalfStar) stars.push(<i key="half" className="fas fa-star-half-alt text-yellow-400"></i>);
    for (let i = fullStars + (hasHalfStar ? 1 : 0); i < 5; i++) stars.push(<i key={`empty${i}`} className="far fa-star text-yellow-400"></i>);
    return stars;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Clients & Reviews
        </h2>
        <div className="flex justify-center mb-10">
          <button
            className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors duration-300 transform hover:scale-105"
            onClick={openReviewModal}
          >
            Submit a Review
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Client Satisfaction Overview
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <canvas ref={chartRef} height={200} />
            </div>
            <div className="flex flex-col justify-center space-y-2">
              {[90, 8, 1, 0.5, 0.5].map((pct, idx) => (
                <div className="flex items-center" key={idx}>
                  <span className="text-lg font-semibold w-12 text-center">
                    {5 - idx} <i className="fas fa-star text-yellow-400"></i>
                  </span>
                  <div className="w-full bg-gray-200 rounded-full h-4 mx-4">
                    <div
                      className="bg-orange-500 h-4 rounded-full"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="w-12 text-right">{pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between transition duration-300 hover:shadow-xl"
            >
              <div>
                <div className="flex items-center mb-4">
                  {generateStars(review.rating)}
                </div>
                <p className="text-gray-700 italic">"{review.text}"</p>
              </div>
              <div className="mt-4 text-right text-gray-500 font-semibold">
                - {review.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;