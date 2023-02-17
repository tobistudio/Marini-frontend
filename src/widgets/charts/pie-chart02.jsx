
import { Card, CardBody } from "@material-tailwind/react";
import ReactPie02 from 'react-apexcharts'
import React from "react";
class Pie02 extends React.Component {
   constructor(props) {
     super(props);

     this.state = {
     
      series: [33, 33, 33],
      options: {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: ['item1', 'item2', 'item3'],
        legend:{
         markers:{
            strokeColor: ['#56BA6C','#0263FF', '#DB0D4B'],
            fillColors: ['#56BA6C','#0263FF', '#DB0D4B'],
         } 
        },
       
        fill: {
           opacity: 1,
           colors:['#56BA6C','#0263FF', '#DB0D4B'],
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom',
              
            }
          }
        }]
      },
     
     };
   }

 


   render() {
      return (
        <div className=' bg-white rounded-xl h-[275px] justify-center items-center'>
        <h4 className='text-black text-xl font-medium text-left ml-3 mb-8 mt-4 '>Application status</h4>
        <div className="flex justify-center items-center" id="chart">
            <ReactPie02 options={this.state.options} series={this.state.series} type="pie" width={300} />
        </div>
        </div>
          
      );
    }
  }
  export default Pie02