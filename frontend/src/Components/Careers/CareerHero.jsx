import React from 'react'
import hero1 from "../../assets/Images/hero1.jpg";
import NavBar from '../NavBar/NavBar';

const CareerHero = () => {
    return (
        <div className='relative  sm:w-full sm:h-96 md:h-fit '>
            <div className='relative w-full h-96 sm:h-96 lg:h-96 xl:h-96'>
                <img className='w-full h-full object-cover' src={hero1}
                    alt='product' />
                <div className="absolute top-0 left-0 w-full z-20">
                    <NavBar />
                </div>


            </div>
        </div>
    );
};

export default CareerHero