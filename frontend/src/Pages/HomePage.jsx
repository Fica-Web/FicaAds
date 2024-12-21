import React from 'react'
import CreateiveJourney from '../Components/Home/CreateiveJourney'
import HomeNews from '../Components/Home/HomeNews'
import Hero from '../Components/Home/Hero'
import Behaind from '../Components/Home/Behaind'
import HomeHiring from '../Components/Home/HomeHiring'
import NavBar from '../Components/NavBar/NavBar'
import Projects from '../Components/Project/Projects';
import LogoMovementAnimation from '../Components/Home/LogoMovementAnimation'

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Projects showFullContent={false} limit={3} showbutton={true}/>
       <CreateiveJourney />

       <HomeNews />

       <Behaind />

       <div className='mt-20'>
        <LogoMovementAnimation data={[1, 2, 3, 4, 5]} />
        <LogoMovementAnimation data={[1, 2, 3, 4, 5]} />
       </div>

       <HomeHiring />
    </div>
  )
}

export default HomePage