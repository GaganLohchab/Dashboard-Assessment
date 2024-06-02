// import React from 'react';
import Plot from 'react-plotly.js';
import { data } from '../data/eve';

const SevAlerts = () => {
  const severityCounts = data.reduce((acc, curr) => {
    const severity = curr.alert.severity;
    acc[severity] = (acc[severity] || 0) + 1;
    return acc;
  }, {});

  const trace = {
    labels: Object.keys(severityCounts),
    values: Object.values(severityCounts),
    type: 'pie'
  };

  return (
    <div className="card bg-base-300 p-4 shadow-xl h-full">
      <Plot
        data={[trace]}
        layout={{ 
          title: 'Severity Alerts', 
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

export default SevAlerts;
