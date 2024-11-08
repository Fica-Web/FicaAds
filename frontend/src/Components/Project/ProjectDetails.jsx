import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';  // Get the project ID from the URL

const ProjectDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { id } = useParams();  // Extracting the project ID from the route
    const selectedProject = useSelector((state) => state.projects.selectedProject);  // Access the selected project from Redux

    if (!selectedProject) return <p>No project found.</p>;

    return (
        <div className='mt-20'>
            <div className="mt-6">
                <div className='bg-primary relative'>
                    <div className="absolute top-32 space-y-2 md:top-56 lg:top-56 xl:top-56 left-0 w-full h-full  text-white flex flex-col justify-center  p-4 rounded-xl">

                        <h2 className="text-sm font-bold  xl:text-2xl font-Switzer-Light">{selectedProject.title}</h2>
                        <h1 className="text-2xl font-bold  xl:text-6xl font-Switzer-Regular uppercase">{selectedProject.name}</h1>
                    </div>
                    <div className='h-96 sm:h-112 md:h-144 xl:h-176'>
                        <img src={selectedProject.image} alt={selectedProject.name} className='w-full h-full object-cover rounded-xl' />
                    </div>
                </div>
            </div>
            <div className='w-11/12 mx-auto space-y-4'>
                <div className='pt-32
                  space-y-8 lg:space-y-0 lg:flex lg:space-x-20 xl:space-x-52'>
                    <div className='lg:w-1/2 xl:w-1/3  space-y-4'>
                        <p className='font-Switzer-Medium text-sm sm:text-base lg:text-sm xl:text-sm'>{selectedProject.description}</p>
                        <p className='font-Switzer-Medium text-sm sm:text-base lg:text-sm xl:text-sm'>{selectedProject.description}</p>
                    </div>
                    <div className='lg:w-1/2  xl:w-1/3 '>
                        <p className='font-Switzer-Medium text-gray text-sm lg:text-base'>Industry</p>
                        <button className='border-2 border-black px-2 py-1  rounded-xl text-base lg:text-sm'>{selectedProject.name}</button>
                        <p className='font-Switzer-Medium text-gray mt-4 text-sm lg:text-base'>Year</p>
                        <p className='font-Switzer-Light text-base lg:text-sm'>{selectedProject.year}</p>
                    </div>
                </div>

                <div className='pt-32 '>
                    <div className='w-full h-119 lg:h-160'>
                        <img src={selectedProject.image} alt='' className='w-full h-full object-cover rounded-xl' />
                    </div>
                    <div className='mt-6 w-full h-119 lg:h-160'>
                        <img src={selectedProject.image} alt='' className='w-full h-full object-cover rounded-xl' />
                    </div>
                    <div className='mt-6 space-y-4 lg:space-y-0 lg:space-x-2 lg:flex'>
                        <div className='w-full h-119 lg:h-160'>
                            <img src={selectedProject.image} alt='' className='w-full h-full object-cover rounded-xl' />
                        </div>
                        <div className='w-full h-119 lg:h-160'>
                            <img src={selectedProject.image} alt='' className='w-full h-full object-cover rounded-xl' />
                        </div>
                    </div>
                </div>


                <div className='pt-20 space-y-6  md:mt-0 md:w-2/3 lg:w-1/2 xl:w-1/3 '>
                    <p className='font-Switzer-Medium text-sm xl:text-base'>{selectedProject.feedback}</p>
                    <p className='font-Switzer-Medium text-lg xl:text-base'>{selectedProject.founder}<br></br><span className='text-gray text-sm xl:text-base'>Founder</span></p>
                </div>

            </div>

        </div>
    );
};

export default ProjectDetails;
