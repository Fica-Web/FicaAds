import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getBlogsApi } from "../../utils/api/blogApi";
import SingleBlog from "./SingleBlog";

const NewsCard = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await getBlogsApi();
        setBlogs(response.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

    const handleNavigate = () => {
    navigate('/blogs'); // put your blog page route here
  };

  const handleBlogClick = (blog) => {
    navigate(`/blogs/${blog._id}`);
  };

  return (
    <>
      {blogs?.length > 0 && (
        <div className="mt-20 animate-fade-up duration-1000 mb-10">
          <div className="w-11/12 mx-auto flex justify-between">
            <h1 className="text-2xl uppercase font-Switzer-Medium md:text-4xl lg:text-5xl font-medium">
              Latest Blogs
            </h1>
            <button className="font-Switzer-Medium text-base text-[#FFFFFF] bg-[#0C0C0C] rounded-xl p-1 px-6" onClick={handleNavigate}>Read All</button>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto">
            {blogs.map((blog) => (
              <SingleBlog key={blog._id} blog={blog} onClick={() => handleBlogClick(blog)} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default NewsCard;