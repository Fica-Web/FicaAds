import React, { useState } from 'react';
import whoWeAre1 from '../../assets/Images/who-we-are-1.jpg';
import whoWeAre2 from '../../assets/Images/who-we-are-2.jpg';

const WhoWeAre = () => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className='w-11/12 lg:w-10/12 mx-auto mt-28'>
            <div className='relative'>
                <h2 className='lg:text-6xl sm:text-5xl text-4xl text font-bold text-start lg:text-center lg:absolute top-14 right-0 left-0 uppercase z-20 font-serif tracking-wider'>
                    Who We Are
                </h2>

                <div className='sm:h-[300px] sm:w-[400px] w-11/12 h-[230px] bg-blue-300 absolute lg:-top-10 top-24 lg:left-0 sm:left-[calc(50%-40px)] transform sm:-translate-x-1/2 lg:translate-x-0 -z-10'></div>

                <div className='lg:w-5/12 lg:px-10 lg:mt-0 mt-20 lg:mx-0 flex justify-end sm:justify-center lg:justify-start'>
                    <img
                        src={whoWeAre1}
                        alt=""
                        className='object-cover -z-10 sm:h-[300px] sm:w-[400px] w-11/12 h-[230px] lg:mt-0 mt-2'
                    />
                </div> 
            </div>

            <div className='my-12 lg:px-12 lg:mt-20'>
                <div className='flex lg:flex-row flex-col gap-6'>
                    <div className='lg:w-1/2 flex flex-col justify-center gap-8 lg:text-lg'>
                        {/* Display first two paragraphs */}
                        <p>
                            Since 2021, Fica Ad Innovations has proudly stood as the best digital marketing agency in Dubai, pushing boundaries and reimagining what advertising can achieve. Born in Dubai and now thriving across the UAE, India, Turkey, and Kuwait, we’re a global team with a passion for turning creative ideas into real-world results. Our expertise spans social media marketing (SMM), search engine marketing (SEM), SEO, branding & design, video production, web design & development, and performance marketing—all tailored to help brands shine in crowded markets.
                        </p>
                        <p>
                            What makes us the best digital marketing agency in Dubai? It’s simple: we combine artistry with analytics. Whether we’re launching a viral Instagram campaign, optimizing Google Ads for razor-sharp targeting, or building websites that convert, our focus is always on delivering growth. Our team—a mix of storytellers, data nerds, and tech wizards—uses the latest tools and trends to ensure your brand doesn’t just compete but dominates. From sleek video productions that stop scrolls to SEO strategies that put you on page one, we’re here to make your audience take notice.
                        </p>

                        {/* Conditionally display the remaining paragraphs */}
                        {showMore && (
                            <>
                                <p>
                                    But we’re more than just a Dubai-based agency. We’re your partners in evolution. The digital world moves fast, and so do we. While others play catch-up, we’re already testing new platforms, refining algorithms, and brainstorming campaigns that resonate today. Whether you’re a startup aiming to disrupt or an established brand ready to reinvent, we adapt to your goals, not the other way around.
                                </p>
                                <p>
                                    Choosing the best digital marketing agency in Dubai means trusting a team that’s as ambitious as you are. We’ve helped luxury brands craft unforgettable identities, scaled e-commerce giants with performance marketing, and turned local businesses into regional leaders. Our secret? We listen first, strategize second, and execute with precision—every time.
                                </p>
                                <p>
                                    At Fica Ad Innovations, we don’t just chase trends; we set them. Let’s build something extraordinary together and prove why Dubai’s best digital marketing agency is also the world’s best-kept secret.
                                </p>
                            </>
                        )}

                        {/* Read More/Read Less Button */}
                        <button
                            onClick={toggleShowMore}
                            className='text-blue-500 font-semibold hover:underline self-start'
                        >
                            {showMore ? 'Read Less' : 'Read More'}
                        </button>
                    </div>

                    <div className='lg:w-1/2 lg:-mt-28 mt-8 flex lg:justify-end justify-center'>
                        <img
                            src={whoWeAre2}
                            alt=""
                            className='object-cover max-h-[90vh]'
                        />
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;