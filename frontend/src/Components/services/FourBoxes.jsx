import React from 'react';
import bgImage from '../../assets/Images/behind.jpg';

const principles = {
    "heading": "Think. Create. Dominate.",
    "description": "Our approach revolves around three core principles that ensure campaign success.",
    "type": "fourBox",
    "subSections": [
        {
            "subHeading": "THINK",
            "subDescription": "Best Advertising Agency in Dubai – Fica Ad Innovation."
        },
        {
            "subHeading": "CREATE",
            "subDescription": "Award-Winning Campaigns – Fica Ad Innovation."
        },
        {
            "subHeading": "DOMINATE",
            "subDescription": "Data-Driven Results – Fica Ad Innovation."
        }
    ]
}

const FourBoxes = ({ section }) => {
    console.log('section:', section)
    return (
        <div className="w-full bg-black min-h-[90vh] flex justify-center items-center my-20 p-20 relative">
            {/* Background Image Container with White Overlay */}
            <div
                className="w-full min-h-[90vh] bg-cover bg-center bg-no-repeat -rotate-1 relative"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                {/* White Shade Overlay */}
                <div className="absolute inset-0 bg-white/40"></div>

                {/* Content */}
                <div className='flex flex-1 justify-center items-center min-h-[90vh]'>
                    {/* Content Container */}
                    <div className="relative grid grid-cols-2 bg-white shadow-xl max-w-4xl">
                        {/* Title Section */}
                        <div className="col-span-2 md:col-span-1 flex flex-col justify-center p-14 bg-gray">
                            <h2 className="text-4xl lg:text-6xl font-bold font-Switzer-Medium max-w-[350px] text-black mb-4 uppercase">{section?.heading}</h2>
                            <p className="text-gray-700">{principles.description}</p>
                        </div>

                        {/* Principle Boxes */}
                        {principles.subSections.map((section, index) => (
                            <div key={index} className="bg-gray-100 p-14 border border-gray5 flex items-center">
                                <div className=''>
                                    <h3 className="text-xl font-semibold text-black">{section.subHeading}</h3>
                                    <p className="text-gray-600 mt-2">{section.subDescription}</p>
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