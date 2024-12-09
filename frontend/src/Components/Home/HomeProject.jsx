import React from 'react';
import { Slide, Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import project3 from "../../assets/Images/Men.webp"
import project1 from "../../assets/Images/Burger.webp";
import project2 from "../../assets/Images/Hand Product.webp";

const HomeProject = () => {
  const fetchedProjects = [
    { id: 1, image: project1, title: "Strategy", name: 'Burgerspot' },
    { id: 2, image: project3, title: "Strategy", name: 'Hiitzone' },
    { id: 3, image: project2, title: "Strategy", name: 'Bounce Curl' }
  ];

  return (
    <div className='mt-20 sm:mt-52 md:mt-16'>
      <div className='w-11/12 mx-auto'>
        {/* Responsive grid for lg and xl screens */}
        <div className="mt-6 grid grid-cols-1 gap-2 lg:grid-cols-2 xl:grid-cols-3">
          {fetchedProjects.map((project) => (
            <div key={project.id} className='relative group bg-primary overflow-hidden rounded-xl shadow-md'>
              {/* Image container */}
              <div className='h-119 xl:h-160'>
                <img src={project.image} alt={project.name} className='w-full h-full object-cover rounded-xl transition-transform duration-300 transform group-hover:scale-105' />
              </div>

              {/* Overlay content with animations at bottom-left */}
              <div className=" absolute bottom-0 left-0 p-8 w-full flex flex-col items-start opacity-0 group-hover:opacity-100  transition-opacity duration-500">
                <Slide direction='up' triggerOnce>
                  <div className=" text-white">
                    <h2 className="text-sm font-Switzer-Light">{project.title}</h2>
                    <h1 className="text-2xl xl:text-3xl font-Switzer-Regular">{project.name}</h1>
                    <Fade direction="up" triggerOnce>
                      <Link to={'/project'}>
                        <button className='backdrop-blur-md bg-black/20 font-Switzer-Medium mt-4 rounded-xl h-10 px-4 text-sm'>
                          View Project
                        </button>
                      </Link>
                    </Fade>
                  </div>
                </Slide>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeProject;


