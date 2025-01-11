import React from 'react'
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import NewsCard from '../Components/News/NewsCard'
import NewsHero from '../Components/News/NewsHero'
import NavBar from '../Components/NavBar/NavBar'
import ExtraNews from '../Components/News/ExtraNews';

const NewsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Resets scroll to the top of the page
  }, []);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "News - Fica Ad Innovations",
    "url": "https://ficaads.com/news",
    "description": "Stay updated with the latest news and updates from Fica Ad Innovations.",
    "publisher": {
      "@type": "Organization",
      "name": "Fica Ad Innovations",
      "url": "https://ficaads.com",
    },
    
  };
  return (
    <div>
      <Helmet>
        <title>News - Fica Ad Innovations</title>
        <meta
          name="description"
          content="Stay updated with the latest news and updates from Fica Ad Innovations."
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      
      <NavBar/>
        <NewsCard />
        <NewsHero />
        <ExtraNews/>
    </div>
  )
}

export default NewsPage