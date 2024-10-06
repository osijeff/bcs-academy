import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { HeroSection } from '../heroSection/heroSection'
import About from '../images/about.jpg'
import { Button } from '../buttons/button'
import { Categories } from '../categories'
import Accreditions from '../accreditions'
import { Prospetus } from '../Prospetus'
import { AboutSection } from '../AboutSection';
import ContactUs from '../ContactUs';

export const Home = () => {
  useEffect(() => {
    document.title = " Home – bcstraininginstitute";
  }, []);
  return (
    <>
      <HeroSection />

     <AboutSection />
      <Categories />
      <Accreditions />
      <Prospetus />
      <ContactUs />
 
    </>
  )
}