import { Card, CardBody } from '@material-tailwind/react'
import React, { useRef, useEffect } from 'react'

const Canvas = ({color='#0066ff', angle=120, text="2,358"}) => {
  
  const canvasRef = useRef(null)
  
  useEffect(() => {

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    canvas.width = 220;
    canvas.height = 220;
    //Our first draw
    var centerX=canvas.width / 2 - 7;
    var centerY=canvas.height / 2;
    var radius=100;
    var ang = angle * Math.PI / 180;
    context.beginPath();


    context.arc(centerX,centerY, 102, Math.PI,  Math.PI+ang);
    context.arc(centerX,centerY, 90, Math.PI+ang,  Math.PI, true);
    context.lineTo(10, centerY);
    context.lineWidth = 2;
    context.strokeStyle=color;
    context.stroke();
    context.fillStyle=color;
    context.fill();

    context.beginPath();


    context.arc(centerX,centerY, 90, Math.PI*2,  Math.PI+ang, true);
    context.arc(centerX,centerY, 102, Math.PI+ang,  Math.PI*2);
    context.lineTo(206, centerY);
    context.lineWidth = 2;
    context.strokeStyle='#E6EBF8';
    context.stroke();
    context.fillStyle='#E6EBF8';
    context.fill();

    context.beginPath();
    context.arc(centerX,centerY, 10, Math.PI+ang+0.2,  Math.PI+ang-0.2);
    context.lineTo(centerX+40*Math.cos(Math.PI+ang), centerY+40*Math.sin(Math.PI+ang));
    context.lineTo(centerX+10*Math.cos(Math.PI+ang+0.2), centerY+10*Math.sin(Math.PI+ang+0.2));
    context.strokeStyle='#0263FF';
    context.stroke();
    context.fillStyle='#0263FF';
    context.fill();

    context.beginPath();
    context.arc(centerX, centerY, 5, 0, 2*Math.PI, false);
    context.strokeStyle='white';
    context.stroke();
    context.fillStyle='white';
    context.fill();

    
    context.beginPath();
    context.font = "15px Inter";
    context.fillStyle='#92929d';
    context.fillText("0", 5, centerY+15);
    
    context.beginPath();
    context.font = "15px Inter";
    context.fillStyle='#92929d';
    context.fillText("2900", centerX*2-25, centerY+15);
    
    context.beginPath();
    context.font = "20px Inter";
    context.fillStyle='black';
    context.fillText(text, centerX-20, centerY+40);
  }, [angle, text])
  
  return (
    <div className=' bg-white rounded-xl h-[275px] justify-center items-center'>
      <h4 className='text-black text-xl font-medium text-left ml-3 mb-8 mt-5'>Total Application</h4>
      <div className="flex justify-center items-center" id="chart">
        <canvas ref={canvasRef}></canvas>
        </div>
    </div>

  )
}

export default Canvas