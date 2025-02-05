import React from 'react';
import SingleService from './SingleService';

const Services = () => {
    return (
        <div className='w-11/12 mx-auto my-20'>
            <h2 className='text-2xl md:text-4xl lg:text-5xl uppercase font-Switzer-Medium'>
                Our Services
            </h2>
            <div className='flex my-10 w-1/2'>
                <div className='flex flex-col '>
                    <SingleService />
                </div>
            </div>
        </div>
    )
}

export default Services
