import React from 'react'
import img1 from "../../assets/Images/home5.jpg"


const HomeHiring = () => {
  return (
    <div className='mt-28'>
            <div className='space-y-4 md:space-y-0 md:space-x-4'>
                <div className='h-130 md:h-119 lg:h-130 xl:h-160 relative'>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 rounded-xl space-y-2">
                        <p className="text-sm xl:text-lg font-Switzer-Medium">Work With Us</p>
                        <h2 className="text-2xl font-bold xl:text-4xl font-Switzer-Medium uppercase ">Let's Elevate your brand </h2>
                        <button  className='bg-gray1 font-Switzer-Medium text-xs mt-4 rounded-xl h-8 md:h-10 p-2 px-4'>Reach Out</button>
                    </div>
                    <img src={img1} alt='about' className='w-full h-full object-cover rounded-xl' />
                </div>
            </div>
        </div>
  )
}

export default HomeHiring