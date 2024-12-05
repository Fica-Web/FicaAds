import React from 'react'
import { useEffect } from 'react';
import AboutBanner from '../Components/About/AboutBanner'
import AboutHero from '../Components/About/AboutHero'
import Story from '../Components/About/Story'
import Podcast from '../Components/About/Podcast'
import AboutHiring from '../Components/About/AboutHiring'
import NavBar from '../Components/NavBar/NavBar'

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Resets scroll to the top of the page
  }, []);
  return (
    <div>
      <NavBar/>
      <AboutBanner/>
      <AboutHero/>
      <Story />
      <Podcast />
      <AboutHiring />
    </div>
  )
}

export default AboutPage