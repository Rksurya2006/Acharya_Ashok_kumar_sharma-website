import React, { useState } from "react";

function ReviewModal({ show, onClose, onSubmit }) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && text && rating) {
      onSubmit({ name, text, rating });
      setName("");
      setText("");
      setRating(0);
      onClose();
    }
  };

  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 overflow-y-auto h-full w-full z-50 flex justify-center items-center">
      <div className="relative mx-auto p-5 border w-full max-w-md shadow-lg rounded-md bg-white">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Submit Your Review</h3>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Your Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Your Review</label>
            <textarea value={text} onChange={(e) => setText(e.target.value)} rows={4} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Rating</label>
            <div className="flex justify-center space-x-1 text-2xl text-gray-300">
              {[1,2,3,4,5].map((star) => (
                <i
                  key={star}
                  className={`${rating >= star ? "fas text-yellow-400" : "far"} fa-star cursor-pointer hover:text-yellow-400 transition-colors duration-200`}
                  onClick={() => setRating(star)}
                ></i>
              ))}
            </div>
          </div>
          <div className="flex justify-end space-x-4">
            <button type="button" onClick={onClose} className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition-colors duration-300">
              Cancel
            </button>
            <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300">
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReviewModal;