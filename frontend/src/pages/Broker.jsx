import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { brokerData } from '../assets/asset';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

export const Broker = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const investors = brokerData[id];

  // Handle invalid IDs
  if (!investors) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h2 className="text-2xl font-bold text-red-600">No Data Found</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Navbar */}
      

      {/* Container */}
      <div className="max-w-4xl mx-auto p-6">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-600 hover:text-blue-800 transition"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back
        </button>

        {/* Investor Info */}
        <div className="bg-white rounded-xl shadow-lg p-6 mt-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{investors.name}</h2>

          <div className="flex flex-col md:flex-row items-center md:items-start">
            {/* Image */}
            <div className="w-full md:w-1/3">
              <img src={investors.img} alt={investors.name} className="rounded-xl shadow-md border" />
              <p className="text-sm text-gray-600 mt-2 text-center">Born: {investors.birth}</p>
            </div>

            {/* Investor Details */}
            <div className="md:ml-6 w-full md:w-2/3 space-y-4">
              <h3 className="text-xl font-semibold text-gray-700">Early Life</h3>
              <p className="text-gray-600 leading-relaxed">{investors.earlyLife}</p>

              <h3 className="text-xl font-semibold text-gray-700">Investment Strategies</h3>
              <p className="text-gray-600 leading-relaxed">{investors.investmentStrategies}</p>

              <h3 className="text-xl font-semibold text-gray-700">Net Worth</h3>
              <p className="text-gray-800 font-bold">{investors.netWorth}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};
