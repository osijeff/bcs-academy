import React, {useState, useEffect, useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import BG from '../images/systems.png'
import axios from 'axios';
import Classroom from '../images/classroom.jpg'
import Map from '../images/map.jpg';
import { Button } from '../buttons/button';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { apiBaseUrl } from '../../config';



export const Contacts  = () => {
  const API_URL = apiBaseUrl 
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    setSuccess(null); // Clear previous success message

    try {
      const response = await axios.post(`${API_URL}/contact/`, formData);
      console.log('Message sent successfully:', response.data);
      setSuccess('Your message has been sent successfully!');
      setFormData({ first_name: '', last_name: '', email: '', phone: '', subject: '', message: '' }); // Reset form
    } catch (error) {
      console.error('Error sending message:', error.response ? error.response.data : error.message);
      setError(error.response ? error.response.data : 'An error occurred while sending your message.');
    }
  };


  useEffect(() => {
    document.title = "Contact Us – bcstraininginstitute";
  }, []);
  return (
    <div className="contact-page">
  
      <div className="hero-section  bg-cover bg-center bg-no-repeat h-[40rem] flex items-center justify-center" style={{backgroundImage: `url(${BG})`}}>
     
        <div className="text-center text-white">
    
          <h1 className="text-2xl md:text-6xl font-bold mb-4 uppercase text-headline w-[40rem]">Every thriving tree is grounded by strong roots.</h1>
          <div className="space-x-4">
            <h2 className="md:text-[5rem] mt-[4rem] text-headline border-2 border-solid font-serif border-accent p-4 rounded-lg">
              Contact Us
            </h2>
         
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Get in touch</h2>
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="first_name" className="block mb-2">First Name</label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="last_name" className="block mb-2">Last Name</label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block mb-2">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="block mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full p-2 border border-gray-300 rounded"
              required
            ></textarea>
          </div>
          <div className="mb-6">
            <ReCAPTCHA
              sitekey="YOUR_RECAPTCHA_SITE_KEY"
              onChange={() => {}}
            />
          </div>
          <div className="text-sm mb-6">
            This site is protected by reCAPTCHA and the Google{' '}
            <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline">Privacy Policy</a> and{' '}
            <a href="https://policies.google.com/terms" className="text-blue-600 hover:underline">Terms of Service</a> apply.
          </div>
          <Button title='Send Message' type="submit" className=" hover:bg-primary text-headline font-bold py-2 px-4 duration-500 ">
    
          </Button>
        </form>
      </div>
      <div className='bg-text flex flex-col md:flex-row items-center justify-center md:justify-start'>
      <img src={Classroom} alt="Class room" className='w-full md:w-1/2 h-64 md:h-[400px] object-cover' />
      <div className='flex text-headline flex-col justify-center p-6 md:pl-12 lg:pl-16 w-full md:w-1/2'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8'>Contact Information</h2>
        <div className='space-y-4 md:space-y-6'>
          <div className='flex items-center'>
            <FaPhone className='mr-3 text-accent text-2xl md:text-3xl' />
            <h2 className='text-lg md:text-xl lg:text-2xl'>Tel: +452 555 221 22</h2>
          </div>
          <div className='flex items-center'>
            <FaEnvelope className='mr-3 text-accent text-2xl md:text-3xl' />
            <h2 className='text-lg md:text-xl lg:text-2xl'>Mail Us At: BCSAcademy@bcsmail.com</h2>
          </div>
          <div className='flex items-start'>
            <FaMapMarkerAlt className='mr-3 text-accent text-2xl md:text-3xl mt-1' />
            <address className='not-italic text-lg md:text-xl lg:text-2xl'>
              Address: 123 BCS ACADEMY Building, Johannesburg, South Africa
            </address>
          </div>
        </div>
        <div className='mt-6 md:mt-8'>
          <h3 className='text-xl md:text-2xl font-semibold mb-3'>Follow Us</h3>
          <div className='flex space-x-4'>
            <a href="#" className='text-accent hover:text-blue-800 transition-colors'>
              <FaFacebookF className='text-2xl md:text-3xl' />
            </a>
            <a href="#" className='text-accent hover:text-blue-600 transition-colors'>
              <FaTwitter className='text-2xl md:text-3xl' />
            </a>
            <a href="#" className='text-accent hover:text-blue-900 transition-colors'>
              <FaLinkedinIn className='text-2xl md:text-3xl' />
            </a>
            <a href="#" className='text-accent hover:text-pink-800 transition-colors'>
              <FaInstagram className='text-2xl md:text-3xl' />
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

