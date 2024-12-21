import React from 'react';
import fica from '../../assets/Images/fica.png'

const LogoMovementAnimation = ({ data }) => {
  // Duplicate the logos to create a seamless infinite loop
  const logosToRender = [...data, ...data]; // Duplicate the array for seamless scrolling

  return (
    <div className="w-full h-[200px] overflow-hidden flex items-center">
      <style>
        {`
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-100%);
            }
          }
        `}
      </style>

      <div
        className="flex gap-24 animate-scroll"
        style={{
          animation: 'scroll 10s linear infinite',
          width: `${logosToRender.length * 230}px`, // Adjust based on item size and gap
        }}
      >
        {logosToRender.map((item, index) => (
          <img
            key={index}
            src={fica}
            alt="Logo"
            className="w-[200px] flex-shrink-0" // Adjust size as needed
          />
        ))}
      </div>
    </div>
  );
};

export default LogoMovementAnimation;