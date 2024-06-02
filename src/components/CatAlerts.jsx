// import React from 'react';
import Plot from 'react-plotly.js';
import { data } from '../data/eve';

const CatAlerts = () => {
  const categoryCounts = data.reduce((acc, curr) => {
    const category = curr.alert.category;
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  const trace = {
    x: Object.keys(categoryCounts),
    y: Object.values(categoryCounts),
    type: 'bar'
  };

  return (
    <div className="card bg-base-300 p-4 shadow-xl h-full">
      <Plot
        data={[trace]}
        layout={{ 
          title: 'Category Alerts', 
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

export default CatAlerts;
