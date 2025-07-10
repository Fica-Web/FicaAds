import React from 'react';

const ScrollBox = ({ section }) => {
    if (!section || !section.subSections) return null;

    return (
        <div className="my-24 ">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start justify-between">
                {/* Left Section */}
                <div className="lg:w-1/2 ">
                    <h2 className="text-4xl lg:text-5xl font-semibold text-black mb-6 tracking-tight">
                        {section.heading}
                    </h2>
                    {section.description && (
                        <p className="text-lg text-neutral-700 leading-relaxed max-w-xl">
                            {section.description}
                        </p>
                    )}
                </div>

                {/* Right Section */}
                {/* <div className="lg:w-1/2 flex flex-col bg-red-100">
                    {section.subSections.map((item, index) => (
                        <div key={index} className="relative flex items-start pb-8 bg-yellow-300 mb-3">
                            <div className="text-black text-lg font-medium min-w-[32px] pt-1">
                                {String(index + 1).padStart(2, "0")}
                            </div>

                            <div className="relative flex-1  bg-green-100">
                                <div className="absolute top-0 left-0 w-px h-full bg-neutral-300" />

                                <div className="absolute top-2 left-0 h-px w-full bg-neutral-300" />

                                <div className="pl-6">
                                    <h3 className="text-lg font-semibold text-black mb-1 leading-snug">
                                        {item.subHeading}
                                    </h3>
                                    {item.subDescription.map((desc, i) => (
                                        <p
                                            key={i}
                                            className="text-neutral-700 text-base leading-relaxed"
                                        >
                                            {desc.content}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div> */}

                <div className='relative lg:w-1/2 h-full flex'>
                    <div className=' pr-10 border-r border-gray1'>
                        01
                    </div>

                    <div className='absolute w-full h-1 bottom-4 border-t'></div>

                    <div className=' h-full w-full pl-5 lg:pb-16'>
                        <h3 className="text-lg font-semibold ">
                            10+ Years of Expertise
                        </h3>
                        {/* {item.subDescription.map((desc, i) => (
                            <p
                                key={i}
                                className="text-neutral-700 text-base leading-relaxed"
                            >
                                {desc.content}
                            </p>
                        ))} */}

                        <p
                            className="text-neutral-700 text-base leading-relaxed"
                        >
                            Over a decade of pioneering digital and traditional advertising.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrollBox;
