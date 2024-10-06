import React, { useState } from 'react';
import { Button } from '../buttons/button';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export const Footer = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { firstName, email });
    // Reset form fields
    setFirstName('');
    setEmail('');
  };
  return (
    <footer className="bg-primary text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">OUR SOLUTIONS</h3>
          <ul className="space-y-2">
            <li><Link to="/Academics/Learnership" className="text-lg hover:text-accent transition-colors duration-300">Accredited Learnerships</Link></li>
            <li><Link to="/academics/internships" className="text-lg hover:text-accent transition-colors duration-300">Internship programmes</Link></li>
            <li><Link to="/Academics/employee" className="text-lg hover:text-accent transition-colors duration-300">Employee skills development</Link></li>
            <li><Link to="/Academics/rpl" className="text-lg hover:text-accent transition-colors duration-300">RPL Programmes</Link></li>
          </ul>
        </div>
        <div>
        <h3 className="text-xl font-bold mb-4">Recent Post</h3>
           <ul className="space-y-2">
            <li><Link Link to="/enterprise-supplier-development" className="text-lg hover:text-accent transition-colors duration-300">Enterprise & Supplier Development (Procurement)</Link></li>
            <li><Link Link to="/skills-development" className="text-lg hover:text-accent transition-colors duration-300">Skills Development</Link></li>
            <li><Link Link to="/management-control" className="text-lg hover:text-accent transition-colors duration-300">Management Control</Link></li>
            <li><Link Link to="/socio-economic-development" className="text-lg hover:text-accent transition-colors duration-300">Socio-Economic Development</Link></li>
          </ul> 
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">USEFUL LINKS</h3>
          <ul className="space-y-2">
            <li><Link to="/work-readiness" className="text-lg hover:text-accent transition-colors duration-300">Work Readiness Programme</Link></li>
          
            <li><Link to="/resources" className="text-lg hover:text-accent transition-colors duration-300">Resources</Link></li>
            <li><Link to="/policy" className="text-lg hover:text-accent transition-colors duration-300">Privacy Policy</Link></li>
            <li><Link to="/cookie-policy" className="text-lg hover:text-accent transition-colors duration-300">Cookie Policy</Link></li>
            <li><Link to="/case-studies" className="text-lg hover:text-accent transition-colors duration-300">Case Studies</Link></li>
          </ul>
        </div>
        


        
        <div>
         
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Subscribe to Our Newsletter</h2>

<form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-6 bg-bg rounded-lg shadow-md">
     
      
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <Button
        type="submit" title="Subscribe"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-primary transition duration-500 ease-in-out"
      >
   
      </Button>
    </form>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <h3 className="text-xl font-bold mb-4">FOLLOW US</h3>
        <div className="flex justify-center space-x-4">
        <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">
            <FaFacebookF size={24} />
          </a>
          <a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">
            <FaLinkedinIn size={24} />
          </a>
          <a href="https://www.youtube.com/channel/yourchannelid" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">
            <FaYoutube size={24} />
          </a>
          
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">
            <FaInstagram size={24} />
          </a>
       
        </div>
      </div>
      
      <div className="mt-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} BCS Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};