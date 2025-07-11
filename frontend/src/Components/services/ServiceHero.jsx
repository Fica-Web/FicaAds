import React, { useRef, useEffect, useState } from "react";
import image from "../../assets/Images/aboutbanner.jpg";

const ServiceHero = ({ service }) => {
    const grayDivRef = useRef(null);
    const [grayHeight, setGrayHeight] = useState(0);

    useEffect(() => {
        if (grayDivRef.current) {
            setGrayHeight(grayDivRef.current.offsetHeight);
        }
    }, [service]);

    return (
        <div className='mt-'>
            <div className='w-11/12 mx-auto '>
                <div className=''>
                    <div className=''>
                        <div className='w-full h-96 lg:h-128 animate-fade-up duration-1000'>
                            <img
                                src={service.image}
                                alt='About Banner'
                                className='w-full h-full rounded-xl object-cover'
                            />
                        </div>
                        <div className='mt-6 animate-fade-up duration-1000'>
                            <h2 className='font-Switzer-Medium uppercase text-black text-4xl md:text-4xl lg:text-5xl'>
                                {service.subTitle}
                            </h2>
                            <p className="text-lg text-gray1 mx-auto mt-6">
                                {service.details}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServiceHero;
