import React from 'react'
import img1 from "../../assets/Images/join-our-team.webp"
import { Link } from 'react-router-dom'

const AboutHiring = () => {
    return (
        <div className='mt-40'>
            <div className='space-y-4 md:space-y-0 md:space-x-4'>
                <div className='h-130 md:h-119 lg:h-160 xl:h-full relative'>
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-4 rounded-xl space-y-2">
                        <p className="text-sm xl:text-lg font-Switzer-Medium">Be A Part of Fica</p>
                        <h2 className="text-2xl font-bold xl:text-4xl font-Switzer-Medium uppercase ">Join Our Team</h2>
                        <button className='backdrop-blur-md bg-black/20 font-Switzer-Medium text-xs mt-4 rounded-xl h-8 md:h-10 p-2 px-4'><Link to={'/careers'}>Open Positions</Link></button>
                    </div>
                    <img src={img1} alt='about' className='w-full h-full object-cover ' />
                    
                </div>
            </div>
        </div>

    )
}

export default AboutHiring