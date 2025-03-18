import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getBlogsApi } from "../../utils/api/blogApi";

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
    navigate(`/news/${blog._id}`, { state: { blog } });
  };

  return (
    <div className="mt-20 animate-fade-up duration-1000 mb-10">
      <div className="w-11/12 mx-auto">
        <h1 className="text-2xl uppercase font-Switzer-Medium md:text-4xl lg:text-5xl">Blogs</h1>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
            onClick={() => handleBlogClick(blog)}
          >
            {/* Image with Overlay */}
            <div className="relative w-full h-64">
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
              />
            </div>

            {/* Blog Info */}
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray1">{blog.title}</h2>
              <p className="text-sm text-lightgray line-clamp-2 mt-2">{blog.description}</p>

              {/* Author & Date */}
              <div className="font-medium text-lightgray flex justify-between mt-4 text-xs">
                <p>By {blog.author}</p>
                <p>{new Date(blog.createdAt).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCard;