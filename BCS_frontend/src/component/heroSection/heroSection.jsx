import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../buttons/button';
import hero from './hero.jpg';
import hero2 from './hero2.jpg';
import hero3 from './hero3.jpg';
import hero1 from './hero1.jpg';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export const HeroSection = () => {
  const slides = [
    {
      background: hero,
      title: 'Learnership Programs:',
      description: 'Learnership programs are structured work-based training initiatives that combine theoretical education with practical experience, leading to a nationally recognized qualification.',
      link:  '/Academics/Learnership'

    },
    {
      background: hero1,
      title: 'Internship Programmes',
      description: `Learnerships are structured in 12-month long programmes in which a learner engages in theoretical and
      practical learning. Successful completion leads to an occupational related qualification registered on the
      National Qualification Framework (NQF) with the South African Qualifications Authority (SAQA).`,
      link: '/academics/internships',
    },
    {
      background: hero2,
      title: 'Employee skills development',
      description: `With our programmes we guarantee the employer that workers meet organizational standards, cuts down
        replacement costs and improves workplace performance` ,
      link: '/Academics/employee'
    },
    {
      background: hero3,
      title: 'RPL Programmes (prior learning)',
      description: 'This will assist those who still want to further their studies to get their previous skills and knowledge recognised at a college or university.',
      link: '/Academics/rpl'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    let timer;
    if (isInView) {
      timer = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 4000);
    }
    return () => clearInterval(timer);
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'tween',
        ease: 'easeOut',
        duration: 0.8
      }
    }
  };

  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative overflow-hidden pt-[60px] min-h-screen bg-primary"
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          className="inset-0 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className='text-3xl sm:text-4xl lg:text-8xl font-serif text-accent mb-4'>Our services:</h2>
          <TypeAnimation
            sequence={[
              slides[currentSlide].title,
              4000,
              '',
            ]}
            wrapper="h1"
            cursor={true}
            repeat={false}
            className='font-sans font-bold text-2xl sm:text-3xl md:text-4xl lg:text-7xl text-headline mb-6 sm:mb-8 text-center'
            style={{ whiteSpace: 'pre-line', display: 'block', minHeight: '2em' }}
          />
          <div className='flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl'> 
            <motion.img 
              key={currentSlide}
              src={slides[currentSlide].background} 
              alt="service illustration" 
              className='w-full sm:w-3/4 lg:w-1/2 rounded-lg mb-6 lg:mb-0 lg:mr-8'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />
            <div className='lg:w-1/2'>
              <p className='text-text text-base sm:text-lg md:text-xl lg:text-2xl mb-6 leading-relaxed'>
                {slides[currentSlide].description}
              </p>
              <div className='flex flex-col sm:flex-row justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4'>
                <Link to="/register">
                  <Button title="Register Now" className="w-full sm:w-auto bg-headline text-text hover:bg-accent duration-500 px-6 py-2 rounded-md" />
                </Link>
                <Link to={slides[currentSlide].link}>
                  <Button title="Learn more" className="w-full sm:w-auto bg-transparent border border-headline text-headline hover:bg-headline hover:text-text duration-500 px-6 py-2 rounded-md" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}