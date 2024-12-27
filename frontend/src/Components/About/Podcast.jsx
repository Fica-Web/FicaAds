import React from 'react'
import img1 from '../../assets/Images/Podcast.jpg'

const Podcast = () => {
  return (
    <div className='mt-40'>
        <div className='bg-black space-y-4 lg:flex xl:h-144 text-white'>
            <div className='w-11/12 space-y-2 mx-auto pt-10 xl:space-y-4 lg:w-1/2 lg:pt-20  xl:w-1/3 xl:pt-32'>
                <p className='font-Switzer-Medium '>Recent Podcast</p>
                <h1 className='font-Switzer-Medium text-3xl xl:text-4xl '>How to create a mood board for your project</h1>
                <p className='text-sm md:text-base xl:text-lg '>In this podcast we reveal all the tips and tricks on how to create the perfect mood-board for your branding 
                    projet.From refences to website you will learn everything that you need for your next project.
                </p>
                <p className=''>1 hour 25 min</p>
                <button className='bg-white text-black font-Switzer-Medium my-4 rounded-xl h-10 p-2'>Listen On Spotify</button>
            </div>
            <div className='w-11/12 h-96 mx-auto pb-10 xl:h-124 lg:w-1/3 lg:pb-8 xl:pb-0 xl:pt-12' >
                <img src={img1} alt='podcast' className='w-full h-full object-cover rounded-xl' />
            </div>
        </div>
    </div>
  )
}

export default Podcast