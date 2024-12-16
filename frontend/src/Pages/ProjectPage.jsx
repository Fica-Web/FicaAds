import React from 'react'
import { useEffect } from 'react';
import Projects from '../Components/Project/Projects'
import NavBar from '../Components/NavBar/NavBar'

const ProjectPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Resets scroll to the top of the page
  }, []);
  return (
    <div>
      <NavBar/>
      <Projects showFullContent={true} showbutton={false} /> 
    </div>
  )
}

export default ProjectPage