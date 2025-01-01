import React from 'react';

const LogoMovementAnimation = ({ data, direction = "left" }) => {
  // Duplicate the logos to create a seamless infinite loop
  const logosToRender = [...data, ...data]; // Duplicate the array for seamless scrolling

  return (
    <div className="w-full md:h-[200px] h-[130px] overflow-hidden flex items-center relative">
      <style>
        {`
          @keyframes scroll-left {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-100%);
            }
          }

          @keyframes scroll-right {
            from {
              transform: translateX(-100%);
            }
            to {
              transform: translateX(0);
            }
          }

          .scrolling-container {
            display: flex;
            width: max-content; /* Allow content to grow naturally */
          }

          .scrolling-container-left {
            animation: scroll-left 20s linear infinite; /* Adjust duration as needed */
          }

          .scrolling-container-right {
            animation: scroll-right 20s linear infinite; /* Adjust duration as needed */
          }

          .scrolling-container:hover {
            animation-play-state: paused; /* Pause animation on hover */
          }
        `}
      </style>

      <div className={`scrolling-container md:gap-[75px] sm:gap-[65px] gap-[45px] scrolling-container-${direction}`}>
        {logosToRender.map((item, index) => (
          <img
            key={index}
            src={item}
            alt="Logo"
            className="h-[100px] sm:h-[110px] lg:h-[130px] flex-shrink-0" // Adjust size as needed
          />
        ))}
      </div>
    </div>
  );
};

export default LogoMovementAnimation;