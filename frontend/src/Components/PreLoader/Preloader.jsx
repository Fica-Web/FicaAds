import React, { useState, useEffect } from "react";

const Preloader = ({ text = "..." }) => {
    const [counter, setCounter] = useState(0);
    const [showCurtain, setShowCurtain] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prev) => {
                if (prev < 100) {
                    return prev + 1;
                } else {
                    clearInterval(interval);
                    setShowCurtain(true); // Trigger curtain animation
                    return 100;
                }
            });
        }, 50); // Adjust speed here (50ms per increment)

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    return (
        <div className="relative w-full h-screen bg-white overflow-hidden">
            {/* Preloader Content */}
            <div className="flex justify-center items-center w-full h-full">
                <div className="flex space-x-2">
                    {text.split("").map((letter, index) => (
                        <span
                            key={index}
                            className="text-7xl font-bold animate-bounce text-gray-800"
                            style={{ animationDelay: `${index * 0.1}s` }} // Delay for each letter
                        >
                            {letter}
                        </span>
                    ))}
                </div>
                <div className="absolute bottom-20 right-20 text-5xl font-semibold font-serif text-gray-600 ">
                    {String(counter).padStart(3, "0")}
                </div>
            </div>

            {/* Transparent Curtain */}
            {showCurtain && (
                <div className="curtain fixed top-0 left-0 w-screen h-screen bg-slate-200"></div>
            )}

            <style>
                {`
                    @keyframes bounce {
                        0%, 20%, 50%, 80%, 100% {
                            transform: translateY(0);
                        }
                        40% {
                            transform: translateY(-30px);
                        }
                        60% {
                            transform: translateY(-15px);
                        }
                    }

                    .animate-bounce {
                        animation: bounce 1.5s ease infinite;
                    }

                    @keyframes curtain-close {
                        0% {
                            transform: scaleY(0);
                            opacity: 0;
                        }
                        100% {
                            transform: scaleY(1);
                            opacity: 1;
                        }
                    }

                    .curtain {
                        animation: curtain-close 0.5s ease forwards;
                        transform-origin: top;
                        z-index: 50; /* Ensures it overlays content */
                    }
                `}
            </style>
        </div>
    );
};

export default Preloader;