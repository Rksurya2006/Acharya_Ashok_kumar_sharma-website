import React from "react";

function SuccessModal({ show, title, message, onClose }) {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 overflow-y-auto h-full w-full z-50 flex justify-center items-center">
      <div className="relative mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <i className="fas fa-check text-green-600 text-2xl"></i>
          </div>
          <h3 className="text-lg leading-6 font-medium text-gray-900 mt-2">{title}</h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-sm text-gray-500">{message}</p>
          </div>
          <div className="items-center px-4 py-3">
            <button onClick={onClose} className="px-4 py-2 bg-orange-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300">
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessModal;