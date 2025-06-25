import React from 'react';
import SingleService from './SingleService';

const Services = () => {
    return (
        <div className='w-11/12 mx-auto my-20 '>
            <h2 className='text-2xl md:text-4xl lg:text-5xl lg:pt-5 uppercase font-medium font-Switzer-Medium'>
                SERVICE WE OFFER
            </h2>
           <div className="container mx-auto  py-20">
      <SingleService/>
    </div>
        </div>
    )
}

export default Services
