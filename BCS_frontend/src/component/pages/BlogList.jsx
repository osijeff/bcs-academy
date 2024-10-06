import React, { useRef, useEffect } from 'react';
import blog1 from '../images/about.jpg'
import blog2 from '../images/training.jpg'
import authorImage from '../images/author1.jpg'
import authorImage2 from '../images/author2.jpg'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const NewsEvents = ({ title, excerpt, author, date, category, image, authorImage }) => (

  
<div className="bg-headline shadow-lg rounded-lg overflow-hidden mb-8 relative">
  <div className="relative">
    <img src={image} alt={title} className="w-full h-52 object-cover" />
    <div className="absolute inset-0 bg-black opacity-80"></div>
  </div>
  <img
  src={authorImage}
  alt=""
  className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] rounded-full absolute top-[20%] sm:top-[25%] md:top-[28%] left-[20px] sm:left-[30px] md:left-[50px]"
/>
    <div className="p-6">
      <div className="flex items-center my-8">
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">{category}</span>
        <span className="text-gray-600 text-sm">{date}</span>
      </div>
      <h2 className="text-2xl text-accent font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{excerpt}</p>
      <div className="flex items-center justify-between">
        
        <span className="text-gray-600 text-sm">{author}</span>
        <button className="text-blue-600 hover:text-blue-800 font-semibold">Read More »</button>
      </div>
    </div>
  </div>
);

const BlogSidebar = () => (
  <div className="bg-primary p-6 shadow-lg rounded-lg">
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Search</h2>
      <input
        type="text"
        placeholder="Search for..."
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Latest News</h2>
      <ul className="space-y-4">
        <li>
          <a href="#" className="text-blue-600 hover:underline">The Power of Gamification in Education</a>
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:underline">Leveraging Data Analytics in Education</a>
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:underline">The Role of Digital Literacy in Modern Education</a>
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:underline">Measuring Success</a>
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:underline">Inclusive Digital Learning</a>
        </li>
      </ul>
    </div>

    <div>
      <h2 className="text-2xl font-bold mb-4">Archives</h2>
      <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option>Select Month</option>
        <option>January</option>
        <option>February</option>
        <option>March</option>
        <option>April</option>
        <option>May</option>
        <option>June</option>
        <option>July</option>
        <option>August</option>
        <option>September</option>
        <option>October</option>
        <option>November</option>
        <option>December</option>
      </select>
    </div>
  </div>
);

const BlogList = () => {
  const blogPosts = [
    {
      title: "International Day of the Girl Child",
      excerpt: "Significance It takes no amount of imagination to realise the significance of International Day of Girls. As an international day, we must remember their everyday",
      author: "Sean Eagle",
      date: "11 October 2022",
      category: "Articles",
      image: blog1,
      authorImage: authorImage
    },
    {
      title: "Leveraging Social Media for Learning Purposes",
      excerpt: "An increase in self-directed, online learning has transformed education dramatically, especially in the last three years. Online learning and adult education include training, coaching, mentoring,",
      author: "Sean Eagle",
      date: "12 September 2022",
      category: "Articles",
      image: blog2,
      authorImage: authorImage
    },
    {
      title: "Leveraging Social Media for Learning Purposes",
      excerpt: "An increase in self-directed, online learning has transformed education dramatically, especially in the last three years. Online learning and adult education include training, coaching, mentoring,",
      author: "Sean Eagle",
      date: "12 September 2022",
      category: "Articles",
      image: blog2,
      authorImage: authorImage2
    },
    {
      title: "Leveraging Social Media for Learning Purposes",
      excerpt: "An increase in self-directed, online learning has transformed education dramatically, especially in the last three years. Online learning and adult education include training, coaching, mentoring,",
      author: "Sean Eagle",
      date: "12 September 2022",
      category: "Articles",
      image: blog2,
      authorImage: authorImage2
    },
    // Add more blog posts here
  ];

  useEffect(() => {
    document.title = "Blog – bcstraininginstitute";
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 mt-[10rem]">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Latest News</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <NewsEvents key={index} {...post} />
            ))}
          </div>
        </div>
        <div className="lg:w-1/4">
          <BlogSidebar />
        </div>
      </div>
  
    </div>
  );
};

export default BlogList;