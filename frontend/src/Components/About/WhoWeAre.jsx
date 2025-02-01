import React from 'react';
import whoWeAre1 from '../../assets/Images/who-we-are-1.jpg';
import whoWeAre2 from '../../assets/Images/who-we-are-2.jpg';

const WhoWeAre = () => {
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto mt-28'>
            <div className='relative'>
                <h2 className='lg:text-6xl sm:text-5xl text-4xl text font-bold text-start lg:text-center lg:absolute top-14 right-0 left-0 uppercase z-20 font-serif'>
                    Who We Are
                </h2>

                <div className='sm:h-[300px] sm:w-[400px] w-11/12 h-[230px] bg-blue-300 absolute lg:-top-10 top-24 lg:left-0 sm:left-[calc(50%-40px)] transform sm:-translate-x-1/2 lg:translate-x-0 -z-10  '></div>

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
                    <div className='lg::w-1/2 flex flex-col justify-center gap-8 lg:text-lg'>
                        <p>
                            Since 2021, Fica Ad Innovations has proudly stood as the best digital marketing agency in Dubai, pushing boundaries and reimagining what advertising can achieve. Born in Dubai and now thriving across the UAE, India, Turkey, and Kuwait, we’re a global team with a passion for turning creative ideas into real-world results. Our expertise spans social media marketing (SMM), search engine marketing (SEM), SEO, branding & design, video production, web design & development, and performance marketing—all tailored to help brands shine in crowded markets.
                        </p>
                        <p>
                            What makes us the best digital marketing agency in Dubai? It’s simple: we combine artistry with analytics. Whether we’re launching a viral Instagram campaign, optimizing Google Ads for razor-sharp targeting, or building websites that convert, our focus is always on delivering growth. Our team—a mix of storytellers, data nerds, and tech wizards—uses the latest tools and trends to ensure your brand doesn’t just compete but dominates. From sleek video productions that stop scrolls to SEO strategies that put you on page one, we’re here to make your audience take notice.
                        </p>
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
    )
}

export default WhoWeAre
