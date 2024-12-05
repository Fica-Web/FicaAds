import React from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NewsCard from './NewsCard';

const BlogDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0); // Resets scroll to the top of the page
  }, []);

  // Retrieve the blog data from location.state
  const { blog } = location.state || {};

  if (!blog) {
    // Handle the case where the blog data is not passed (or user navigated directly to this page)
    return <div>No blog data found</div>;
  }

  return (
    <div>


      <div className="w-11/12 mx-auto mt-20  space-y-10 lg:w-1/2 ">
        <div className=' space-y-2'>
          <p className='font-Switzer-Medium text-gray'>The Brand Identity</p>
          <h1 className="text-2xl font-Switzer-Medium  uppercase xl:text-5xl">{blog.title}</h1>
          <p className='font-Switzer-Medium text-gray'>{blog.date}</p>
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="mt-6 w-full h-124 object-cover rounded-lg"
          />
        </div>
        <div className='space-y-4'>
          <p className="font-Switzer-Light text-sm mt-4">{blog.content}</p>
          <h1 className="font-Switzer-Medium text-3xl ">{blog.heading1}</h1>
          <p className="font-Switzer-Light text-sm mt-4">{blog.description1}</p>
          <h1 className="font-Switzer-Medium text-3xl ">{blog.heading2}</h1>
          <p className="font-Switzer-Light text-sm mt-4">{blog.description2}</p>
          <h1 className="font-Switzer-Medium text-3xl">{blog.heading3}</h1>
          <p className="font-Switzer-Light text-sm mt-4">{blog.description3}</p>
        </div>
      </div>
      <NewsCard />
    </div>
  );
};

export default BlogDetails;
