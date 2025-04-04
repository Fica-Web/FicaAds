import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../assets/Images/Banner1.webp";
// import banner2 from "../../assets/Images/Banner2.webp";
import banner3 from "../../assets/Images/Cover-image.webp";
import sampleVideo from "../../assets/Images/PURPLE ANIMATION.mp4";
// import NavBar from '../NavBar/NavBar';

const Hero = () => {
    const herodetails = [
        { id: "1", type: "image", source: banner3, brand: "John Jacobs", heading: "New identity for a glassware brand" },
        { id: "2", type: "video", source: sampleVideo, brand: "Apple", heading: "Shaping a bold identity for iPhone." },
        { id: "3", type: "image", source: banner1, brand: "Bentley", heading: "Photoshoot for a car" }, // Replace image with video
    ];

    return (
        <div className='relative sm:w-full sm:h-96 md:h-fit'>
            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                showIndicators={false} // Hide pagination dots
                interval={5000} // Smooth transition
                transitionTime={500} // Smoother animation
                stopOnHover={false}
                swipeable={false}
            >
                {herodetails.map((hero) => (
                    <div key={hero.id} className='relative w-full h-[90vh]'>
                        {/* Conditionally render image or video */}
                        {hero.type === "image" ? (
                            <img className='w-full h-full object-cover' src={hero.source} alt={`slide ${hero.id}`} />
                        ) : (
                            <video
                                className='w-full h-full object-cover'
                                src={hero.source}
                                autoPlay
                                loop
                                muted
                            />
                        )}

                       {/* <div className="absolute top-0 left-0 w-full z-20 text-white">
                            <NavBar />
                        </div>*/}

                        {/* Keep the text aligned to the bottom-left */}
                        <div data-aos="fade-up" style={{ lineHeight: '1.3' }} className='absolute bottom-5 sm:bottom-10 left-0 w-full sm:space-y-4 space-y-2 sm:w-4/5 p-8 sm:p-6 md:w-3/5 2xl:w-5/12 md:p-8 lg:p-10 xl:p-16 text-white flex flex-col items-start justify-end'>
                            <h1 data-aos="fade-up" style={{ lineHeight: '1.3' }} className='font-Switzer-Regular text-lg sm:text-xl md:text-3xl lg:text-xl xl:text-xl 2xl:-lg text-left'>
                                {hero.brand}
                            </h1>
                            <h1 data-aos="fade-up" className='font-Switzer-Medium text-left uppercase text-2xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-4xl'>
                                {hero.heading}
                            </h1>
                            <Link to={'/project'}>
                                <button className='backdrop-blur-md bg-black/20 font-Switzer-Medium md:mt-4 rounded-lg h-8 px-6 text-sm'>
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