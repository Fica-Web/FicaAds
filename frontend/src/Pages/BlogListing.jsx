import React from 'react';

const BlogListing = () => {
    const blogs = [
        {
            id: 1,
            title: "The Future of Digital Marketing",
            excerpt: "Explore the latest trends and strategies shaping the future of digital marketing in 2025.",
            author: "John Doe",
            date: "February 5, 2025",
            image: "https://info.ehl.edu/hubfs/digital-marketing-trends-in-education.jpeg",
        },
        {
            id: 2,
            title: "10 Tips for Successful Social Media Campaigns",
            excerpt: "Learn how to create impactful and engaging social media campaigns that drive results.",
            author: "Jane Smith",
            date: "February 2, 2025",
            image: "https://via.placeholder.com/300x200",
        },
        {
            id: 3,
            title: "SEO Best Practices for 2025",
            excerpt: "Discover actionable SEO techniques to improve your website's ranking and visibility.",
            author: "Alice Johnson",
            date: "January 30, 2025",
            image: "https://rdsdigital.in/wp-content/uploads/2022/07/Must-Have-Digital-Marketing-Tools-by-Experts.jpg",
        },
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 lg:py-20">
            <h1 className="text-2xl md:text-4xl lg:text-5xl uppercase font-Switzer-Medium mb-12 text-center">
                Latest Blogs
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="group bg-white rounded-lg shadow-md border border-gray5 overflow-hidden hover:shadow-xl transition-shadow duration-500 cursor-pointer"
                    >
                        <div className="relative">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-56 object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300"></div>
                        </div>
                        <div className="p-4">
                            <h2 className="text-2xl font-semibold font-Switzer-Light text-gray-800">
                                {blog.title}
                            </h2>
                            <p className="text-gray-600 mt-2">{blog.excerpt}</p>
                            <div className="mt-4 flex justify-between items-center text-gray-500 text-sm">
                                <span>By {blog.author}</span>
                                <span>{blog.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogListing;