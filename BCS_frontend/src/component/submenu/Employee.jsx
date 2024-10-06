import {React, useEffect}from 'react'
import BG from '../images/emp_training.png'
import Coporate from '../images/coporateTraining.jpg'
import { Button } from '../buttons/button'
import { FaUsers, FaUser, FaCheckCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Employee = () => {
  useEffect(() => {
    document.title = " Employee Training – bcstraininginstitute";
  }, []);
  return (
    <>
      <div 
        className='mt-[6rem] min-h-[30vh] bg-cover  bg-primary bg-center bg-no-repeat flex flex-col justify-between items-center text-white relative '
        style={{ backgroundImage: `url(${BG})` }}
      >
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='relative z-10 text-center mb-8 mt-12 px-4'>
          <h1 className='text-4xl md:text-4xl font-bold text-headline leading-tight'>
            EXCEED <br /> EXPECTATIONS
          </h1>
        </div>
        <div className='flex flex-col lg:flex-row justify-between items-center lg:items-stretch relative z-10 w-full max-w-7xl px-4 mb-12'>
          <div className='bg-white bg-opacity-10 rounded-lg p-6 lg:p-8 flex-1 text-headline mb-8 lg:mb-0 w-full lg:w-auto'>
            <h3 className='text-2xl lg:text-3xl font-semibold mb-6 flex items-center'>
              <FaUsers className='mr-3' />
              Corporate <br /> Team Learning
            </h3>
            <hr className='border-t border-headline opacity-[9] my-6' />
            <ul className='mb-8 space-y-4'>
              {['Custom Training', 'Private Classes', 'Live Virtual'].map((item, index) => (
                <li key={index} className='flex items-center'>
                  <FaCheckCircle className='mr-3 text-green-400' />
                  {item}
                </li>
              ))}
            </ul>
            <Link to='/register'>
            <Button title="Get Started" className='w-full lg:w-auto bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300' />
          </Link>
          </div>
       
          <div className='bg-white bg-opacity-10 rounded-lg p-6 lg:p-8 flex-1 text-headline w-full lg:w-auto'>
            <h3 className='text-2xl lg:text-3xl font-semibold mb-6 flex items-center'>
              <FaUser className='mr-3' />
              Individual <br /> Bootcamps
            </h3>
            <hr className='border-t border-headline opacity-[9] my-6' />
            <ul className='mb-8 space-y-4'>
              {['Full Stack Coding', 'Business Analyst', 'Data Scientist'].map((item, index) => (
                <li key={index} className='flex items-center'>
                  <FaCheckCircle className='mr-3 text-green-400' />
                  {item}
                </li>
              ))}
            </ul>
            <Link to='/register'>
            <Button title="Get Started" className='w-full lg:w-auto bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300' />
            </Link>
          </div>
        </div>
      </div>
      <section className='flex flex-col lg:flex-row items-center justify-between py-16 px-4 lg:px-16 bg-gray-100'>
      <div className='w-full lg:w-1/2 mb-8 lg:mb-0'>
        <img 
          src={Coporate} 
          alt="Corporate Training" 
          className='w-full h-auto rounded-lg shadow-lg'
        />
      </div>
      <div className='w-full lg:w-1/2 lg:pl-16'>
        <h2 className='text-3xl lg:text-4xl font-bold text-gray-800 mb-6'>
          Employee Development Skills
        </h2>
        <p className='text-lg text-gray-600 leading-relaxed'>
          Employee training and development includes any activity that helps employees acquire new, or improve existing, knowledge or skills. Training is a formal process by which talent development professionals help individuals improve performance at work. Development is the acquisition of knowledge, skill, or attitude that prepares people for new directions or responsibilities.
        </p>
      </div>
    </section>

    <section>
    <div className='bg-bg rounded-lg p-6 lg:p-8 flex-1 text-headline mb-8 lg:mb-0 w-full lg:w-auto'>
          <h3 className='text-2xl lg:text-3xl font-semibold mb-6'>Benefits:</h3>
          <ul className='mb-8 space-y-4'>
            {[
              'Improves employee performance and productivity',
              'Addresses performance gaps due to lack of knowledge or skills',
              'Enhances team collaboration and communication',
              'Increases employee satisfaction and retention',
              'Fosters a culture of continuous learning and improvement',
              'Provides a competitive advantage in the market'
            ].map((item, index) => (
              <li key={index} className='flex items-center'>
                <FaCheckCircle className='mr-3 text-green-400' />
                {item}
              </li>
            ))}
          </ul>
          <Link to='/register'>
          <Button title="Get Started" className='w-full lg:w-auto bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300' />
          </Link>
        </div>
    </section>
    </>
  )
}