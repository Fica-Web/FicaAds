import React from 'react'
import { useState } from 'react';


const ExtraNews = () => {
    const [activeService, setActiveService] = useState(null);

    const services = [
        {
            id: '1',
            title: 'Market Research',
            details:
                "Gathering and analyzing data about a target audience's preferences, behaviors, and needs to inform design and marketing decisions. This capability enables us to understand market trends, identify opportunities, and tailor strategies to meet consumer demands effectively.",
        },
        {
            id: '2',
            title: 'Brand Strategy',
            details:
                "Development of a comprehensive plan to establish and strengthen a brand's identity, positioning, and market presence. This capability includes defining the brand's mission, values, target audience, and unique selling propositions. By creating a cohesive brand narrative and visual identity, we ensure consistent messaging across all touchpoints.",
        },
        {
            id: '3',
            title: 'Experience Design',
            details:
                'Creating seamless, intuitive, and engaging interactions between users and products or services. This capability involves understanding user journeys, designing user interfaces (UI), and enhancing user experiences (UX) through research, prototyping, and testing.',
        },
        {
            id: '4',
            title: 'Product Launch',
            details:
                'Planning and execution of introducing a new product to the market. This capability involves developing a comprehensive launch strategy that includes market research, branding, marketing, and promotional activities. We ensure that all visual and communication elements align with the brand identity and resonate with the target audience.',
        },
    ];

    const toggleService = (id) => {
        setActiveService((prev) => (prev === id ? null : id));
    };

    return (
        <div className='mb-20'>
            <div className='w-11/12 mx-auto '>
                <div className='mt-20  space-y-6 md:space-y-0 md:flex'>
                    <div className='md:w-1/2'>
                        <h2 className='font-Switzer-Light text-sm  text-gray xl:text-xl'>Our Services</h2>
                    </div>
                    <div className='md:w-1/2'>
                        <div className=''>
                            {services.map((service) => (
                                <div key={service.id} className='mb-4'>
                                    <div
                                        className='flex justify-between items-center cursor-pointer'
                                        onClick={() => toggleService(service.id)}
                                    >
                                        <h3 className='text-xl font-Switzer-Medium xl:text-2xl'>{service.title}</h3>
                                        <span className='text-xl xl:text-2xl'>
                                            {activeService === service.id ? '-' : '+'}
                                        </span>
                                    </div>
                                    {activeService === service.id && (
                                        <p className='mt-2 text-gray-700 font-Switzer-Light'>{service.details}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraNews