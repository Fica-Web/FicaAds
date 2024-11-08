import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import hero1 from "../../assets/Images/hero1.jpg";
import hero2 from "../../assets/Images/hero2.jpg";
import hero3 from "../../assets/Images/hero3.jpg";

const Hero = () => {
    const herodetails = [
        { id: "1", image: hero1, brand: "co&co", heading: "Design for the new world" },
        { id: "2", image: hero2, brand: "co&co", heading: "Design for the new world" },
        { id: "3", image: hero3, brand: "co&co", heading: "Design for the new world" },
    ];

    return (
        <div className='relative mt-16 sm:w-full sm:h-96 md:h-fit '>
            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                interval={3000}
            >
                {herodetails.map((hero) => (
                    <div key={hero.id} className='relative w-full h-144 sm:h-144 lg:h-144 xl:h-176'>
                        <img className='w-full h-full object-cover' src={hero.image}
                            alt={`slide ${hero.id}`} />

                        {/* Keep the text aligned to the bottom-left */}
                        <div data-aos="fade-up" style={{ lineHeight: '1.3' }} className='absolute bottom-0 left-0 w-full  sm:w-4/5 p-4 sm:p-6 md:w-3/5 md:p-8 lg:p-10 xl:p-12 text-white flex flex-col items-start justify-end'>
                            <h1 data-aos="fade-up" style={{ lineHeight: '1.3' }} className='font-Switzer-Regular text-lg sm:text-xl md:text-3xl lg:text-xl xl:text-2xl text-left'>
                                {hero.brand}
                            </h1>
                            <h1 data-aos="fade-up"  className='font-Switzer-Medium text-left uppercase text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl  '>
                                {hero.heading}
                            </h1>
                            <Link to={'/project'}>
                            <button className='font-Switzer-Medium border mt-4 text-sm lg:mt-6 lg:px-2 rounded-xl px-2 py-1'>
                                Explore More
                            </button>
                            </Link>
                        </div>

                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Hero;


