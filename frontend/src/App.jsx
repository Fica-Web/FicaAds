import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ProjectPage from './Pages/ProjectPage'
import ProjectDetails from './Components/Project/ProjectDetails'
import NewsPage from './Pages/NewsPage'
import BlogDetails from './Components/News/BlogDetails'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import ContactPage from './Pages/ContactPage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/project' element={<ProjectPage />} />
      <Route path='/project/:id' element={<ProjectDetails />}/>
      <Route path='/news' element={<NewsPage />}/>
      <Route path='/news/:id' element={<BlogDetails />} />
      <Route path='/privacypolicy' element={<PrivacyPolicy />} />
      <Route path='/contact' element={<ContactPage />} />
    </Routes>
  )
}

export default App