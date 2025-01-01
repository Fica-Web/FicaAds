import React from 'react'

import creative from "../../assets/Images/Creative1.webp"
import { Link } from 'react-router-dom'

const CreateiveJourney = () => {
    return (
        <div className='my-16 lg:my-20 '>
            <div className=' w-11/12  mx-auto space-y-4 md:space-y-0 md:flex md:space-x-4 lg:space-x-20'>
                <div className='h-119 xl:h-160 lg:w-1/2'>
                    <img src={creative} alt='' className='w-full h-full object-cover rounded-xl' />
                </div>
                <div className=' md:h-119 xl:h-160 lg:w-1/3 flex justify-center items-center'>
                    <div className='md:w-4/5 mx-auto '>
                        <p className='font-Switzer-Light text-gray3 text-sm lg:text-base'>Who we Are</p>
                        <h1 className='font-Switzer-Medium uppercase  text-2xl md:text-3xl '>A Creative journey</h1>
                        <h3 className='font-Switzer-Light text-gray3 mt-4 text-sm xl:text-lg'>A dynamic space where imagination knows no bounds and experimentation is celebrated</h3>
                        <button className='font-Switzer-Medium backdrop-blur-md bg-black/20 mt-4 rounded-lg h-8 px-4 text-sm '>
                                <Link to='/about'>About Us</Link>
                            </button>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default CreateiveJourney