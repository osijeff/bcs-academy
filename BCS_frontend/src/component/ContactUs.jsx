import React, { useEffect, useRef } from 'react';
import backgroundImage from '../component/images/johannesburg.jpg';

import { Button } from './buttons/button';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  const textRef = useRef(null);


  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div 
      className="relative py-16 h-[600px] md:py-34 lg:py-28 px-4 bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-text opacity-80"></div>
      
      <div 
        ref={textRef}
        className="relative z-10 max-w-4xl mx-auto text-center text-white opacity-0 translate-y-10 transition-all duration-[5000ms] ease-out"
      >
        <h2 className="text-3xl md:text-8xl lg:text-5xl font-bold mb-8 text-headline">Get in touch</h2>
        <p className="text-xl md:text-[3rem] leading-[80%] text-headline font-semibold mb-8">Plant the seed, witness the growth.</p>
        <p className="text-lg md:text-[1.8rem] mb-8 text-headline">
          Get in touch today to discover how our training solutions can elevate your company's potential.
        </p>
        <div className="space-y-4">
          <p className="text-lg md:text-[2rem] text-headline"><strong>Phone:</strong> +1 (123) 456-7890</p>
          <p className="text-lg md:text-[2rem] text-headline"><strong>Email:</strong> info@bcsatraining.com</p>
          <p className="text-lg md:text-[2rem] text-headline"><strong>Address:</strong> 123 Training Street, Education City, 12345</p>
        </div>
        <Link to="/Contacts" className="mt-8 inline-block">
          <Button 
            title='Contact Us Today' 
            className="bg-blue-600 hover:bg-blue-700 text-headline text-[2rem] font-bold py-2 px-6 transition duration-300"
          />
        </Link>
      </div>
    </div>
  );
};

export default ContactUs;