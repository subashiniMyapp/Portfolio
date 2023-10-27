import React, { useEffect, useState } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

function DynamicCircularProgressBar({ percentage, id ,name }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < percentage) {
        setProgress(progress + 1);
      }
    }, 5);

    return () => {
      clearTimeout(timer);
    };
  }, [percentage, progress]);

  return (
   
      <div className='col-span-1 px-15 mb-7' key={id}>
        <CircularProgressbar
          value={progress}
          text={`${progress}%`}
          strokeWidth={3}
          styles={buildStyles({
            textColor: "#000",
            pathColor: "#FFAD01",
            trailColor: "#fff",
            pathTransition: 'none'
          })}
        />
        <div className="-mt-3.5 text-textcolor">{name}</div>
      </div>
  );
}

function Circular() {
  const percen = [
    { id: 1, name: 'HTML&CSS', score: 75 },
    { id: 2, name: 'JQUERY', score: 60 },
    { id: 3, name: 'PHP', score: 85 },
    { id: 4, name: 'MYSQL', score: 65 },
  ];

  return (
    <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 text-center gap-5'>
      {percen.map((item) => (
        <DynamicCircularProgressBar key={item.id} id={item.id} percentage={item.score} name ={item.name} />
      ))}
    </div>
  );
}

export default Circular;
