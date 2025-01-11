import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import CareerHero from '../Components/Careers/CareerHero'
import CraeerStory from '../Components/Careers/CraeerStory'
import CreerConnect from '../Components/Careers/CreerConnect'
import Internship from '../Components/Careers/Internship'
import JobListings from '../Components/Careers/JobListings'


const CareersPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      const schemaData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Careers - Fica Ad Innovations",
        "url": "https://ficaads.com/careers",
        "description": "Explore career opportunities, internships, and job listings at Fica Ad Innovations. Join our innovative team and shape the future of advertising.",
        "publisher": {
          "@type": "Organization",
          "name": "Fica Ad Innovations",
          "url": "https://ficaads.com",
        },
      };
  return (
    <div>
        <Helmet>
          <title>Careers - Fica Ad Innovations</title>
          <meta
            name="description"
            content="Explore career opportunities, internships, and job listings at Fica Ad Innovations. Join our innovative team and shape the future of advertising."
          />
          <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        </Helmet>
        <CareerHero/>
        <CraeerStory/>
        <JobListings/>
        <Internship/>
        <CreerConnect/>
    </div>
  )
}

export default CareersPage