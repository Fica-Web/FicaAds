import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectedProject, setProjects } from "../../Reducer/projectSlice";
import { Link } from "react-router-dom";


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
import pro36 from "../../assets/Images/PURPLE ANIMATION.mp4"
import pro37 from "../../assets/Images/Project37.jpg"
import pro38 from "../../assets/Images/Project38.jpg"


import pro41 from "../../assets/Images/Project41.jpg"
import pro42 from "../../assets/Images/Project42.jpg"
import pro43 from "../../assets/Images/Project43.jpg"
import pro44 from "../../assets/Images/Project44.jpg"
import pro45 from "../../assets/Images/Project45.jpg"
import pro46 from "../../assets/Images/Project46.jpg"
import pro47 from "../../assets/Images/Project47.jpg"
import pro48 from "../../assets/Images/Project48.jpg"

import pro51 from "../../assets/Images/Project51.jpg"
import pro52 from "../../assets/Images/Project54.jpg"
import pro53 from "../../assets/Images/Project58.jpg"
import pro54 from "../../assets/Images/Project53.jpg"
import pro55 from "../../assets/Images/Project54.jpg"
import pro56 from "../../assets/Images/Project55.jpg"
import pro57 from "../../assets/Images/Project57.jpg"

import pro61 from "../../assets/Images/Project61.jpg"
import pro62 from "../../assets/Images/Project62.jpg"
import pro63 from "../../assets/Images/Project63.jpg"
import pro64 from "../../assets/Images/Project64.jpg"
import pro65 from "../../assets/Images/Project65.jpg"
import pro66 from "../../assets/Images/Project66.jpg"
import pro67 from "../../assets/Images/Project67.jpg"
import pro68 from "../../assets/Images/Project68.jpg"

import pro71 from "../../assets/Images/Project71.jpg"
import pro72 from "../../assets/Images/Project72.jpg"
import pro73 from "../../assets/Images/Project73.jpg"
import pro74 from "../../assets/Images/Project74.jpg"
import pro75 from "../../assets/Images/Project75.jpg"
import pro76 from "../../assets/Images/Project76.jpg"
import pro77 from "../../assets/Images/Project77.jpg"
import pro78 from "../../assets/Images/Project78.jpg"

import pro81 from "../../assets/Images/Project81.jpg"
import pro82 from "../../assets/Images/Project82.jpg"
import pro83 from "../../assets/Images/Project83.jpg"
import pro84 from "../../assets/Images/Project84.jpg"
import pro85 from "../../assets/Images/Project85.jpg"
import pro86 from "../../assets/Images/Project86.jpg"

import pro91 from "../../assets/Images/Project91.jpg"
import pro92 from "../../assets/Images/Project92.jpg"
import pro93 from "../../assets/Images/Project93.jpg"
import pro94 from "../../assets/Images/Project94.jpg"
import pro95 from "../../assets/Images/Project95.jpg"
import pro96 from "../../assets/Images/Project96.png"
import pro97 from "../../assets/Images/Project97.png"


