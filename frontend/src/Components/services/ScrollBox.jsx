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
                <div className='lg:w-1/2 h-full font-Switzer-Medium'>
                    {section.subSections.map((item, index) => (
                        <div className='flex relative'>
                            <div className=' pr-10 border-r border-gray1 text-xl font-semibold'>
                                {String(index + 1).padStart(2, "0")}
                            </div>

                            <div className='absolute w-full h-1 bottom-4 border-t'></div>

                            <div className=' h-full w-full pl-5 lg:pb-10 '>
                                <h3 className="text-xl font-semibold tracking-wide mb-2">
                                    {item.subHeading}
                                </h3>

                                {item.subDescription.map((desc, i) => (
                                    <p
                                        key={i}
                                        className="text-lg leading-relaxed font-Switzer-Light text-neutral-700 lg:max-w-sm "
                                    >
                                        {desc.content}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default ScrollBox;
