import { Card, CardBody } from "@material-tailwind/react";
import ReactApexChartBar from 'react-apexcharts'
import React from "react";
class ApexChartBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
        data: [40, 88, 60]
      }],
      options: {
        chart: {
          height: 350,
          type: 'bar',
          events: {
            click: function(chart, w, e) {
              // console.log(chart, w, e)
            }
          }
        },
        
        colors: ["#0263FF", "#DB0D4B", "#56BA6C"],
        plotOptions: {
          bar: {
            columnWidth: '25%',
            distributed: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        xaxis: {
          categories: [
           
            ['Branch 1'],
            ['Branch 2'],
            ['Branch 3'], 
          ],
          labels: {
            style: {
              colors: ['#333333'],
              fontSize: '12px'
            }
          }
        }
      },
    
    
    };
  }


  render() {
    return (
      <div className=' bg-white rounded-xl h-[275px] justify-center items-center'>
      <h4 className='text-black text-xl font-medium text-left mb-5 ml-3 mt-5 '>Application by branch</h4>
      <div className="flex justify-center items-center" id="chart">
          <ReactApexChartBar className='text-black' options={this.state.options} series={this.state.series} type="bar" height={150} />
      </div>
      </div>
        
    );
  }
}
export default ApexChartBar