import React from 'react';
import { Line } from 'react-chartjs-2';
import { areaChartData } from './staticData';

const AreaChart = () => {
  
  return (
    <React.Fragment>
      <div className="card mb-4">
        <div className="card-header">
          <i className="fas fa-chart-area me-1"></i>
          Area Chart Example
        </div>
        <div className="card-body">
          <Line
            options={{
              legend: false,
              scales: {
                xAxes: [{
                  gridLines: false,
                  ticks: {
                    maxTicksLimit: 7,
                  }
                }],
                yAxes: [{
                  ticks: {
                    suggestedMin: 0,
                    maxTicksLimit: 5,
                  }
                }],
              },

            }}
            data={{
              labels: areaChartData.labels,
              datasets: [{
                label: "Sessions",
                lineTension: 0.3,
                backgroundColor: "rgba(2,117,216,0.2)",
                borderColor: "rgba(2,117,216,1)",
                pointRadius: 5,
                pointBackgroundColor: "rgba(2,117,216,1)",
                pointBorderColor: "rgba(255,255,255,0.8)",
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(2,117,216,1)",
                pointHitRadius: 50,
                pointBorderWidth: 2,
                data: areaChartData.dataValue,
              }],
            }
            }
          ></Line>
        </div>
      </div>
    </React.Fragment>
  );
}

export default React.memo( AreaChart, function (prevprops, nextprops) {
  return prevprops === nextprops;
});