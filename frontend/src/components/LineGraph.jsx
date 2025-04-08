import React from 'react';
import Chart from 'react-apexcharts';

export const LineGraph = ({ stockData }) => {
  // Ensure the necessary stockData exists.
  if (!stockData || !stockData['dates']) {
    return <div>No data available</div>;
  }

  // Prepare categories (dates) and series data (closing prices).
  const categories = stockData['dates'].map(date =>
    new Date(date).toLocaleDateString()
  );
  const closePrices = stockData['closes'];

  // Chart configuration options for a smooth line chart.
  const options = {
    chart: {
      type: 'line',
      height: 350,
      toolbar: {
        show: true,
      },
    },
    title: {
      text: 'Daily Closing Prices Line Chart',
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
    stroke: {
      curve: 'smooth', // Creates a smooth line
    },
  };

  // Series data for the line chart.
  const series = [
    {
      name: 'Close Price',
      data: closePrices,
    },
  ];

  return (
    <div>
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
};
