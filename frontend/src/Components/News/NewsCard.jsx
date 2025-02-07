import { useNavigate } from 'react-router-dom';
import blogs from '../../data/blogs';

const NewsCard = () => {
  const navigate = useNavigate();

  const handleBlogClick = (blog) => {
    // Navigate to the detailed page of the blog and pass the blog data
    navigate(`/news/${blog.id}`, { state: { blog } });
  };

  return (
    <div className='mt-20 animate-fade-up duration-1000 mb-10'>
      <div className='w-11/12 mx-auto'>
        <h1 className='text-2xl uppercase font-Switzer-Medium md:text-4xl lg:text-5xl '>Blogs</h1>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 w-11/12 mx-auto">

        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="relative bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={() => handleBlogClick(blog)}
          >
            {/* Image with Overlay */}
            <div className="relative w-full h-96">
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay effect */}
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-opacity duration-300"></div>
            </div>

            {/* Blog Info */}
            <div className="p-4">
              <h2 className="text-lg font-Switzer-Medium text-gray1">{blog.title}</h2>
              <div className='font-Switzer-Medium text-lightgray flex justify-between mt-3'>
                <p>By {blog.author}</p>
                <p>{blog.date}</p>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>

  );
};

export default NewsCard;
