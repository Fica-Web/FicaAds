import React, { useRef, useEffect, useState } from "react";
import image from "../../assets/Images/aboutbanner.jpg";

const ServiceTitle = ({ service }) => {
    const grayDivRef = useRef(null);
    const [grayHeight, setGrayHeight] = useState(0);

    useEffect(() => {
        if (grayDivRef.current) {
            setGrayHeight(grayDivRef.current.offsetHeight);
        }
    }, [service]);

    return (
        <div
            className="relative w-full bg-black mb-40 flex flex-col items-center lg:flex-row lg:items-center lg:justify-between px-6 lg:px-20"
            style={{
                height: `${grayHeight}px`,
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Service Title - Positioned differently based on screen size */}
            <div className="text-center lg:text-right mt-6 lg:mt-0 lg:absolute lg:right-20 lg:top-1/2 lg:-translate-y-1/2">
                <h2 className="text-4xl md:text-5xl font-bold text-gray5 uppercase mt-5">
                    {service.title}
                </h2>
            </div>

            {/* Gray Content Box */}
            <div
                ref={grayDivRef}
                className="w-[90%] max-w-2xl bg-gray5 p-7 sm:p-10 lg:p-20 absolute top-28 
                      left-1/2 -translate-x-1/2 
                      lg:left-20 lg:translate-x-0"
            >
                <h2 className="text-3xl md:text-4xl font-extrabold text-brandGreen font-Switzer-Medium mb-4 uppercase">
                    {service.subTitle}
                </h2>
                <p className="text-lg text-gray1 mx-auto mb-6">
                    {service.details}
                </p>
            </div>
        </div>
    );
};

export default ServiceTitle;
