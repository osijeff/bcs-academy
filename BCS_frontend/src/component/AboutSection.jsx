import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import About from './images/about.jpg'
import { Button } from './buttons/button'
import { Link } from 'react-router-dom';

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2, margin: "0px 0px -200px 0px" });



  


  useEffect(() => {
    console.log("Is in view:", isInView);
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };

  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="w-full mx-auto px-4 py-10 md:py-20 bg-text relative overflow-hidden"
    >
      <div className="flex flex-col md:flex-row relative">
        <motion.div variants={itemVariants} className='w-full md:w-1/2 mb-8 md:mb-0'>
          <img className="w-full h-auto object-cover" src={About} alt="About us section" />
        </motion.div>
        
        <motion.div 
          variants={itemVariants} 
          className='w-full md:w-1/2 bg-headline text-text p-8 md:p-4 lg:p-8
                     md:absolute md:right-0 md:top-[30%] md:transform md:-translate-y-1/2
                     lg:right-[10%] xl:right-[15%]'
        >
          <motion.h2 variants={itemVariants} className='text-2xl md:text-3xl lg:text-3xl mb-4 md:mb-6 uppercase font-sans'>About Us</motion.h2>
          <motion.p variants={itemVariants} className='text-sm sm:text-base lg:text-[1rem] leading-[150%] font-light font-serif'>
            BCS ACADEMY is a learning and development project of
            Believers Care Society; a non profit organization focusing on
            developing unskilled and unemployed youth of SA.
            As a renowned accredited training centre and provider, BCS
            Academy aims to bridge skills gaps at the workplaces by
            extending its training programme to the business world, which
            in turn serves as a means of income generation and
            sustainability for its community development projects / Youth
            development centres. 
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link to='/About'>
            <Button  title="Learn More" className="mt-4 font-sans text-lg sm:text-xl md:text-2xl"/>
            </Link>
         
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}