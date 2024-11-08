import React from 'react'
import HomeProject from '../Components/Home/HomeProject'
import CreateiveJourney from '../Components/Home/CreateiveJourney'
import HomeNews from '../Components/Home/HomeNews'
import Hero from '../Components/Home/Hero'
import Behaind from '../Components/Home/Behaind'
import HomeHiring from '../Components/Home/HomeHiring'


const HomePage = () => {
  return (
    <div>
      <Hero />
       <HomeProject />
       <CreateiveJourney />

       <HomeNews />

       <Behaind />

       <HomeHiring />
    </div>
  )
}

export default HomePage