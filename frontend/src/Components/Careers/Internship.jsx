import React from 'react'
import employee from "../../assets/Images/employee.jpg"

const Internship = () => {
  return (
    <div className='mt-20'>
            <div className=' w-11/12  mx-auto space-y-4 md:space-y-0 md:flex md:space-x-4 lg:space-x-20'>
                <div className='h-119 xl:h-160 lg:w-1/2'>
                    <img src={employee} alt='' className='w-full h-full object-cover rounded-xl' />
                </div>
                <div className=' md:h-119 xl:h-160 lg:w-1/3 flex justify-center items-center'>
                    <div className='md:w-4/5 mx-auto '>
                        <p className='font-Switzer-Light text-gray3 text-sm lg:text-base'>Internship</p>
                        <h1 className='font-Switzer-Medium uppercase  text-2xl md:text-3xl '>Student Opportunities</h1>
                        <h3 className='font-Switzer-Light text-gray3 mt-4 text-sm xl:text-lg'>"Join our internship program to gain hands-on experience, work on real projects, and build a strong foundation for your career."</h3>
                        <button className='font-Switzer-Medium bg-gray mt-4 rounded-lg h-8 px-4 text-sm '>
                                <a href="/about">Apply Now</a>
                            </button>
                    </div>
                </div>


            </div>

        </div>
  )
}

export default Internship