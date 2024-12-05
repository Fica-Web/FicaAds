import { useNavigate } from 'react-router-dom';
import img from "../../assets/Images/product1.jpeg";
import news1 from "../../assets/Images/new1.jpeg";
import news2 from "../../assets/Images/news2.jpeg"


const blogs = [
  {
    id: 1,
    title: 'Building a Strong Brand Identity in the Digital Age',
    date: "07 November / 9 min read",
    imageUrl: news1,
    content: 'In the age of digital connectivity, having a strong brand identity is more important than ever. A compelling brand identity not only differentiates a business but also helps it establish trust and loyalty among customers. In a crowded marketplace, where consumers encounter hundreds of brands daily, a unique and well-crafted brand identity helps ensure your business is remembered and valued.',
    heading1: "The Core Elements of Brand Identity",
    description1: "A successful brand identity is built on more than just visual elements; it incorporates the mission, values, and personality of the business. Core elements like the brand’s logo, color scheme, and typography serve as visual markers, but the tone of voice, storytelling approach, and customer interactions create a holistic experience. Together, these elements convey a consistent message that resonates with the target audience, making the brand relatable and trustworthy. By aligning brand identity with company values, businesses create a meaningful connection that can lead to long-term customer loyalty.",
    heading2: "Adapting Brand Identity for a Digital World",
    description2: "In a digital-first world, brand identity needs to be adaptable and responsive across platforms. From social media profiles to website design, consistency is crucial for effective branding. Digital platforms offer opportunities for brands to engage audiences in real-time, allowing them to respond to current trends and customer feedback quickly. Adapting brand identity across digital touchpoints requires brands to consider each platform’s unique format while retaining a unified look and feel. By embracing digital flexibility, brands can reach diverse audiences while maintaining a strong and cohesive presence.",
    heading3: "Building Emotional Connections with Audiences",
    description3: "A powerful brand identity evokes emotions that resonate deeply with the audience. By using storytelling, brands can create narratives that speak to their customers’ values and aspirations, forming a bond that goes beyond transactional relationships. When a brand successfully taps into its audience’s emotions, it becomes part of their lifestyle or belief system, creating loyalty that is difficult for competitors to break. This connection is the foundation of many iconic brands and is essential for building a brand that lasts."
  },
  {
    id: 2,
    title: 'The Role of Technology in Shaping Modern Marketing',
    date: "07 November / 9 min read",
    imageUrl: news2,
    content: 'Technology has revolutionized marketing, enabling brands to reach consumers in new and innovative ways. From data-driven insights to artificial intelligence, technology has expanded the marketing toolkit, allowing for more targeted, personalized, and engaging campaigns. Understanding the role of technology in modern marketing is essential for businesses looking to stay competitive and relevant',
    heading1: "Data Analytics and Customer Insights",
    description1: "Data analytics has become a cornerstone of modern marketing, giving brands deep insights into consumer behavior, preferences, and trends. By analyzing data from various channels, companies can segment their audience, tailor their messaging, and predict future behavior. This data-driven approach makes marketing more efficient and impactful, as brands can reach their ideal customers with messages that truly resonate. In a data-driven marketing landscape, insights are not just helpful—they are essential for building strategies that align with customer needs and expectations.",
    heading2: "Personalization through Artificial Intelligence ",
    description2: "Artificial intelligence has taken personalization to new heights, allowing brands to deliver customized experiences to each customer. AI-powered tools can analyze user data in real-time, enabling brands to adapt content, product recommendations, and even website layouts based on individual preferences. This level of personalization makes consumers feel seen and understood, building loyalty and increasing the likelihood of conversion. As AI technology advances, the possibilities for personalization in marketing continue to grow, offering brands new ways to make each interaction meaningful.",
    heading3: "Augmented Reality as an Engagement Tool ",
    description3: "Augmented reality (AR) is quickly becoming a popular tool for creating interactive, memorable experiences. Brands can use AR to let customers visualize products in their own space, enhancing the shopping experience and building confidence in purchasing decisions. This technology is particularly effective for industries like retail and real estate, where customers want a realistic sense of the product. AR not only drives engagement but also sets brands apart as innovative and customer-focused, offering a cutting-edge experience that traditional marketing channels can’t match."
  },
  {
    id: 3,
    title: 'Top Digital Design Trends Shaping 2024',
    date: "07 October / 9 min read",
    imageUrl: img,
    content: 'Digital design is constantly evolving, with new trends emerging each year to keep up with advancements in technology and shifts in user preferences. In 2024, digital design continues to prioritize user experience and accessibility, creating visually engaging spaces that encourage interaction. Understanding these trends can help brands stay relevant, connect with their audience, and deliver memorable digital experiences',
    heading1: "Immersive 3D Design and Animation",
    description1: "The use of 3D elements in digital design has grown significantly, transforming simple interfaces into immersive experiences. These design elements give depth and realism to websites and apps, engaging users and encouraging exploration. By incorporating subtle animations, brands create a sense of interactivity that draws users deeper into their content. When used effectively, 3D designs don’t just enhance aesthetics; they offer users a richer experience, making the digital journey feel more lifelike and engaging.",
    heading2: "Minimalist Aesthetics with Bold Accents",
    description2: "Minimalism remains popular in 2024, but designers are combining it with bold colors and accents to make a statement. This approach creates clean, easy-to-navigate interfaces that still capture attention with vivid highlights. By removing unnecessary elements and focusing on essentials, brands can offer a seamless, intuitive experience. The bold accents are used sparingly but strategically, guiding users' eyes to important information or calls-to-action without overwhelming them. This balance of simplicity and statement-making accents defines a modern, professional look that appeals to a broad audience.",
    heading3: "Sustainable and Eco-Conscious Design Choices",
    description3: "As awareness of environmental issues grows, more brands are adopting sustainable design practices to align with eco-conscious values. This trend is evident in design choices like using natural color palettes, organic shapes, and eco-friendly materials. Brands are moving away from high-energy graphics and focusing on designs that consume less data and power, reducing their digital footprint. For eco-conscious consumers, these sustainable designs reflect a brand’s commitment to the environment, adding another layer of value and connection."
  },
  {
    id: 4,
    title: 'Unlocking the Power of Content Marketing in 2024',
    date: "07 November / 9 min read",
    imageUrl: img,
    content: 'Content marketing has evolved beyond blog posts and social media updates—it’s now a strategic approach that integrates storytelling, data-driven insights, and multimedia to captivate audiences. In 2024, content marketing remains a vital tool for businesses to build brand authority, engage audiences, and drive conversions. This blog explores the latest strategies that make content marketing impactful in today’s fast-paced digital world.',
    heading1: "The Shift Toward Value-Driven Content",
    description1: "Audiences today seek more than just product information; they want content that educates, entertains, or solves a problem. Value-driven content focuses on meeting these needs, offering information that users genuinely find beneficial. Brands that produce valuable, educational content build credibility and trust with their audience, positioning themselves as industry experts. For businesses, this means focusing less on self-promotion and more on delivering high-quality, relevant content that resonates with their audience's interests and concerns. This approach not only attracts users but also keeps them coming back, deepening their connection with the brand.",
    heading2: "Incorporating Visual and Interactive Content",
    description2: "With attention spans shrinking, visual and interactive content has become essential in capturing audience interest. Interactive elements like quizzes, polls, and infographics engage users directly, making them active participants rather than passive viewers. Video content, in particular, is more popular than ever and offers a dynamic way to present information that can’t be easily conveyed through text alone. By incorporating these visual and interactive elements, brands can make their content more engaging and memorable, creating a lasting impression on the audience.",
    heading3: "Leveraging User-Generated Content for Authenticity ",
    description3: "User-generated content (UGC) is a powerful way to build authenticity and foster community. When customers share their experiences with a brand’s products or services, it creates genuine, relatable content that potential customers find trustworthy. Encouraging users to create and share content, whether through social media posts, reviews, or testimonials, adds credibility to the brand and shows that it values its community. UGC not only strengthens brand image but also serves as social proof, encouraging others to engage with and trust the brand."
  },
  // Add more blogs as necessary
];



const NewsCard = () => {
  const navigate = useNavigate();

  const handleBlogClick = (blog) => {
    // Navigate to the detailed page of the blog and pass the blog data
    navigate(`/news/${blog.id}`, { state: { blog } });
  };



  return (
    <div className='mt-40'>
      <div className='w-11/12 mx-auto'>
        <h1 className='text-2xl uppercase font-Switzer-Medium md:text-4xl lg:text-5xl'>From the journal</h1>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">

        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white  rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={() => handleBlogClick(blog)}
          >
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-96 object-cover"
              
            />
            <div className="p-4">
              <h2 className="text-lg  font-Switzer-Medium text-gray1">{blog.title}</h2>
            </div>
          </div>
        ))}
      </div>


    </div>

  );
};

export default NewsCard;
