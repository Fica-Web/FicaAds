import React from 'react'
import CreateiveJourney from '../Components/Home/CreateiveJourney'
import HomeNews from '../Components/Home/HomeNews'
import Hero from '../Components/Home/Hero'
import Behaind from '../Components/Home/Behaind'
import HomeHiring from '../Components/Home/HomeHiring'
import NavBar from '../Components/NavBar/NavBar'
import Projects from '../Components/Project/Projects';
import LogoMovementAnimation from '../Components/Home/LogoMovementAnimation';
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
  return (
    <div>
      <NavBar />
      <Hero />
      <Projects showFullContent={false} limit={3} showbutton={true}/>
       <CreateiveJourney />

       <HomeNews />

       <Behaind />

       <div className='mt-20'>
        <LogoMovementAnimation data={[client1, client2, client3, client4, client5, client6, client7, client8, client9]} />
        <LogoMovementAnimation data={[client10, client11, client12, client13, client14, client15, client16, client17]} />
        {/* <LogoMovementAnimation data={[client10, client11, client12, client13, client14, client15, client16, client17]} /> */}
       </div>

       <HomeHiring />
    </div>
  )
}

export default HomePage