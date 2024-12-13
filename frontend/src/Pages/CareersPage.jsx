import React from 'react'
import { useEffect } from 'react';
import CareerHero from '../Components/Careers/CareerHero'
import CraeerStory from '../Components/Careers/CraeerStory'
import CreerConnect from '../Components/Careers/CreerConnect'
import Internship from '../Components/Careers/Internship'
import JobListings from '../Components/Careers/JobListings'


const CareersPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
        <CareerHero/>
        <CraeerStory/>
        <JobListings/>
        <Internship/>
        <CreerConnect/>
    </div>
  )
}

export default CareersPage