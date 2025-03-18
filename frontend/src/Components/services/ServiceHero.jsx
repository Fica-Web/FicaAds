import React from 'react'
import img1 from '../../assets/Images/aboutbanner.jpg';

const ServiceHero = ({ service }) => {
    return (
        <div className='w-11/12 mx-auto '>
            <div className='w-full h-96 lg:h-124 animate-fade-up duration-1000'>
                <img
                    src={img1}
                    alt='About Banner'
                    className='w-full h-full rounded-xl object-cover'
                />
            </div>
            <div className='mt-6 lg:w-9/12 xl:w-8/12 animate-fade-up duration-1000'>
                <h2 className='font-Switzer-Medium uppercase text-black text-4xl md:text-4xl lg:text-5xl xl:text-6xl'>
                    { service.title }
                </h2>
            </div>
        </div>
    )
}

export default ServiceHero
