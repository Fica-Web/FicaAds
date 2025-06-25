import React from 'react';
import services from '../../data/services';
import SingleService from './SingleService';

const Services = () => {
    return (
        <div className='w-11/12 mx-auto my-20'>
            <h2 className='text-2xl md:text-4xl lg:text-5xl uppercase font-medium font-Switzer-Medium'>
                SERVICE WE OFFER
            </h2>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-8 my-20 lg:px-10'>
                {services.map(service => (
                    <SingleService 
                        key={service.id}
                        service={service}
                    />
                ))}
            </div>
        </div>
    )
}

export default Services
