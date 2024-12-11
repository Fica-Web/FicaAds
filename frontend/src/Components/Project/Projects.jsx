import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectedProject, setProjects } from "../../Reducer/projectSlice";


import project1 from "../../assets/Images/project1.jpeg";
import project2 from "../../assets/Images/project2.jpeg";

const Projects = () => {
  const projects = useSelector((state) => state.projects.projects);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchedProjects = [
      {
        id: 1,
        image: project1,
        image2:  project1,
        image3:  project1,
        image4:  project1,
        image5:  project1,
        year: "2024",
        category: "Identity",
        title: "Product",
        name: "Digital",
        description:
          "The clients goal was to create a brand identity that would resonate with environmentally conscious consumers and help position their business as a leader in sustainable practices. Objective included increasing brand awareness and driving customer engagement.",
        feedback:
          "Our eco brand case study shows that combining product and brand expertise can solve problems, tell stories, and create exceptional experience.",
        founder: "John Jone",
      },
      {
        id: 2,
        image: project2,
        image2:  project1,
        image3:  project1,
        image4:  project1,
        image5:  project1,
        year: "2024",
        category: "Campaign",
        title: "Ice cream branding",
        name: "Ammul Ice cream",
        description:
          "The clients goal was to create a brand identity that would resonate with environmentally conscious consumers and help position their business as a leader in sustainable practices. Objective included increasing brand awareness and driving customer engagement.",
        feedback:
          "Our eco brand case study shows that combining product and brand expertise can solve problems, tell stories, and create exceptional experience.",
        founder: "John Jone",
      },
    ];
    dispatch(setProjects(fetchedProjects));
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

  return (
    <div className="mt-20 mb-10">
      <div className="w-11/12 mx-auto">
        <div className="space-y-2">
          <h1 className="uppercase font-Switzer-Medium text-4xl">Case Studies</h1>
          <div className="space-x-2 space-y-2">
            {["All", "Identity", "Strategy", "Campaign", "Digital"].map(
              (category) => (
                <button
                  key={category}
                  className={`rounded-xl p-2 px-4 font-Switzer-Light ${
                    selectedCategory === category
                      ? "bg-black text-white"
                      : "bg-gray text-black"
                  }`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </button>
              )
            )}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3 animate-fade-up duration-1000">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative group bg-primary rounded-xl overflow-hidden"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-160 object-cover rounded-xl transition-transform duration-300 "
              />

              {/* Content Container */}
              <div className="absolute bottom-2 left-4 space-y-2 opacity-100 group-hover:translate-y-[-10px] group-hover:opacity-100 transition-all duration-300">
                {/* Title and Name */}
                <div>
                  <h2 className="text-sm text-gray font-Switzer-Light">
                    {project.title}
                  </h2>
                  <h1 className="text-white text-2xl font-Switzer-Regular">
                    {project.name}
                  </h1>
                </div>
                {/* Button */}
                <button
                  className="bg-gray1 font-Switzer-Medium rounded-xl h-10 p-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onClick={() => handleViewProject(project.id)}
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
