import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../assets/Images/Banner1.webp";
import banner2 from "../../assets/Images/Banner2.webp"
import banner3 from "../../assets/Images/Banner3.webp"
import NavBar from '../NavBar/NavBar';

const Hero = () => {
    const herodetails = [
        { id: "1", image: banner2, brand: "Burgerspot", heading: "Creating a fresh identity for restaurants" },
        { id: "2", image: banner1, brand: "Bentley", heading: "Photoshoot for a car" },
        { id: "3", image: banner3, brand: "John Jacobs", heading: "New identity for a glassware brand" },
    ];

    return (
        <div className='relative  sm:w-full sm:h-96 md:h-fit '>
            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                interval={3000}
            >
                {herodetails.map((hero) => (
                    <div key={hero.id} className='relative  w-full h-screen'>
                        <img className='w-full h-full object-cover' src={hero.image}
                            alt={`slide ${hero.id}`} />
                        <div className="absolute top-0 left-0 w-full z-20">
                            <NavBar />
                        </div>

                        {/* Keep the text aligned to the bottom-left */}
                        <div data-aos="fade-up" style={{ lineHeight: '1.3' }} className='absolute bottom-0 left-0 w-full space-y-4  sm:w-4/5 p-8 sm:p-6 md:w-3/5 2xl:w-5/12 md:p-8 lg:p-10 xl:p-16 text-white flex flex-col items-start justify-end'>
                            <h1 data-aos="fade-up" style={{ lineHeight: '1.3' }} className='font-Switzer-Regular text-lg sm:text-xl md:text-3xl lg:text-xl xl:text-xl 2xl:-lg text-left'>
                                {hero.brand}
                            </h1>
                            <h1 data-aos="fade-up" className='font-Switzer-Medium text-left uppercase text-2xl  sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-4xl '>
                                {hero.heading}
                            </h1>
                            <Link to={'/project'}>
                                <button className='backdrop-blur-md bg-black/20 font-Switzer-Medium mt-4 rounded-lg h-8  px-6 text-sm'>
                                    View Project
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


