import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectedProject, setProjects } from "../../Reducer/projectSlice";


import project3 from "../../assets/Images/Men.webp"
import project1 from "../../assets/Images/Burger.webp";
import project2 from "../../assets/Images/Hand Product.webp";


import pro11 from "../../assets/Images/P01.jpg"
import pro12 from "../../assets/Images/P02.jpg"
import pro13 from "../../assets/Images/P03.jpg"
import pro14 from "../../assets/Images/P04.jpg"
import pro15 from "../../assets/Images/P05.jpg"
import pro16 from "../../assets/Images/P06.jpg"
import pro17 from "../../assets/Images/P07.jpg"
import pro18 from "../../assets/Images/P08.jpg"

import pro21 from "../../assets/Images/01.jpg"
import pro22 from "../../assets/Images/02.jpg"
import pro23 from "../../assets/Images/03.jpg"
import pro24 from "../../assets/Images/04.jpg"
import pro25 from "../../assets/Images/05.jpg"
import pro26 from "../../assets/Images/06.jpg"
import pro27 from "../../assets/Images/07.jpg"
import pro28 from "../../assets/Images/08.jpg"

import pro31 from "../../assets/Images/Project31.jpg"
import pro32 from "../../assets/Images/Project32.jpg"
import pro33 from "../../assets/Images/Project33.jpg"
import pro34 from "../../assets/Images/Project34.jpg"
import pro35 from "../../assets/Images/Project35.jpg"
import pro36 from "../../assets/Images/Project36.jpg"
import pro37 from "../../assets/Images/Project37.jpg"
import pro38 from "../../assets/Images/Project38.jpg"

const Projects = () => {
  const projects = useSelector((state) => state.projects.projects);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchedProjects = [
      {
        id: 1,
        image: pro11,
        image2:  pro12,
        image3:  pro13,
        image4:  pro14,
        image5:  pro15,
        image6: pro16,
        image7: pro17,
        image8: pro18,
        year: "2024",
        category: "Identity",
        title: "Construction",
        name: "Urban Hive",
        description:
          "Urban Hive Developers is a leading construction, design, and development company based in Kerala, India. Specializing in modern architectural design and construction, the company is   renowned for creating innovative buildings and structures that seamlessly blend functionality, aesthetics, and sustainability.",
        description2:
          "With a strong commitment to understanding clients' needs and aspirations, Urban Hive Developers employs a collaborative approach among the team of architects, designers, and construction experts. The company focus on translating clients' visions into unique and functional designs, emphasizing creativity while ensuring high-quality standards in every project.",
        feedback:
          "Our eco brand case study shows that combining product and brand expertise can solve problems, tell stories, and create exceptional experience.",
        founder: "John Jone",
      },
      {
        id: 2,
        image: pro21,
        image2:  pro22,
        image3:  pro25,
        image4:  pro23,
        image5:  pro24,
        image6: pro26,
        image7: pro27,
        image8: pro28,
        year: "2024",
        category: "Campaign",
        title: "Sports wear, Clothing",
        name: "Run X",
        description:
          "RUN X is a modern, performance-driven sports clothing brand that is committed to helping athletes of all ages and skill levels perform at their best. The brand's identity is based on its core values of performance, comfort, and innovation.",
        description2:
          "It uses the latest technologies and materials to create clothing that is lightweight, breathable, and durable. The brand also focuses on creating comfortable clothing that allows for a full range of motion. Additionally, RUN X is constantly innovating to develop new and better sports clothing that meets the needs of athletes.",
        feedback:
          "Our eco brand case study shows that combining product and brand expertise can solve problems, tell stories, and create exceptional experience.",
        founder: "John Jone",
      },
      {
        id: 3,
        image: pro36,
        image2:  pro31,
        image3:  pro32,
        image4:  pro34,
        image5:  pro35,
        image6: pro33,
        image7: pro37,
        image8: pro38,
        year: "2024",
        category: "Identity",
        title: "Construction",
        name: "Urban Hive",
        description:
          "Urban Hive Developers is a leading construction, design, and development company based in Kerala, India. Specializing in modern architectural design and construction, the company is   renowned for creating innovative buildings and structures that seamlessly blend functionality, aesthetics, and sustainability.",
        description2:
          "With a strong commitment to understanding clients' needs and aspirations, Urban Hive Developers employs a collaborative approach among the team of architects, designers, and construction experts. The company focus on translating clients' visions into unique and functional designs, emphasizing creativity while ensuring high-quality standards in every project.",
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

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 animate-fade-up duration-1000">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative group bg-primary rounded-xl overflow-hidden"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-120 lg:h-160 object-cover rounded-xl transition-transform duration-300 "
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
