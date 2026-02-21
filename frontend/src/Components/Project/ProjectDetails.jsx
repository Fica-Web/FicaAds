import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { projectsData } from '../../data/projectsData';
import { selectedProject as selectProjectAction } from '../../Reducer/projectSlice';

const ProjectDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    // Attempt to get project from Redux first, then fallback to projectsData
    const reduxSelectedProject = useSelector((state) => state.projects.selectedProject);
    const project = reduxSelectedProject || projectsData.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
        // If we found the project by fallback (refresh), update Redux state
        if (!reduxSelectedProject && project) {
            dispatch(selectProjectAction(project.id));
        }
    }, [id, project, dispatch, reduxSelectedProject]);

    if (!project) return <p className="text-center mt-20">No project found.</p>;

    return (
        <div>
            <div className="bg-primary relative">
                <div className="absolute top-32 space-y-2 md:top-56 lg:top-56 xl:top-62 left-0 md:left-6 xl:left-12 w-10/12 h-full text-white flex flex-col justify-center p-4 rounded-xl">
                    <h2 className="text-sm font-bold xl:text-2xl font-Switzer-Light">{project.title}</h2>
                    <h1 className="text-2xl font-bold xl:text-6xl font-Switzer-Regular uppercase">{project.name}</h1>
                </div>
                <div className='h-96 sm:h-112 md:h-144 xl:h-176'>
                    {project.type === "image" ? (
                        <img src={project.image} alt={project.name} className='w-full h-full object-cover' />
                    ) : (
                        <video
                            className='w-full h-full object-cover'
                            src={project.image}
                            autoPlay
                            loop
                            muted
                        />
                    )}
                </div>
            </div>

            <div className='w-11/12 mx-auto space-y-4'>
                <div className='pt-10 md:pt-32 space-y-8 lg:space-y-0 lg:flex lg:space-x-20 xl:space-x-52'>
                    <div className='lg:w-1/2 xl:w-1/3 space-y-4'>
                        <p className='font-Switzer-Medium text-sm sm:text-base xl:text-base'>{project.description}</p>
                        <p className='font-Switzer-Medium text-sm sm:text-base xl:text-base'>{project.description2}</p>
                    </div>
                    <div className='lg:w-1/2 xl:w-1/3'>
                        <p className='font-Switzer-Medium text-gray text-sm lg:text-base'>Industry</p>
                        <button className='mt-2 border-2 border-black px-2 py-1 rounded-lg text-base lg:text-sm'>{project.title}</button>
                        <p className='font-Switzer-Medium text-gray mt-4 text-sm lg:text-base'>Year</p>
                        <p className='font-Switzer-Light text-base lg:text-sm'>{project.year}</p>
                    </div>
                </div>

                <div className='pt-20'>
                    {/* First single image */}
                    {project.gallery?.[0] && (
                        <div className='w-full'>
                            <img src={project.gallery[0]} alt='' className='w-full h-full object-cover rounded-xl' />
                        </div>
                    )}

                    {/* Second single image */}
                    {project.gallery?.[1] && (
                        <div className='mt-6 w-full'>
                            <img src={project.gallery[1]} alt='' className='w-full h-full object-cover rounded-xl' />
                        </div>
                    )}

                    {/* Side by side images (3 and 4) */}
                    {(project.gallery?.[2] || project.gallery?.[3]) && (
                        <div className='mt-6 space-y-4 lg:space-y-0 lg:space-x-2 lg:flex'>
                            {project.gallery?.[2] && (
                                <div className='w-full'>
                                    <img src={project.gallery[2]} alt='' className='w-full h-full object-cover rounded-xl' />
                                </div>
                            )}
                            {project.gallery?.[3] && (
                                <div className='w-full'>
                                    <img src={project.gallery[3]} alt='' className='w-full h-full object-cover rounded-xl' />
                                </div>
                            )}
                        </div>
                    )}

                    {/* Remaining images (5, 6, 7+) as full width */}
                    {project.gallery?.slice(4).map((img, index) => (
                        <div key={index} className='w-full mt-6'>
                            <img src={img} alt='' className='w-full h-full object-cover rounded-xl' />
                        </div>
                    ))}
                </div>

                <div className='pt-16 pb-20 space-y-6 md:mt-0 md:w-2/3 lg:w-1/2 xl:w-1/3 ml-auto'>
                    <p className='font-Switzer-Medium text-sm xl:text-base'>{project.feedback}</p>
                    <p className='font-Switzer-Medium text-lg xl:text-base'>
                        {project.founder}
                        <br />
                        <span className='text-gray text-sm xl:text-base'>Founder</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;