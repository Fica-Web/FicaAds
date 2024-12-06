import React from 'react'
import { useEffect } from 'react';
import NewsCard from '../Components/News/NewsCard'
import NewsHero from '../Components/News/NewsHero'
import NavBar from '../Components/NavBar/NavBar'
import ExtraNews from '../Components/News/ExtraNews';

const NewsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Resets scroll to the top of the page
  }, []);
  return (
    <div>
      <NavBar/>
        <NewsCard />
        <NewsHero />
        <ExtraNews/>
    </div>
  )
}

export default NewsPage