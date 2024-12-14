import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=' md:h-96 bg-black text-white'>
      <div className='space-y-6 md:space-y-0 md:flex '>
        <div className='w-11/12 mx-auto md:w-1/2 pt-4 md:pl-10 text-white'>
          <h2>Fica</h2>
          <p className='mt-2 font-Switzer-Medium text-sm lg:mt-10'>
            Subscribe to our newsletter<br />and stay in touch with us
          </p>

          <div className='flex items-center mt-4 bg-gray4 rounded-lg w-full md:w-11/12 xl:w-1/2'>
            <input
              type='text'
              placeholder='hello@ficaads.com'
              className='bg-transparent rounded-sm py-2 px-4 flex-grow outline-none text-white placeholder-gray-400'
            />
            <button className='bg-gray1 mr-0.5 px-4 py-2 rounded-lg font-Switzer-Medium text-sm '>
              Submit
            </button>
            
          </div>
        </div>

        <div className='md:w-1/2  space-y-8 pt-4 md:flex md:space-y-0'>
          <div className='w-11/12 mx-auto '>
            <h5 className='font-Switzer-Medium text-xs text-gray3 xl:text-sm'>Sitemap</h5>
            <h3 className='uppercase mt-6 font-Switzer-Medium text-sm xl:text-base'><Link to={"/"}>Home</Link></h3>
            <h3 className='uppercase font-Switzer-Medium text-sm xl:text-base'><Link to={'/about'}>About</Link></h3>
            <h3 className='uppercase font-Switzer-Medium text-sm xl:text-base'><Link to={'/project'}>Projects</Link></h3>
            <h3 className='uppercase font-Switzer-Medium text-sm xl:text-base'><Link to={'/news'}>News</Link></h3>
            <h3 className='uppercase font-Switzer-Medium text-sm xl:text-base'><Link to={'/careers'}>Careers</Link></h3>
            <h3 className='uppercase font-Switzer-Medium text-sm xl:text-base'><Link to={'/contact'}>Contact</Link></h3>
            <h2 className='font-Switzer-Medium text-sm text-gray3 lg:mt-44 xl:mt-36'><Link to={"/privacypolicy"}>Privacy & Policy</Link></h2>
          </div>
          <div className='w-11/12 mx-auto'>
            <h5 className='font-Switzer-Medium text-xs  text-gray3 xl:text-sm'>Socials</h5>
            <h4 className='mt-6'><a
              href="https://www.facebook.com/ficaads?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className=' uppercase font-Switzer-Medium text-sm mt-2 text-white  xl:text-base hover:text-golden cursor-pointer transition-colors duration-300'
            >
              Facebook
            </a></h4>

            <h4 ><a
              href="https://www.instagram.com/ficaads?igsh=MTd2bDF5NXJraHF5MA=="
              target="_blank"
              rel="noopener noreferrer"
              className='uppercase font-Switzer-Medium text-sm text-white font-Marcellus xl:text-base hover:text-golden cursor-pointer transition-colors duration-300'
            >
              Instagram
            </a></h4>
            <h4 ><a
              href="https://www.linkedin.com/company/ficaads/"
              target="_blank"
              rel="noopener noreferrer"
              className='uppercase font-Switzer-Medium text-sm text-white font-Marcellus xl:text-base hover:text-golden cursor-pointer transition-colors duration-300'
            >
              linkedin
            </a></h4>
            <h4 ><a
              href="https://www.linkedin.com/company/ficaads/"
              target="_blank"
              rel="noopener noreferrer"
              className='uppercase font-Switzer-Medium text-sm text-white font-Marcellus xl:text-base hover:text-golden cursor-pointer transition-colors duration-300'
            >
              x.com
            </a></h4>
            <h2 className='font-Switzer-Medium text-sm text-gray3 lg:mt-48 xl:mt-48'>Made by Fica</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer