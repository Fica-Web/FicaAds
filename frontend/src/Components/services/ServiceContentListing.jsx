import React from 'react'

const ServiceContentListing = ({ service }) => {
    console.log(service)
    return (
        <div className='my-20 w-11/12 mx-auto'>
            <h3 className='font-Switzer-Medium text-3xl my-2 font-semibold'>
                { service.subTitle }
            </h3>
            <p className='text-lg md:pl-5'>
                { service.details }
            </p>
            {service.sections?.map((section, index) => (
                <div key={index} className="mt-10">
                    <h2 className="font-Switzer-Medium text-3xl mt-5 font-semibold">{section.heading}</h2>

                    {section?.subSections?.map((sub, subIndex) => (
                        <div key={subIndex} className="mt-1 md:pl-3">
                            {sub.subHeading && <h2 className="font-Switzer-Medium text-xl mb-1 mt-5 font-medium ">{sub.subHeading}</h2>}

                            {Array.isArray(sub.subDescription) ? (
                                sub.subDescription.map((desc, descIndex) => (
                                    desc.type === "list" ? (
                                        <li key={descIndex} className="font-Switzer-Light ml-3 list-disc">{desc.content}</li>
                                    ) : (
                                        <p key={descIndex} className="font-Switzer-Light">{desc.content}</p>
                                    )
                                ))
                            ) : (
                                <p className="font-Switzer-Light">{sub.subDescription}</p>
                            )}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default ServiceContentListing
