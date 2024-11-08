import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectedProject, setProjects } from '../../Reducer/projectSlice';

import img3 from "../../assets/Images/product1.jpeg";
import project1 from "../../assets/Images/project1.jpeg";
import project2 from "../../assets/Images/project2.jpeg"

const Projects = () => {
  const projects = useSelector((state) => state.projects.projects);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchedProjects = [
      { id: 1, image: project1, image2: img3, image3: img3, image4: img3, image5: img3, year: "2024", title:"Product", name: 'digital', description: "The clients goal was to create  a brand identity that would resonate with enironmentally conscious consumers and help position their business as avleader in sustainable practices. Objective included increasing brand awareness and driving customer engagement.",description1: "The clients goal was to create  a brand identity that would resonate with enironmentally conscious consumers and help position their business as avleader in sustainable practices. Objective included increasing brand awareness and driving customer engagement.", feedback:"Our eco brand case study shows that combining product and brand expertise can solve problems, tell stories, and create exceptional experience.",founder:"John Jone" },
      { id: 2, image: project2, image2: img3, image3: img3, image4: img3, image5: img3, year: "2024", title:"Ice cream branding", name: 'Ammul  Ice cream', description: "The clients goal was to create  a brand identity that would resonate with enironmentally conscious consumers and help position their business as avleader in sustainable practices. Objective included increasing brand awareness and driving customer engagement.",description1: "The clients goal was to create  a brand identity that would resonate with enironmentally conscious consumers and help position their business as avleader in sustainable practices. Objective included increasing brand awareness and driving customer engagement.", feedback:"Our eco brand case study shows that combining product and brand expertise can solve problems, tell stories, and create exceptional experience.",founder:"John Jone" },
    ];
    dispatch(setProjects(fetchedProjects));
    console.log("Fetched Projects:", fetchedProjects);
  }, [dispatch]);

  const handleViewProject = (id) => {
    dispatch(selectedProject(id));
    navigate(`/project/${id}`);
  };

  return (
    <div className='mt-40'>
      <div className='w-11/12 mx-auto'>
        <div className='space-y-2'>
          <h1 className='uppercase font-Switzer-Medium text-4xl'>Case studies</h1>
          <div className='space-x-2 space-y-2'>
            <button className='bg-gray rounded-xl w-20 text-black font-Switzer-Light'>All</button>
            <button className='bg-gray rounded-xl w-20 text-black font-Switzer-Light'>Identity</button>
            <button className='bg-gray rounded-xl w-20 text-black font-Switzer-Light'>Strategy</button>
            <button className='bg-gray rounded-xl w-20 text-black font-Switzer-Light'>Campaign</button>
            <button className='bg-gray rounded-xl w-20 text-black font-Switzer-Light'>Digital</button>
          </div>
        </div>

        {/* Responsive grid for lg and xl screens */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className='bg-primary relative'>
              <div className="absolute top-32 space-y-2 lg:top-20 xl:top-56 left-0 w-full h-full  text-white flex flex-col justify-center  p-4 rounded-xl">
                <h2 className="text-sm  text-gray font-Switzer-Light">{project.title}</h2>
                <h1 className="text-2xl   xl:text-3xl font-Switzer-Regular">{project.name}</h1>
                <button className='bg-gray1 font-Switzer-Medium mt-4 rounded-xl h-10 p-2 w-1/3 text-sm' onClick={() => handleViewProject(project.id)}>
                  View Project</button>
              </div>
              <div className='h-119 xl:h-160'>
                <img src={project.image} alt={project.name} className='w-full h-full object-cover rounded-xl' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
