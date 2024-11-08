import React from 'react'
import img3 from "../../assets/Images/product1.jpeg";
import employee from "../../assets/Images/employee.jpg"

const CreateiveJourney = () => {
    return (
        <div className='mt-10'>
            <div className='w-11/12  mx-auto space-y-4 md:space-y-0 md:flex md:space-x-4'>
                <div className='h-119 xl:h-160 lg:w-1/2'>
                    <img src={employee} alt='' className='w-full h-full object-cover rounded-xl' />
                </div>
                <div className='md:h-119 xl:h-160 lg:w-1/2 flex justify-center items-center'>
                    <div className='md:w-4/5 mx-auto '>
                        <p className='font-Switzer-Light text-gray3 text-sm xl:text-lg'>Who we Are</p>
                        <h1 className='font-Switzer-Medium uppercase text-2xl md:text-4xl '>A Creative journey</h1>
                        <h3 className='font-Switzer-Light text-gray3 text-sm xl:text-lg'>A dynamic space where imagination knows no bounds and experimentation is celebrated</h3>
                        <button className='font-Switzer-Medium bg-gray mt-4 text-sm lg:mt-6 lg:px-2 rounded-xl px-2 py-2'>
                                <a href="/about">About Us</a>
                            </button>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default CreateiveJourney