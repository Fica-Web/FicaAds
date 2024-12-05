import React from 'react'
import conn from "../../assets/Images/connect.jpeg"
import Behaind from '../Home/Behaind'

const ContactHero = () => {
    return (
        <div className='mt-16 '>
            <div className='bg-black'>
                <div className=' w-11/12 mx-auto  h-56 pt-24 space-y-2 lg:h-64 xl:h-72 xl:pt-28'>
                    <p className='font-Switzer-Light text-gray'>Get In Touch</p>
                    <h1 className='font-Switzer-Medium uppercase text-white text-3xl md:text-4xl lg:text-5xl'>Lets start the<br></br> conversation.</h1>
                </div>
                <div className='h-96'>
                    <img src={conn} alt='' className='w-full h-full' />
                </div>
                <div className='w-11/12 mt-10 sm:h-64 sm:pt-10 mx-auto   space-y-10 sm:space-y-0 sm:flex sm:space-x-10'>
                    <div className=' sm:w-1/3'>
                        <h1 className='font-Switzer-Medium text-3xl text-white lg:text-4xl xl:text-4xl'>Dubai</h1>
                        <h2 className='mt-4 font-Switzer-Regular text-white lg:text-lg xl:text-xl'>050 7878658</h2>
                        <h2 className='font-Switzer-Regular text-white lg:text-lg xl:text-xl'>hello@ficaads.com</h2>
                        <h3 className='mt-2 font-Switzer-Regular text-gray lg:text-lg xl:text-xl'>Al Naha Dubai-UAE</h3>
                    </div>
                    <div className='sm:w-1/3'>
                        <h1 className='font-Switzer-Medium text-3xl text-white lg:text-4xl xl:text-4xl'>Calicut</h1>
                        <h2 className='mt-4 font-Switzer-Regular text-white lg:text-lg xl:text-xl'>+91 8086555918</h2>
                        <h2 className='font-Switzer-Regular text-white lg:text-lg xl:text-xl'>hello@ficaads.com</h2>
                        <h3 className='mt-2 font-Switzer-Regular text-gray lg:text-lg xl:text-xl'>UA Building,Kattukulagara - Pottamal , Calicut</h3>
                    </div>
                    <div className=' sm:w-1/3 lg:pl-20'>
                        <h1 className='font-Switzer-Medium text-white text-3xl lg:text-4xl xl:text-4xl'>Turkiye</h1>
                        <h2 className='mt-4 font-Switzer-Regular text-white lg:text-lg xl:text-xl'>hello@ficaads.com</h2>
                        <h3 className='md:mt-8 font-Switzer-Regular text-gray lg:text-lg xl:text-xl'>Mecidiyekoy - Sisli , Istanbul , Turkiye</h3>
                    </div>
                </div>
                <div className='mt-10 space-y-6 h-96 lg:mt-20 lg:w-11/12 lg:mx-auto lg:flex lg:space-y-0 xl:mt-56'>
                    <div className='w-5/6 mx-auto'>
                        <h1 className='font-Switzer-Medium uppercase text-white text-3xl md:text-4xl lg:text-2xl'>SEND A MESSAGE</h1>
                    </div>
                    <div className="flex flex-col space-y-4 w-5/6  mx-auto md:w-2/5">
                        <input type="text" placeholder="Name" className='rounded-lg h-10 bg-gray1 xl:h-10 placeholder:xl:text-lg placeholder:pl-4' />
                        <input type="text" placeholder="Email" className='rounded-lg h-10 bg-gray1 xl:h-10 placeholder:xl:text-lg placeholder:pl-4' />
                        <input type="number" placeholder="Phone" className='rounded-lg h-10 bg-gray1 xl:h-10 placeholder:xl:text-lg placeholder:pl-4' />
                        <textarea
                            className="h-28 rounded-lg bg-gray1 placeholder:xl:text-lg placeholder:pl-4"
                            placeholder="Message"
                            >
                        </textarea>
                        <button className='bg-gray1 text-white rounded-lg h-10 font-Switzer-Regular xl:h-10 placeholder:xl:text-lg placeholder:pl-4'>Send Message</button>
                    </div>

                </div>
                <div className='lg:h-130 xl:h-144 lg:mt-56'>
                <Behaind />
                </div>

            

               
            </div>
        </div>
    )
}

export default ContactHero