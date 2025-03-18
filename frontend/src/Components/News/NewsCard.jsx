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

  const handleBlogClick = (blog) => {
    navigate(`/news/${blog._id}`);
  };

  return (
    <div className="mt-20 animate-fade-up duration-1000 mb-10">
      <div className="w-11/12 mx-auto">
        <h1 className="text-2xl uppercase font-Switzer-Medium md:text-4xl lg:text-5xl">
          Latest Blogs
        </h1>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto">
        {blogs.map((blog) => (
          <SingleBlog key={blog._id} blog={blog} onClick={() => handleBlogClick(blog)} />
        ))}
      </div>
    </div>
  );
};

export default NewsCard;