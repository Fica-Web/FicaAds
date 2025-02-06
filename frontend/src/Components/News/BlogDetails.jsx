import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NewsCard from './NewsCard';

const BlogDetails = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0); // Resets scroll to the top of the page
  }, [location]);

  // Retrieve the blog data safely
  const blog = location.state?.blog;

  if (!blog) {
    return <div className="text-center mt-20">No blog data found</div>;
  }

  return (
    <div>
      <div className="w-11/12 mx-auto mt-20 space-y-10 lg:w-1/2">
        <div className='space-y-2'>
          <p className='font-Switzer-Medium text-gray'>The Brand Identity</p>
          <h2 className="text-2xl font-Switzer-Medium uppercase xl:text-5xl">{blog.title}</h2>
          <div className='flex justify-between'>
            <p className='font-Switzer-Medium text-gray'>{blog.author}</p>
            <p className='font-Switzer-Medium text-gray'>{blog.date}</p>
          </div>
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="mt-6 w-full h-124 object-cover rounded-lg"
          />
        </div>
        
        {/* Blog Content */}
        <div className='space-y-4'>
          <p className="font-Switzer-Light text-lg mt-4">{blog.content}</p>

          {blog.sections?.map((section, index) => (
            <div key={index} className="mt-6">
              <h2 className="font-Switzer-Medium text-3xl">{section.heading}</h2>

              {section.subSections?.map((sub, subIndex) => (
                <div key={subIndex} className="mt-4 pl-3">
                  {sub.subHeading && <h2 className="font-Switzer-Medium text-xl mb-1">{sub.subHeading}</h2>}
                  
                  {/* Ensure `subDescription` is an array before mapping */}
                  {Array.isArray(sub.subDescription) ? (
                    sub.subDescription.map((desc, descIndex) => (
                      <p key={descIndex} className="font-Switzer-Light  ml-3">{desc}</p>
                    ))
                  ) : (
                    <p className="font-Switzer-Light ">{sub.subDescription}</p>
                  )}
                </div>
              ))}
            </div>
          ))}

          {/* Blog Conclusion */}
          {blog.conclusion && (
            <div className="mt-6">
              <h2 className="font-Switzer-Medium text-3xl">Conclusion</h2>
              <p className="font-Switzer-Light mt-2">{blog.conclusion}</p>
            </div>
          )}

          {/* Pro Tips */}
          {blog.proTips?.length > 0 && (
            <div className="mt-6">
              <h2 className="font-Switzer-Medium text-3xl">Pro Tips</h2>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                {blog.proTips.map((tip, tipIndex) => (
                  <li key={tipIndex} className="font-Switzer-Light text-lg">{tip}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Call to Action */}
          {blog.callToAction && (
            <div className="mt-6">
              <h2 className="font-Switzer-Medium text-3xl">Call to Action</h2>
              <p className="font-Switzer-Light lg mt-2">{blog.callToAction}</p>
            </div>
          )}
        </div>
      </div>

      {/* Related News Section */}
      <NewsCard />
    </div>
  );
};

export default BlogDetails;