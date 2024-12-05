import React from 'react'
import img1 from "../../assets/Images/Behind1.jpeg"
import img2 from "../../assets/Images/career1.jpeg"
import { Link } from 'react-router-dom';


const Behaind = () => {
    return (
        <div className='mt-10 '>
            <div className=' w-11/12 mx-auto space-y-4 md:flex md:space-y-0  md:space-x-4 lg:space-x-4 lg:flex xl:space-x-2'>
                <div className=' relative h-96 lg:w-3/5 lg:h-119 xl:h-128'>
                    <img src={img1} about='' className='w-full h-full rounded-xl' />
                    <div className='absolute   bottom-0 left-0 w-full sm:w-4/5 p-4 sm:p-6  lg:p-10 xl:p-12 text-white flex flex-col items-start justify-end'>
                        <h1 data-aos="fade-up" style={{ lineHeight: '1.3' }} className='uppercase text-2xl sm:text-2xl   xl:text-3xl font-Switzer-Medium'>
                            Behind The studio
                        </h1>
                        <p data-aos="fade-up" style={{ lineHeight: '1.3' }} className='text-base    xl:text-xl font-Switzer-Regular mt-2'>
                            A dynamic space where imagination knows no bounds and experimentation is celebrated
                        </p>
                        <button className=' bg-gray1 font-Switzer-Medium mt-4 rounded-lg h-10 px-6 text-sm'>
                        <Link to={'/contact'}>About us</Link>
                        </button>
                    </div>
                </div>
                <div className=' relative h-96   lg:w-2/5 lg:h-119 xl:h-128'>
                    <img src={img1} about='' className='w-full h-full rounded-xl' />
                    <div className='absolute   bottom-0 left-0 w-full sm:w-4/5 p-4 sm:p-6 lg:w-full lg:p-8 xl:p-12 text-white flex flex-col items-start justify-end'>
                    <h1 data-aos="fade-up" style={{ lineHeight: '1.3' }} className='uppercase text-2xl sm:text-2xl xl:text-3xl font-Switzer-Medium'>
                            Join The Team
                        </h1>
                        <p data-aos="fade-up" style={{ lineHeight: '1.3' }} className='text-base  xl:text-xl  font-Switzer-Regular mt-2'>
                            A collective of visionary creators dedicated to shaping the future through design
                        </p>
                        <button className=' bg-gray1 font-Switzer-Medium mt-4 rounded-lg h-8 md:h-10 px-6 text-sm'>
                        <Link to={'/about'}>Careers</Link>
                        </button>
                    </div>
                </div>
                
               
            </div>

        </div>
    )
}

export default Behaind