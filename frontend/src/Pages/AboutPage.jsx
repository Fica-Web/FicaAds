import React from 'react'
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AboutBanner from '../Components/About/AboutBanner'
import AboutHero from '../Components/About/AboutHero'
import Story from '../Components/About/Story'
import Podcast from '../Components/About/Podcast'
import AboutHiring from '../Components/About/AboutHiring'
import NavBar from '../Components/NavBar/NavBar'
import { Team } from '../Components/About/Team';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Resets scroll to the top of the page
  }, []);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "About Us - Fica Ad Innovations",
    "url": "https://ficaads.com/about",
    "description": "Learn about Fica Ad Innovations, our journey, team, podcast, and how we're transforming the advertising industry.",
    "publisher": {
      "@type": "Organization",
      "name": "Fica Ad Innovations",
    },
    "mainEntity": {
      "@type": "Organization",
      "name": "Fica Ad Innovations",
      "description": "A leading advertising and marketing agency specializing in innovative solutions for global brands.",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "email": "hello@ficaads.com",
      },
      "sameAs": [
        "https://www.facebook.com/ficaads?mibextid=ZbWKwL",
        "https://www.instagram.com/ficaads?igsh=MTd2bDF5NXJraHF5MA==",
        "https://www.linkedin.com/company/ficaads"
      ]
    },
  };

  return (
    <div>
      <Helmet>
        <title>About Us - Fica Ad Innovations</title>
        <meta
          name="description"
          content="Learn about Fica Ad Innovations, our journey, team, podcast, and how we're transforming the advertising industry."
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <NavBar/>
      <AboutBanner/>
      <AboutHero/>
      <Story />
      <Team />
      <Podcast />
      <AboutHiring />
    </div>
  )
}

export default AboutPage