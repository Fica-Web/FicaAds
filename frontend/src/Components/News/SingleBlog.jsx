import React from "react";

const SingleBlog = ({ blog, onClick }) => {
  return (
    <div
      className="relative overflow-hidden  transition-all duration-300 cursor-pointer group"
      onClick={onClick}
    >
      {/* Image with Overlay */}
      <div className="relative w-full h-auto overflow-hidden rounded-3xl">
        <img
          src={blog?.coverImage}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300 rounded-3xl"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-25 transition-all duration-300"></div>
      </div>

      {/* Blog Info */}
      <div className="p-1 pt-5">
        <h2 className="text-xl font-Switzer-Medium text-[#0C0C0C]">
          {blog.title}
        </h2>
        <p className="text-lg text-[#0C0C0C]/80 line-clamp-2 mt-2">{blog.description}</p>

        {/* Author & Date */}
        {/* <div className="font-medium text-[#0C0C0C]/80 flex justify-between mt-3 text-xs">
          <p>By {blog.author}</p>
          <p>
            {new Date(blog.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            })}
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default SingleBlog;