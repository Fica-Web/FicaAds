import React, { useRef, useEffect, useState } from "react";
import image from '../../assets/Images/aboutbanner.jpg';

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
            className="relative w-full bg-black mb-40 flex items-center justify-center"
            style={{
                height: `${grayHeight}px`,
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(${image})`,
            }} // Dynamically set black div height
        >
            <div
                ref={grayDivRef}
                className="w-[90%] max-w-2xl bg-gray5 p-7 sm:p-10 lg:p-20 absolute top-28
                      left-1/2 -translate-x-1/2 
                      lg:left-20 lg:translate-x-0"
            >
                <h2 className="text-3xl md:text-4xl font-extrabold text-brandGreen font-Switzer-Medium mb-4 uppercase">
                    {service.subTitle}
                </h2>
                <p className="text-lg text-gray-700 mx-auto mb-6">
                    {service.details}
                </p>
            </div>
        </div>
    );
};

export default ServiceTitle;