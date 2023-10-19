import React, { useEffect, useState } from 'react';
import { CircularProgressbar ,buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function CircularProgressBar() {

  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (percentage < 90) {
        setPercentage(percentage + 1);
      }
    }, 5);
  }, [percentage]);

  return (
    
    <div className=' grid md:grid-cols-2 sm:grid-cols-1  lg:grid-cols-4 text-center'>
      <div className=' col-span-1  px-15 mb-7'>
          <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={3}
            styles={buildStyles({
              textColor: "#000",
              pathColor: "#FFAD01",
              trailColor: "#fff",
              pathTransition: 'none'
            })} />
          <div className=" -mt-3.5  text-textcolor">HTML & CSS</div>
      </div>
    </div>
  );
}
export default CircularProgressBar;