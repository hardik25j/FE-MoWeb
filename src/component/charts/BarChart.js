import React from 'react';
import { Bar } from 'react-chartjs-2';
import { barChartData } from './staticData';

const BarChart = () => {
  return (
    <React.Fragment>
      <div className="card mb-4">
        <div className="card-header">
          <i className="fas fa-chart-bar me-1"></i>
          Bar Chart Example
        </div>
        <div className="card-body">
          <Bar
            options={{
              legend: false,
              scales: {
                animation: {
                  duration: 10,
                },
                xAxes: [{
                  time: {
                    unit: 'month'
                  },
                  gridLines: {
                    display: false
                  },
                  ticks: {
                    maxTicksLimit: 6
                  }
                }],
                yAxes: [{
                  ticks: {
                    min: 0,
                    max: 15000,
                    maxTicksLimit: 5
                  },
                  gridLines: {
                    display: true
                  }
                }],
              },
            }}
            // height={130}
            data={{
              labels: barChartData.labels,
              datasets: [{
                label: "Revenue",
                backgroundColor: "rgba(2,117,216,1)",
                borderColor: "rgba(2,117,216,1)",
                data: barChartData.dataValue,
              }],
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
}



export default React.memo( BarChart, function (prevprops, nextprops) {
  return prevprops === nextprops;
});
