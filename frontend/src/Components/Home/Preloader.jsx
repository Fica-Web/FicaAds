import React from 'react';

const Preloader = ({ text='fica...' }) => {

  return (
    <div className="flex justify-center items-center w-full h-screen bg-white overflow-y-hidden">
      <div className="flex space-x-2">
        {text.split("").map((letter, index) => (
          <span
            key={index}
            className="text-7xl font-bold animate-fadeIn"
            style={{ animationDelay: `${index * 0.2}s` }} // Delay for each letter
          >
            {letter}
          </span>
        ))}
      </div>

      <style>
        {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            50% {
              opacity: 1;
              transform: translateY(-10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 1.5s ease-in-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Preloader;