import React from 'react';
import Chart from 'react-apexcharts'; // Correct import for the React wrapper

export const BarGraph = ({ stockData }) => {
  // Ensure the necessary data exists before proceeding
  if (!stockData || !stockData.dates) {
    return <div>No data available</div>;
  }

  // Create categories and get the closing prices
  const categories = stockData.dates.map(date => new Date(date).toLocaleDateString());
  const closePrices = stockData.closes;

  // Define the chart options
  const options = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: true,
      },
    },
    title: {
      text: 'Daily Closing Prices',
      align: 'center',
    },
    xaxis: {
      categories: categories,
      title: {
        text: 'Date',
      },
    },
    yaxis: {
      title: {
        text: 'Closing Price',
      },
    },
    tooltip: {
      enabled: true,
    },
  };

  // Series data
  const series = [
    {
      name: 'Close Price',
      data: closePrices,
    },
  ];

  return (
    <div>
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};
