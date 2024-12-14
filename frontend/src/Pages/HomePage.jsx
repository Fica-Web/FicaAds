import React from 'react'
import CreateiveJourney from '../Components/Home/CreateiveJourney'
import HomeNews from '../Components/Home/HomeNews'
import Hero from '../Components/Home/Hero'
import Behaind from '../Components/Home/Behaind'
import HomeHiring from '../Components/Home/HomeHiring'
import NavBar from '../Components/NavBar/NavBar'
import Projects from '../Components/Project/Projects'

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Projects showFullContent={false} limit={3} />
       <CreateiveJourney />

       <HomeNews />

       <Behaind />

       

       <HomeHiring />
    </div>
  )
}

export default HomePage