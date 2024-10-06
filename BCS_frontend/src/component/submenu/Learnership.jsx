import React, { useEffect, useState } from 'react'
import { FaUsers, FaChartLine, FaMoneyBillWave } from 'react-icons/fa';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { apiBaseUrl } from '../../config';
export const Learnership = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

const API_URL = apiBaseUrl 

useEffect(() => {
  const fetchCourses = async () => {
    try {
      const response = await axios.get(`${API_URL}/courses/`);
      setCourses(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching courses:', err);
      setError('Failed to fetch courses');
      setLoading(false);
    }
  };

  fetchCourses();
}, [API_URL]);
  console.log('Course data:', courses);

  return (
    <>
      <div className='pt-16 sm:pt-20 md:pt-24 lg:pt-28 bg-primary w-full flex flex-col min-h-[70vh] items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-serif text-headline text-center mb-4 sm:mb-6 md:mb-8'>
          Accredited Learnerships
        </h1>
        <p className='w-full sm:w-[80%] md:w-[70%] lg:w-[60%] text-base sm:text-lg md:text-xl lg:text-2xl text-center'>
          We provide a wide range of SETA Accredited Learnerships that are applicable across various industries, such as Administration, Management, Cleaning, Retail, Call Centers, Hospitality, Freight, and Information Technology.
        </p>
      </div>

      {/* Course Listing */}
      <div className='w-full p-4 sm:p-6 md:p-8 lg:p-12'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold mb-6'>Our Courses</h2>
        {loading ? (
          <p>Loading courses...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {courses.map((course) => (
              <Link to={`/course/${course.id}`} key={course.id} className='block'>
                <div className='border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow'>
                <img 
  src={`${API_URL}${course.img}`} alt={course.title} className='w-full h-48 object-cover'
  onError={(e) => {
    console.error("Error loading image:", e.target.src);
    e.target.src = 'https://via.placeholder.com/150'; // Fallback image
  }}
/>
                  <div className='p-4'>
                    <h3 className='font-semibold text-lg mb-2'>{course.title}</h3>
                    <p className='text-sm text-gray-600'>{course.category.title}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className='w-full flex flex-col lg:flex-row justify-between p-4 sm:p-6 md:p-8 lg:p-12 bg-text'>
        {/* ENHANCE YOUR TEAM'S SKILLS */}
        <div className='w-full lg:w-[30%] mb-8 lg:mb-0 flex flex-col items-center'>
          <FaUsers className='text-4xl sm:text-5xl text-headline mb-4' />
          <h3 className='text-xl sm:text-2xl text-accent text-center mb-4 uppercase'>ENHANCE YOUR TEAM'S SKILLS</h3>
          <p className='text-headline text-center text-base sm:text-lg md:text-xl leading-relaxed font-sans font-light'>
            Learnerships offer an excellent opportunity to elevate your staff's 
            skills and qualifications while optimizing your BBBEE expenditure.
          </p>
        </div>

        {/* GAIN TAX ADVANTAGES */}
        <div className='w-full lg:w-[30%] mb-8 lg:mb-0 flex flex-col items-center'>
          <FaChartLine className='text-4xl sm:text-5xl text-headline mb-4' />
          <h3 className='text-xl sm:text-2xl text-accent text-center mb-4 uppercase'>GAIN TAX ADVANTAGES</h3>
          <p className='text-headline text-center text-base sm:text-lg md:text-xl leading-relaxed font-sans font-light'>
            Learnerships provide a range of tax incentives and benefits,
            tailored to the size of your business and your BBBEE requirements.
          </p>
        </div>

        {/* FOSTER ECONOMIC GROWTH */}
        <div className='w-full lg:w-[30%] flex flex-col items-center'>
          <FaMoneyBillWave className='text-4xl sm:text-5xl text-headline mb-4' />
          <h3 className='text-xl sm:text-2xl text-accent text-center mb-4 uppercase'>FOSTER ECONOMIC GROWTH</h3>
          <p className='text-headline text-center text-base sm:text-lg md:text-xl leading-relaxed font-sans font-light'>
            Learnerships play a vital role in strengthening the South African economy by upskilling citizens and enhancing the overall workforce.
          </p>
        </div>
      </div>
    </>
  )
}