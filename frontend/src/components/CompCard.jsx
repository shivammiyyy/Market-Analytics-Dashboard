import React from 'react';
import { Companies } from '../assets/asset';
import { useNavigate } from 'react-router-dom';

export const CompCard = ({ industry }) => {
  const navigate = useNavigate();
  
  const companiesArray = Object.entries(Companies);

  const handleCardClick = (symbol, company) => {
    navigate(`/dashboard/${company.industry}/${symbol}`);
  };

  // Destructure the tuple for proper filtering
  const filteredCompanies = industry
    ? companiesArray.filter(([_, company]) => company.industry === industry)
    : companiesArray;

  return (
    <div className="grid grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-6">
  {filteredCompanies.length > 0 ? (
    filteredCompanies.map(([symbol, company]) => (
      <div
        key={symbol}
        onClick={() => handleCardClick(symbol, company)}
        className="cursor-pointer bg-white shadow-md rounded-2xl p-4 hover:shadow-xl transition duration-300 max-w-xs w-70 h-50 mx-auto"
      >
        <img
          src={company.img}
          alt={company.name}
          className="h-24 mx-auto mb-4 object-contain"
        />
        <h2 className="text-xl font-semibold text-center">{company.name}</h2>
        <p className="text-center text-gray-500">Since: {company.founded}</p>
      </div>
    ))
  ) : (
    companiesArray.map(([symbol, company]) => (
      <div
        key={symbol}
        onClick={() => handleCardClick(symbol, company)}
        className="cursor-pointer bg-white shadow-md rounded-2xl p-4 hover:shadow-xl transition duration-300 max-w-xs w-full mx-auto"
      >
        <img
          src={company.img}
          alt={company.name}
          className="h-24 mx-auto mb-4 object-contain"
        />
        <h2 className="text-xl font-semibold text-center">{company.name}</h2>
        <p className="text-center text-gray-500">Since: {company.founded}</p>
      </div>
    ))
  )}
</div>

  );
};