const Projects = ({ showFullContent = true, limit = null, showbutton = true }) => {
  const projects = useSelector((state) => state.projects.projects);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchedProjects = [
      {
        id: 1,
        type: "image",
        image: pro41,
        image2: pro42,
        image3: pro45,
        image4: pro43,
        image5: pro44,
        image6: pro46,
        image7: pro47,
        image8: pro48,
        year: "2023",
        category: "Identity",
        title: "Construction",
        name: "Amani Developers",
        description:
          "Amani Developers is a leading construction company based in India, dedicated to transforming architectural visions into reality. With a rich legacy of excellence spanning over  years, we have earned a reputation as a trusted and reliable partner in the construction industry.",
        description2:
          "Our commitment to delivering exceptional quality, innovative design, and sustainable solutions sets us apart, making us the preferred choice for a wide range of projects. We specialize in the construction of residential, commercial, and industrial properties, offering end-to-end solutions that encompass design, planning, execution, and project management. With a team of highly skilled professionals and a meticulous attention to detail, we ensure that every project we undertake exceeds expectations and adds value to the communities we serve.",
        feedback:
          "Our mission is to construct more than buildings; we create spaces where dreams take shape. Every project is a testament to our dedication to quality, innovation, and transforming visions into reality.",
        founder: "Amani Developers",
      },
      {
        id: 2,
        type: "video",
        image: pro36,
        image2: pro31,
        image3: pro32,
        image4: pro34,
        image5: pro35,
        image6: pro33,
        image7: pro37,
        image8: pro38,
        year: "2024",
        category: "Digital",
        title: "Mobile",
        name: "Iphone 14",
        description:
          "Experience the iPhone 14 Pro in 3D .Explore a meticulously crafted 3D visualization of the iPhone 14 Pro, highlighting its elegant design, refined details, and innovative features. ",
        description2:
          "This professional-grade model showcases the device with precision, making it ideal for marketing, product presentations, and high-quality creative projects.",
        feedback:
          "With the iPhone 14, our 3D visualization brings every detail to life—from its sleek design to its cutting-edge features. It's more than just a phone; it's a masterpiece of innovation and craftsmanship, showcased like never before.",
        founder: "Visualization Team",
      },
      {
        id: 3,
        type: "image",
        image: pro11,
        image2: pro12,
        image3: pro13,
        image4: pro14,
        image5: pro15,
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
          "At the heart of our construction projects is a commitment to building more than structures—we build trust, innovation, and lasting value. Every blueprint is inspired by our clients' vision, brought to life with precision and expertise.",
        founder: "Urban Hive",
      },

      {
        id: 4,
        type: "image",
        image: pro21,
        image2: pro25,
        image3: pro22,
        image4: pro23,
        image5: pro24,
        image6: pro28,
        image7: pro27,
        image8: pro26,
        year: "2024",
        category: "Identity",
        title: "Sports wear, Clothing",
        name: "Run X",
        description:
          "RUN X is a modern, performance-driven sports clothing brand that is committed to helping athletes of all ages and skill levels perform at their best. The brand's identity is based on its core values of performance, comfort, and innovation.",
        description2:
          "It uses the latest technologies and materials to create clothing that is lightweight, breathable, and durable. The brand also focuses on creating comfortable clothing that allows for a full range of motion. Additionally, RUN X is constantly innovating to develop new and better sports clothing that meets the needs of athletes.",
        feedback:
          "At RUN X, we believe that every athlete deserves gear that matches their passion and performance. Every stitch, fabric, and design is shaped by feedback from those who push their limits every day.",
        founder: "RUN X",
      },

      {
        id: 5,
        type: "image",
        image: pro51,
        image2: pro52,
        image3: pro53,
        image4: pro54,
        image5: pro56,
        image6: pro55,
        image7: pro57,
        image8: pro51,
        year: "2023",
        category: "Campaign",
        title: "Eye Wear",
        name: "John Jacobs",
        description:
          "John Jacobs is a contemporary, style-focused eyewear brand dedicated to providing glasses that seamlessly combine fashion, comfort, and durability. The brand’s identity is built on its core values of quality craftsmanship, modern design, and innovation.",
        description2:
          "Using premium materials and cutting-edge techniques, John Jacobs creates eyewear that is lightweight, resilient, and tailored for long-lasting wear. The brand prioritizes comfort with ergonomic designs that ensure a perfect fit for every face shape. Additionally, John Jacobs consistently innovates to introduce fresh, trend-forward collections that meet the evolving needs of style-conscious individuals.",
        feedback:
          "Our vision at John Jacobs has always been to redefine eyewear—not just as a necessity, but as an extension of your personality. Every frame is a blend of innovation, quality, and timeless design, inspired by the feedback of those who wear them.",
        founder: "John Jacobs",
      },

      {
        id: 6,
        type: "image",
        image: pro61,
        image2: pro62,
        image3: pro67,
        image4: pro64,
        image5: pro65,
        image6: pro68,
        image7: pro63,
        image8: pro66,
        year: "2023",
        category: "Digital",
        title: "Car",
        name: "Bentley",
        description:
          "We are a premium car brand dedicated to delivering vehicles that combine luxury, performance, and cutting-edge technology. Our identity is built on the core values of craftsmanship, innovation, and driving excellence.",
        description2:
          "Using premium materials and cutting-edge techniques, John Jacobs creates eyewear that is lightweight, resilient, and tailored for long-lasting wear. The brand prioritizes comfort with ergonomic designs that ensure a perfect fit for every face shape. Additionally, John Jacobs consistently innovates to introduce fresh, trend-forward collections that meet the evolving needs of style-conscious individuals.",
        feedback:
          "Each car is engineered with precision using the latest technologies and materials to ensure superior performance, comfort, and durability. We focus on creating vehicles that offer an unparalleled driving experience, with attention to every detail. Constantly innovating, we strive to redefine automotive excellence, meeting the needs of those who demand the best in luxury and performance.",
        founder: "Bentley",
      },
      {
        id: 7,
        type: "image",
        image: pro71,
        image2: pro72,
        image3: pro73,
        image4: pro74,
        image5: pro75,
        image6: pro76,
        image7: pro77,
        image8: pro78,
        year: "2023",
        category: "Identity",
        title: "Restaurant",
        name: "Flavaro",
        description:
          "Flavaro is a distinguished premium restaurant and cafe, positioning itself as a haven for those who seek refined and exceptional dining experiences. Combining culinary artistry, innovative flavors, and impeccable service, we offers an exquisite gastronomic journey that tantalizes the senses and captivates the soul At Flavaro, we promise an enchanting experience where delectable flavors dance on the palate, each dish is a canvas of creativity, and moments of joy are created and cherished.",
        description2:
          "Our commitment to excellence, innovation, and warm hospitality ensures that every visit to Flavaro is a celebration of indulgence and sophistication.",
        feedback:
          "The branding work exceeded our expectations! It perfectly reflects our restaurant's essence, creating a strong and memorable identity that our customers love.",
        founder: "Flavaro",
      },
      {
        id: 8,
        type: "image",
        image: pro81,
        image2: pro82,
        image3: pro83,
        image4: pro84,
        image5: pro85,
        image6: pro86,
        
        year: "2023",
        category: "Campaign",
        title: "Campaign",
        name: "Environment Day",
        description:
          "Environment Day highlights the urgent need to protect and preserve our planet through sustainable actions. It serves as a reminder of the importance of reducing waste, conserving resources, and fostering a greener, healthier environment for future generations.",
        description2:
          "This campaign emphasizes collective responsibility and the power of meaningful actions to create lasting positive change.",
        feedback:
          "We organized a successful Environment Day Campaign focused on raising awareness about sustainability and environmental conservation. The campaign featured educational activities, interactive workshops, and a tree-planting drive to inspire collective action. Through creative initiatives and community engagement, we emphasized the importance of preserving natural resources, reducing waste, and building a greener future for the generations to come. Together, we took a small but impactful step toward a healthier planet.",
        founder: "Fica",
      },

      {
        id: 9,
        type: "image",
        image: pro91,
        image2: pro94,
        image3: pro96,
        image4: pro92,
        image5: pro93,
        image6: pro97,
        image7: pro95,
        
        year: "2024",
        category: "Campaign",
        title: "Campaign",
        name: "Tobacco Day",
        description:
          "Tobacco use remains one of the leading causes of preventable deaths worldwide, impacting not only individual health but also our environment. It's time for us to come together as a global community to combat this threat by spreading awareness, encouraging cessation, and promoting healthier choices. Every step towards a tobacco-free world is a step towards saving lives and protecting future generations.",
        description2:
          "Let this be a call to action: Say no to tobacco, yes to life. Together, we can create a healthier, cleaner, and brighter future for everyone.",
        feedback:
          "On World No Tobacco Day, we conducted an impactful campaign to raise awareness about the harmful effects of tobacco on health and the environment. Through informative sessions, community discussions, and awareness drives, we encouraged individuals to quit tobacco and adopt healthier lifestyles. The initiative highlighted the dangers of smoking and the importance of protecting future generations from its devastating effects, promoting a tobacco-free world for better health and well-being",
        founder: "Fica",
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

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;



  return (
    <div className="mt-20 mb-10">
      <div className="w-11/12 mx-auto">
        {showFullContent && (
          <>
            <div className="space-y-2">
              <h1 className="uppercase font-Switzer-Medium text-4xl">
                Case Studies
              </h1>
              <div className="space-x-2 space-y-2 flex flex-wrap">
                {["All", "Identity", "Strategy", "Campaign", "Digital"].map(
                  (category) => (
                    <button
                      key={category}
                      className={`rounded-xl p-2 px-2 lg:px-4 font-Switzer-Light text-xs ${
                        selectedCategory === category
                          ? "bg-black text-white"
                          : "bg-gray5 text-black"
                      }`}
                      onClick={() => handleCategoryChange(category)}
                    >
                      {category}
                    </button>
                  )
                )}
              </div>
            </div>
          </>
        )}

        <div className="mt-6 lg:mt-10 grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3 animate-fade-up duration-1000">
          {displayedProjects.map((project) => {
            // Conditional size class for specific projects
            let sizeClass = '';
            if (project.id === 4 || project.id === 9 || project.id === 12) {
              sizeClass = 'xl:col-span-2'; // Makes the 4th, 8th, and 12th projects larger
            }

            return (
              <div
                key={project.id}
                className={`relative group bg-primary rounded-xl overflow-hidden ${sizeClass}`}
              >
                {project.type === "image" ? (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-120 lg:h-160 object-cover rounded-xl transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
                /> ) : (
                  <video
                      className='w-full h-full object-cover'
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
                    <h2 className="text-sm text-gray3 font-Switzer-Light">
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
            );
          })}
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