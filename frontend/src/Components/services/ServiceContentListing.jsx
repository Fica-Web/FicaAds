import React from 'react';
import GridBox from './GridBox';
import ListBox from './ListBox';
import ProcessListing from './ProcessListing';
import ScrollBox from './ScrollBox';
import ContentListing from './ContentListing';

const ServiceContentListing = ({ service }) => {

    return (
        <div className='my-20 w-11/12 mx-auto'>

            {/* Sections Rendering */}
            {service.sections?.map((section, index) => {
                if (section.type === 'list') {
                    return <ListBox key={index} section={section} />;
                } else if (section.type === 'process') {
                    return <ProcessListing key={index} section={section} />;
                } else if (section.type === 'gridBox') {
                    return <GridBox key={index} section={section} />;
                }else if (section.type === 'scrollBox') {
                    return <ScrollBox key={index} section={section} />;
                } else if (section.type === 'content') {
                    return <ContentListing key={index} section={section} />;
                } else {
                    return (
                        <div key={index} className="mt-10">
                            <h2 className="font-Switzer-Medium text-3xl mt-5 font-semibold">
                                {section.heading}
                            </h2>

                            {section?.subSections?.map((sub, subIndex) => (
                                <div key={subIndex} className="mt-1 md:pl-3">
                                    {sub.subHeading && (
                                        <h2 className="font-Switzer-Medium text-xl mb-1 mt-5 font-medium">
                                            {sub.subHeading}
                                        </h2>
                                    )}

                                    {/* Handling List & Paragraph Content */}
                                    {Array.isArray(sub.subDescription) ? (
                                        <ul className="list-disc ml-5 space-y-2">
                                            {sub.subDescription.map((desc, descIndex) => (
                                                <li key={descIndex} className="font-Switzer-Light">
                                                    {desc.content}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="font-Switzer-Light">{sub.subDescription}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    );
                }
            })}
        </div>
    );
};

export default ServiceContentListing;