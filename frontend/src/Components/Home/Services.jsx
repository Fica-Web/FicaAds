import React from 'react';
import SingleService from './SingleService';

const Services = () => {
    return (
        <div className='w-11/12 mx-auto my-20 '>
            <h2 className='text-lg md:text-4xl lg:text-5xl lg:pt-5 uppercase text-center lg:text-left font-medium font-Switzer-Medium'>
                SERVICE WE OFFER
            </h2>
            <div className="w-full mx-auto mt-5 lg:mt-[40px]">
                <SingleService />
            </div>
        </div>
    )
}

export default Services
