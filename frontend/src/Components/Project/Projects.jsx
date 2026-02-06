import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { selectedProject, setProjects } from "../../Reducer/projectSlice";
import { projectsData } from "../../data/projectsData";

const Projects = ({ showFullContent = true, limit = null, showbutton = true }) => {
  const projects = useSelector((state) => state.projects.projects);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    dispatch(setProjects(projectsData));
  }, [dispatch]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleViewProject = (id) => {
    dispatch(selectedProject(id));
    navigate(`/project/${id}`);
  };

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  const categories = ["All", "Identity", "Strategy", "Campaign", "Digital"];

  return (
    <div className="mt-20 mb-10">
      <div className="w-11/12 mx-auto">
        {showFullContent && (
          <div className="space-y-2">
            <h1 className="uppercase font-Switzer-Medium text-4xl">
              Case Studies
            </h1>
            <div className="space-x-2 space-y-2 flex flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`rounded-xl p-2 px-2 lg:px-4 font-Switzer-Light text-xs ${selectedCategory === category
                      ? "bg-black text-white"
                      : "bg-gray5 text-black"
                    }`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 lg:mt-10 grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3 animate-fade-up duration-1000">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className={`relative group bg-primary rounded-xl overflow-hidden ${project.isFeatured ? 'xl:col-span-2' : ''
                }`}
            >
              {project.type === "image" ? (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-120 lg:h-160 object-cover rounded-xl transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
                />
              ) : (
                <video
                  className="w-full h-full object-cover"
                  src={project.image}
                  autoPlay
                  loop
                  muted
                />
              )}

              {/* Content Container */}
              <div className="absolute bottom-[-2px] left-4 space-y-2 opacity-100 group-hover:translate-y-[-10px] group-hover:opacity-100 transition-all duration-300">
                {/* Title and Name */}
                <div>
                  <h2 className="text-sm text-white font-Switzer-Light">
                    {project.title}
                  </h2>
                  <h1 className="text-white text-2xl font-Switzer-Regular">
                    {project.name}
                  </h1>
                </div>
                {/* Button */}
                <button
                  className="backdrop-blur-md bg-gray3/20 text-white font-Switzer-Medium rounded-xl h-10 p-2 px-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onClick={() => handleViewProject(project.id)}
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>

        {showbutton && (
          <div className="mt-4 lg:mt-8 flex justify-end">
            <Link to={'/project'}>
              <button className="backdrop-blur-md bg-black/20 font-Switzer-Medium mt-4 rounded-lg h-8 px-6 text-sm">
                View Project
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
