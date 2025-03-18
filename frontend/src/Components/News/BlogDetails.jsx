import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleBlogApi, getLatestBlogApi } from "../../utils/api/blogApi";
import LatestBlog from "./LatestBlogs";

const BlogDetails = () => {
  const { id } = useParams(); // Get blog ID from URL
  const [blog, setBlog] = useState(null);
  const [latestBlogs, setLatestBlogs] = useState([]); // ✅ Fixed missing state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [blogResponse, latestBlogResponse] = await Promise.all([
          getSingleBlogApi(id),
          getLatestBlogApi(id),
        ]);

        setBlog(blogResponse.blog);
        setLatestBlogs(latestBlogResponse.latestBlogs);
      } catch (err) {
        setError("Failed to load blog details.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <div className="text-center mt-20">Loading...</div>;
  if (error) return <div className="text-center m-20 text-red-500">{error}</div>;

  return (
    <div className="w-11/12 mx-auto mt-20 mb-10 space-y-10 lg:w-3/4 xl:w-2/3">
      {/* Blog Header Section */}
      <div className="text-center">
        <p className="font-Switzer-Medium text-gray uppercase tracking-wider">{blog.category}</p>
        <h1 className="text-3xl xl:text-5xl font-Switzer-Medium uppercase leading-tight mt-2">{blog.title}</h1>
        <div className="flex justify-center items-center space-x-4 mt-3 text-sm text-lightgray">
          <p className="font-Switzer-Medium">{blog.author}</p>
          <span>•</span>
          <p className="font-Switzer-Medium">
            {new Date(blog.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            })}
          </p>
        </div>
      </div>

      {/* Cover Image with Overlay */}
      <div className="relative w-full h-96 rounded-lg overflow-hidden">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all"></div>
      </div>

      {/* Blog Content */}
      <div className="space-y-6">
        {blog.description && <p className="font-Switzer-Light text-lg">{blog.description}</p>}

        {Array.isArray(blog.content) &&
          blog.content.map((section, index) => (
            <div key={index} className="mt-8">
              <h2 className="font-Switzer-Medium text-2xl xl:text-3xl">{section.contentTitle}</h2>
              <p className="font-Switzer-Light text-lg mt-2 leading-relaxed">{section.contentDescription}</p>
            </div>
          ))}
      </div>

      {/* Related Blogs Section */}
      {latestBlogs.length > 0 && (
        <LatestBlog latestBlogs={latestBlogs} />
      )}
    </div>
  );
};

export default BlogDetails;