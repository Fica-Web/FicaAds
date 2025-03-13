import React from 'react'
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Projects from '../Components/Project/Projects'

const ProjectPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Resets scroll to the top of the page
  }, []);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Projects - Fica Ad Innovations",
    "url": "https://ficaads.com/projects",
    "description": "Explore a wide range of innovative projects by Fica Ad Innovations, showcasing expertise in advertising and marketing.",
    "publisher": {
      "@type": "Organization",
      "name": "Fica Ad Innovations",
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": "Our Projects",
      "description": "A curated collection of our projects designed to transform advertising for global brands.",
    },
  };

  return (
    <div>
      <Helmet>
        <title>Projects - Fica Ad Innovations</title>
        <meta
          name="description"
          content="Explore a wide range of innovative projects by Fica Ad Innovations, showcasing expertise in advertising and marketing."
        />
        <meta name="keywords" content="Fica Ad Innovations, Projects, Advertising, Marketing, Innovative Solutions" />
        <meta name="author" content="Fica Ad Innovations" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Projects showFullContent={true} showbutton={false} /> 
    </div>
  )
}

export default ProjectPage