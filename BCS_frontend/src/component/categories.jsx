import React, { useState } from 'react';
import { Button } from './buttons/button';
import { FaBookOpen, FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Callcenter from './images/callcenter.png' 
import Training from './images/coporateTraining.jpg'
import Rpl from './images/rpl.jpg'
import Trainingstaff from './images/training.jpg'
import Modal from './modal';
import QuoteForm from './QuoteForm';

export const Categories = () => {
    const courses = [
        {
          title: "Learnerships programmes",
          description: `Learnerships are structured in 12-month long programmes in which a learner engages in theoretical and practical learning. Successful completion leads to an occupational related qualification registered on the National Qualification Framework (NQF) with the South African Qualifications Authority (SAQA).`,
          img:  Callcenter,
          link: "Academics/Learnership"
        },
        {
          title: "Internship Programmes",
          description: `Learnerships are structured in 12-month long programmes in which a learner engages in theoretical and practical learning. Successful completion leads to an occupational related qualification registered on the National Qualification Framework (NQF) with the South African Qualifications Authority (SAQA).`,
          img : Trainingstaff,
          link: "academics/internships"
        },
        {
          title: "Employee skills development",
          description: `With our programmes we guarantee the employer that workers meet organizational standards, cuts down replacement costs and improves workplace performance.`,
          img:  Training,
          link: "/Academics/employee"
        },
        {
          title: "RPL Programmes",
          description: `This will assist those who still want to further their studies to get their previous skills and knowledge recognised at a college or university.`,
          img:  Rpl,
          link: "/Academics/rpl"
        },
    ];
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  return (
    <>
    <div className='flex flex-col md:flex-row justify-between items-center w-full bg-primary p-4 md:p-8'>
        <div className='md:ml-[8%] mb-4 md:mb-0'>
            <h2 className='text-3xl md:text-5xl lg:text-[4.6rem] font-bold mb-4'>
                <FaBookOpen className='inline-block mr-2 text-4xl md:text-5xl lg:text-[4rem]'/>
                Accredited Training Solutions
            </h2>
           <h3 className='text-lg md:text-xl lg:text-[1.6rem] max-w-3xl'>
             We are committed to advancing skills development through targeted training interventions, equipping South Africa's future workforce, and helping you maximize your B-BBEE points while minimizing costs.
           </h3>
        </div>
        <Button onClick={openModal} title="Get a Quote now" className="text-lg md:text-xl lg:text-2xl px-4 py-2 md:w-auto" />
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-[90%] mx-auto px-4 py-10'>
        {courses.map((course, index) => (
            <div key={index} className='flex flex-col md:flex-row bg-text text-headline rounded-lg overflow-hidden shadow-lg'>
                <div className='w-full md:w-1/2 h-64 md:h-auto overflow-hidden'>
                    <img 
                        src={course.img} 
                        alt={course.title} 
                        className='w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-125'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-between'>
                    <div>
                        <h3 className='text-2xl md:text-3xl font-serif mb-2'>{course.title}</h3>
                        <p className='text-sm md:text-base'>{course.description}</p>
                    </div>
                    <Link to={course.link} className='mt-4 flex items-center hover:text-primary text-accent transition-colors duration-300'>
                        <span className='mr-2'>Read More</span>
                        <FaArrowRight />
                    </Link>
                </div>
            </div>
        ))}
    </div>
    <Modal isOpen={isModalOpen} onClose={closeModal}>
       <QuoteForm  closeModal={closeModal}/>
      </Modal>
    </>
  )
}