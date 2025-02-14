import React, { useEffect, useState } from 'react';

const CountSection = () => {
  const count = [
    {
      number: 28,
      text: 'designers and developers',
      bgClass: 'bg-(--darkblack)', 
      colorclass:'text-(--white) ',
      width:"w-40"

    },
    {
      number: 328,
      text: 'awards for digital innovation',
      bgClass: 'bg-(--black)', 
      colorclass:'text-(--white)',
      width:"w-40"

    },
    {
      number: 2999,
      text: 'happy customers',
      bgClass: 'bg-(--gray)', 
      colorclass:"text-(--darkblack)",
      width:"w-30"
    },
  ];
  
  const [counts, setCounts] = useState(count.map(item => ({ ...item, current: 0 })));

  useEffect(() => {
    const timer = setInterval(() => {
      setCounts(prevCounts =>
        prevCounts.map(item => {
          if (item.current < item.number) {
            return { ...item, current: item.current + Math.ceil(item.number / 50) };
          }
          return item;
        })
      );
    }, 50); 

    return () => clearInterval(timer); 
  }, [count]);

  return (
    <div
      className="bg-fixed bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(https://atrixitsolutions.com/wp-content/uploads/2024/08/demo.jpg)',
        height: '623px',
      }}
    >
      <div className=" flex h-full items-end gap-16 px-70">
       
      
          {counts.map((item, index) => (
          
            <div
              key={index}
              className={`text-center items-start flex justify-items-start  px-6 py-8 mb-4  w-70 h-40 ${item.bgClass} ${item.colorclass} `}
            >
                <div className={` items-start text-start ${item.width}`}>
              <span className="text-4xl font-bold">{item.current}+ </span>
             
              <h3 className="text-xl mt-2 font-bold ">{item.text}</h3>

              </div>
            </div>
          ))}
        </div>
      </div>

  );
};

export default CountSection;
