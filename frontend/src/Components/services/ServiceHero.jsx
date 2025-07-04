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
        // <div
        //     className="w-full bg-black mb-40 flex flex-col-reverse items-center lg:flex-row lg:items-center lg:justify-between px-3 lg:px-20"
        //     style={{
        //         height: `${grayHeight}px`,
        //         backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${image})`,
        //         backgroundSize: "cover",
        //         backgroundPosition: "center",
        //     }}
        // >

        //     {/* Gray Content Box */}
        //     <div
        //         ref={grayDivRef}
        //         className="w-full lg:w-1/2 max-w-2xl bg-gray5 border-b border-gray5 p-7 sm:p-10 lg:p-20 lg:-mb-40 -mb-28 lg:mx-5"
        //     >
        //         <h2 className="text-2xl md:text-4xl font-extrabold text-brandGreen font-Switzer-Medium mb-4 uppercase">
        //             {service.subTitle}
        //         </h2>
        //         <p className="text-lg text-gray1 mx-auto mb-6">
        //             {service.details}
        //         </p>
        //     </div>

        //     {/* Service Title - Positioned differently based on screen size */}
        //     <div className="lg:w-1/2 w-full mt-6 lg:mt-0">
        //         <h2 className="text-4xl md:text-5xl font-bold text-gray5 uppercase mt-8 text-center">
        //             {service.title}
        //         </h2>
        //     </div>
        // </div>
        <div className='mt-'>
            <div className='w-11/12 mx-auto '>
                <div className=''>
                    <div className=''>
                        <div className='w-full h-96 lg:h-124 animate-fade-up duration-1000'>
                            <img
                                src={service.image}
                                alt='About Banner'
                                className='w-full h-full rounded-xl object-cover'
                            />
                        </div>
                        <div className='mt-6 animate-fade-up duration-1000'>
                            <h2 className='font-Switzer-Regular font-bold uppercase text-black text-4xl md:text-4xl lg:text-5xl '>
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
