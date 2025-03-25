import React from 'react'
import news1 from "../../assets/Images/Interactive-ad.webp";

const NewsHero = () => {
  return (
    <div className='mt-10 lg:mt-32'>
        <div className='bg-black space-y-6 lg:flex xl:h-144'>
        <div className='w-11/12 space-y-2 mx-auto pt-10 xl:space-y-4 lg:w-1/2 lg:pt-10  xl:w-1/3 xl:pt-32'>
          <h1 className='font-Switzer-Medium text-3xl xl:text-4xl text-white'>The Future of Interactive Advertising</h1>
          <p className='text-sm md:text-base xl:text-base text-white'>Unlock the power of collaboration as we explore the transformative potential of working together. In this article,
            we highlight the magic that happens when diverse talents unite to tackle creative challenges.
            From interdisciplinary collaboration to cross-cultural exchanges,
            we celebrate the beauty of teamwork and the synergy that arises when ideas collide.Join us as we
            share stories of successful collaborations and explore the profound impact of collective creativity on the design landscape.
          </p>
        </div>
        <div className='w-11/12 h-96 mx-auto pb-10 xl:h-124 lg:w-1/3 lg:pb-8 xl:pb-0 xl:pt-12' >
          <img src={news1} alt='podcast' className='w-full h-full object-cover rounded-xl' />
        </div>
      </div>
    </div>
  )
}

export default NewsHero