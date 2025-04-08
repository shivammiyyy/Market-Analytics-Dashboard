import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CandleGraph } from '../components/CandleGraph';
import { BarGraph } from '../components/BarGraph';
import { LineGraph } from '../components/LineGraph';
import { Companies } from '../assets/asset';

export const DBoardD = () => {
  const { symbol } = useParams();
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeGraph, setActiveGraph] = useState("candle");
  const backend_port = import.meta.env.VITE_BACKEND_URL
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:${backend_port}/user/${symbol}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setStockData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [symbol]);

  if (loading) return <div className="text-center mt-10 text-lg">Loading stock data...</div>;
  if (error) return <div className="text-center mt-10 text-red-500 text-lg">Error: {error.message}</div>;

  const company = Companies[symbol];

  return (
    <div className="container mx-auto p-4">
      {/* Company Info Header */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 bg-white shadow rounded-lg p-4">
        <div className="flex items-center">
          <img
            src={company.img}
            alt={company.name}
            className="w-20 h-20 object-cover rounded-full mr-4"
          />
          <div>
            <h2 className="text-2xl font-bold">{company.name}</h2>
            <p className="text-gray-600">Founded: {company.founded}</p>
          </div>
        </div>
      </div>

      {/* Graph Buttons */}
      

      {/* Graph Display Card */}
      <div className="bg-white shadow rounded-lg p-6">
        {activeGraph === "candle" && <CandleGraph stockData={stockData} />}
        {activeGraph === "line" && <LineGraph stockData={stockData} />}
        {activeGraph === "bar" && <BarGraph stockData={stockData} />}
      </div>

      <div className="mb-4 flex justify-center space-x-4">
        <button
          onClick={() => setActiveGraph("candle")}
          className={`px-4 py-2 rounded font-medium transition-colors duration-200 
            ${activeGraph === "candle" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-blue-500"}`}
        >
          Candlestick
        </button>
        <button
          onClick={() => setActiveGraph("line")}
          className={`px-4 py-2 rounded font-medium transition-colors duration-200 
            ${activeGraph === "line" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-blue-500"}`}
        >
          Line Graph
        </button>
        <button
          onClick={() => setActiveGraph("bar")}
          className={`px-4 py-2 rounded font-medium transition-colors duration-200 
            ${activeGraph === "bar" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-blue-500"}`}
        >
          Bar Graph
        </button>
      </div>
    </div>
  );
};
