import React from 'react'
import { useEffect } from 'react';
import ContactHero from '../Components/Contact/ContactHero'
import NavBar from '../Components/NavBar/NavBar'

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Resets scroll to the top of the page
  }, []);
  return (
    <div className=''>
        <NavBar />
        <ContactHero />
    </div>
  )
}

export default ContactPage