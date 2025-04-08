import React from 'react';
import Chart from 'react-apexcharts';

export const CandleGraph = ({ stockData }) => {
  if (!stockData || !stockData.dates) return <div>No data available</div>;

  const candlestickSeries = stockData.dates.map((date, i) => ({
    x: new Date(date),
    y: [
      stockData.opens[i],
      stockData.highs[i],
      stockData.lows[i],
      stockData.closes[i]
    ]
  }));

  const options = {
    chart: {
      type: 'candlestick',
      height: 350,
      toolbar: {
        show: true
      }
    },
    title: {
      text: 'Stock Price Candlestick Chart',
      align: 'left'
    },
    xaxis: {
      type: 'datetime',
      labels: {
        format: 'yyyy-MM-dd'
      }
    },
    yaxis: {
      tooltip: {
        enabled: true
      },
      title: {
        text: 'Price'
      }
    },
    tooltip: {
      shared: true,
      intersect: false
    }
  };

  const series = [{ data: candlestickSeries }];

  return (
    <div>
      <Chart options={options} series={series} type="candlestick" height={350} />
    </div>
  );
};
