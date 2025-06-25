import React from 'react';
import { Helmet } from 'react-helmet-async'
import CreateiveJourney from '../Components/Home/CreateiveJourney'
import HomeNews from '../Components/Home/HomeNews'
import Hero from '../Components/Home/Hero'
import Behaind from '../Components/Home/Behaind'
import HomeHiring from '../Components/Home/HomeHiring'
import Projects from '../Components/Project/Projects';
import LogoMovementAnimation from '../Components/Home/LogoMovementAnimation';
import Services from '../Components/Home/Services';
import RelatedVideos from '../Components/Home/RelatedVideos';
import BlogListing from './BlogListing';
import FAQ from '../Components/Home/FAQ';
import client1 from '../assets/Images/clients-01.png';
import client2 from '../assets/Images/clients-02.png';
import client3 from '../assets/Images/clients-03.png';
import client4 from '../assets/Images/clients-04.png';
import client5 from '../assets/Images/clients-05.png';
import client6 from '../assets/Images/clients-06.png';
import client7 from '../assets/Images/clients-07.png';
import client8 from '../assets/Images/clients-08.png';
import client9 from '../assets/Images/clients-09.png';
import client10 from '../assets/Images/clients-10.png';
import client11 from '../assets/Images/clients-11.png';
import client12 from '../assets/Images/clients-12.png';
import client13 from '../assets/Images/clients-13.png';
import client14 from '../assets/Images/clients-14.png';
import client15 from '../assets/Images/clients-15.png';
import client16 from '../assets/Images/clients-16.png';
import client17 from '../assets/Images/clients-17.png';

const HomePage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "About Page",
    "url": "https://ficaads.com",
    "description": "Fica Ad Innovations specializes in innovative marketing strategies for global brands.",
    "publisher": {
      "@type": "Organization",
      "name": "Fica Ad Innovations",
    }
  };
  return (
    <div>
      <Helmet>
        <title>Fica Ad Innovations - Home</title>
        <meta
          name="description"
          content="Discover Fica Ad Innovations - delivering cutting-edge marketing solutions for brands worldwide."
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Hero />
      <Projects showFullContent={false} limit={3} showbutton={true} />
      <CreateiveJourney />

     

      <Services />

      <Behaind />

      <div className="mt-[95px] md:mt-[130px] ">
        <div className='lg:flex justify-between items-center lg:px-16 font-Switzer-Regular uppercase text-center'>
          <div className='flex justify-center'>
            <h3 className='lg:text-5xl sm:text-7xl text-5xl font-semibold my-10 lg:max-w-full sm:max-w-[500px]'>
              CLIENTS WE WORK WITH
            </h3>
          </div>
          <div className='flex justify-center my-5'>
            <h4 className='text-center leading-4 max-w-[400px] lg:max-w-[240px] mx-5 sm:mx-0 lg:text-right'>
              we can't wait to show you what we can do for you and your brand
            </h4>
          </div>
        </div>

        <div className='hidden sm:block'>
          {/* First animation: Left to Right */}
          <LogoMovementAnimation
            data={[client1, client2, client3, client4, client5, client6, client7, client8, client9]}
            direction="left"
          />

          {/* Second animation: Right to Left */}
          <LogoMovementAnimation
            data={[client10, client11, client12, client13, client14, client15, client16, client17]}
            direction="right"
          />
        </div>

        {/* On different  */}
        <div className='block sm:hidden'>
          {/* First animation: Left to Right */}
          <LogoMovementAnimation
            data={[client1, client2, client3, client4, client5, client6]}
            direction="left"
          />

          {/* Second animation: Right to Left */}
          <LogoMovementAnimation
            data={[client7, client8, client9, client10, client11]}
            direction="right"
          />

          {/* Third animation: Left to Right */}
          <LogoMovementAnimation
            data={[client12, client13, client14, client15, client16, client17]}
            direction="left"
          />
        </div>
      </div>

      {/* <RelatedVideos /> */}
      {/* <BlogListing /> */}
       <HomeNews />
      <FAQ />
      {/* <HomeHiring /> */}
    </div>
  )
}

export default HomePage