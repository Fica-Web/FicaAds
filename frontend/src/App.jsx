import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeLayout from './layout/HomeLayout';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ProjectPage from './Pages/ProjectPage';
import ProjectDetails from './Components/Project/ProjectDetails';
import NewsPage from './Pages/NewsPage';
import BlogDetails from './Components/News/BlogDetails';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import ContactPage from './Pages/ContactPage';
import CareersPage from './Pages/CareersPage';
import ServiceDetailsPage from './Pages/ServiceDetailsPage';
import AdminLayout from './layout/AdminLayout';
import AdminDashboard from './admin/pages/AdminDashboard';
import AdminBlogPage from './admin/pages/AdminBlogPage';
import CreateBlogPage from './admin/pages/CreateBlogPage';
import AdminTeamPage from './admin/pages/AdminTeamPage';
import AdminCareerPage from './admin/pages/AdminCareerPage';
import AdminLogin from './admin/pages/AdminLogin';
import AdminAuth from './utils/auth/AdminAuth';

const App = () => {
  return (
    <Routes>
      {/* Home Layout Routes */}
      <Route path='/' element={<HomeLayout />}>
        <Route index element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='project' element={<ProjectPage />} />
        <Route path='project/:id' element={<ProjectDetails />} />
        <Route path='blogs' element={<NewsPage />} />
        <Route path='blogs/:id' element={<BlogDetails />} />
        <Route path='careers' element={<CareersPage />} />
        <Route path='privacypolicy' element={<PrivacyPolicy />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='services/:id' element={<ServiceDetailsPage />} />
      </Route>

      {/* Admin Authentication Route */}
      <Route path='/admin/login' element={<AdminLogin />} />

      {/* Protected Admin Routes */}
      <Route path='/admin' element={<AdminAuth />}>
        <Route element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path='teams' element={<AdminTeamPage />} />
          <Route path='blogs' element={<AdminBlogPage />} />
          <Route path='blogs/create' element={<CreateBlogPage />} />
          <Route path='blogs/edit/:id' element={<CreateBlogPage />} />
          <Route path='careers' element={<AdminCareerPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
