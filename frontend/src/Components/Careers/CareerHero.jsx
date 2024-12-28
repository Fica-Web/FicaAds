import React, { useEffect, useState } from 'react';
import hero1 from "../../assets/Images/careers-page.webp";
import NavBar from '../NavBar/NavBar';

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
        <div className="absolute top-0 left-0 w-full z-20">
          <NavBar />
        </div>
      </div>
    </div>
  );
};

export default CareerHero;
