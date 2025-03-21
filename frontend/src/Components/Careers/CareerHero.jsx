import React, { useEffect, useState } from 'react';
import hero1 from "../../assets/Images/Careers-page.webp";

const CareerHero = () => {
  // State to track when the component has mounted
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Set hovered to true after the component mounts
    setHovered(true);
  }, []);

  return (
    <div className='relative sm:w-full'>
      <div className='relative w-full h-96 sm:h-96 lg:h-144 2xl:h-192'>
        <img
          className={`w-full h-full object-cover`}
          src={hero1}
          alt='product'
        />
      </div>
    </div>
  );
};

export default CareerHero;
