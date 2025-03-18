import React from "react";

const SingleBlog = ({ blog, onClick }) => {
  return (
    <div
      className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
      onClick={onClick}
    >
      {/* Image with Overlay */}
      <div className="relative w-full h-64 overflow-hidden">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-25 transition-all duration-300"></div>
      </div>

      {/* Blog Info */}
      <div className="p-5">
        <h2 className="text-xl font-Switzer-Medium text-gray1 leading-snug">
          {blog.title}
        </h2>
        <p className="text-sm text-lightgray line-clamp-2 mt-2">{blog.description}</p>

        {/* Author & Date */}
        <div className="font-medium text-lightgray flex justify-between mt-4 text-xs">
          <p>By {blog.author}</p>
          <p>
            {new Date(blog.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;