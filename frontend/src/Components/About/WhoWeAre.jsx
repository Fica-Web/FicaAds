import React, { useState } from 'react';
import whoWeAre2 from '../../assets/Images/who-we-are.jpg';

const WhoWeAre = () => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className='w-11/12 mx-auto mt-12'>
            <div className='my-12'>
                <div className='flex lg:flex-row flex-col gap-6 lg:gap-16'>
                    <div className='lg:w-5/12 flex lg:justify-start justify-center'>
                        <img
                            src={whoWeAre2}
                            alt="who we are image"
                            className='object-cover max-h-[90vh] w-full rounded-2xl'
                        />
                    </div>

                    <div className='lg:w-7/12 flex flex-col justify-center gap-8 lg:text-lg '>
                        {!showMore ? (
                            <>{/* Display first two paragraphs */}
                                <p className=''>
                                    Since 2021, Fica Ad Innovations has proudly stood as the best digital marketing agency in Dubai, pushing boundaries and reimagining what advertising can achieve. Born in Dubai and now thriving across the UAE, India, Turkey, and Kuwait, we’re a global team with a passion for turning creative ideas into real-world results. Our expertise spans social media marketing (SMM), search engine marketing (SEM), SEO, branding & design, video production, web design & development, and performance marketing—all tailored to help brands shine in crowded markets.
                                </p>
                                <p>
                                    What makes us the best digital marketing agency in Dubai? It’s simple: we combine artistry with analytics. Whether we’re launching a viral Instagram campaign, optimizing Google Ads for razor-sharp targeting, or building websites that convert, our focus is always on delivering growth. Our team—a mix of storytellers, data nerds, and tech wizards—uses the latest tools and trends to ensure your brand doesn’t just compete but dominates. From sleek video productions that stop scrolls to SEO strategies that put you on page one, we’re here to make your audience take notice.
                                </p>
                            </>
                        ) : (
                            <>
                                {/* Conditionally display the remaining paragraphs */}
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
                            className='text-black font-semibold hover:underline self-start'
                        >
                            {showMore ? 'Read Less' : 'Read More'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;