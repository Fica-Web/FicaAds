import React from 'react';
import bgImage from '../../assets/Images/behind.jpg';

const FourBoxes = ({ section }) => {
    return (
        <div className="w-full bg-black min-h-[90vh] flex justify-center items-center lg:my-20 lg:p-20 relative">
            {/* Background Image Container with White Overlay */}
            <div
                className="w-full min-h-[90vh] bg-cover bg-center bg-no-repeat lg:-rotate-3 relative"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                {/* White Shade Overlay */}
                <div className="absolute inset-0 bg-white/40"></div>

                {/* Content */}
                <div className='flex flex-1 justify-center items-center min-h-[90vh] lg:p-20 p-8 lg:rotate-3'>
                    {/* Content Container */}
                    <div className="relative grid lg:grid-cols-2 grid-cols-1 bg-white shadow-xl max-w-4xl">
                        {/* Title Section */}
                        <div className=" flex flex-col justify-center lg:p-14 p-8 bg-gray">
                            <h2 className="text-4xl lg:text-6xl font-bold font-Switzer-Medium max-w-[350px] text-black mb-4 uppercase">{section?.heading}</h2>
                            <p className="text-gray1">{section?.description}</p>
                        </div>

                        {/* Principle Boxes */}
                        {section?.subSections?.map((section, index) => (
                            <div key={index} className="bg-gray-100 lg:p-14 p-8 last:bg-gray2 flex items-center">
                                <div className=''>
                                    <h3 className="text-3xl font-bold text-gray1">{section.subHeading}</h3>
                                    <p className="text-lightgray mt-2">{section.subDescription}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FourBoxes;