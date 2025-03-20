import React from 'react';
import { ResponsiveLine } from '@nivo/line';

function Chart({ data }) {
  const chartData = [
    {
      id: 'close',
      data: data.map((d) => ({ x: new Date(d.timestamp), y: d.close })),
    },
  ];

  return (
    <div style={{ height: '400px' }}>
      <ResponsiveLine
        data={chartData}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'time', format: 'native' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false }}
        axisBottom={{
          format: '%H:%M',
          tickValues: 'every 5 minutes',
        }}
        curve="monotoneX"
        enablePoints={true}
        pointSize={8}
        colors={{ scheme: 'category10' }}
        theme={{
          axis: { fontSize: '14px', tickColor: '#eee', ticksLine: { stroke: '#555' } },
          grid: { line: { stroke: '#ddd' } },
        }}
      />
    </div>
  );
}

export default Chart;