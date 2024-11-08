import React from 'react'
import AboutBanner from '../Components/About/AboutBanner'
import AboutHero from '../Components/About/AboutHero'
import Story from '../Components/About/Story'
import Podcast from '../Components/About/Podcast'
import AboutHiring from '../Components/About/AboutHiring'

const AboutPage = () => {
  return (
    <div>
      <AboutBanner/>
      <AboutHero/>
      <Story />
      <Podcast />
      <AboutHiring />
    </div>
  )
}

export default AboutPage