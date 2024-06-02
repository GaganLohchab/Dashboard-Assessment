// import React from 'react';
import Plot from 'react-plotly.js';
import { data } from '../data/eve';

const FreqAlerts = () => {
  const timestamps = data.map(d => new Date(d.timestamp));
  
  const trace = {
    x: timestamps,
    y: timestamps.map((_, index) => index + 1),
    type: 'scatter'
  };

  return (
    <div className="card bg-base-300 p-4 shadow-xl h-full">
      <Plot
        data={[trace]}
        layout={{ 
          title: 'Alert Frequency Over Time', 
          template: 'plotly_dark',
          paper_bgcolor: '#000',
          plot_bgcolor: '#001',
          font: {
            color: '#fff'
          },
          autosize: true
        }}
        useResizeHandler
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default FreqAlerts;
