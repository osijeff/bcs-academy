import React, { useRef, useEffect} from 'react';
import RplHero from '../images/RPL.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    image: RplHero,
    text: "The RPL process was straightforward and helped me fast-track my qualification. Highly recommended!",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: RplHero,
    text: "I was amazed at how my work experience translated into academic credit. It saved me both time and money.",
  },
  {
    id: 3,
    name: "Mike Johnson",
    image: RplHero,
    text: "The RPL assessment was thorough and fair. It's a great way to leverage your professional experience.",
  },
];

export const RPL = () => {
  const formRef = useRef(null);

  useEffect(() => {
    document.title = "RPL – bcstraininginstitute";
  }, []);

  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
    <div 
      className="bg-primary flex flex-col lg:flex-row items-center lg:items-start justify-between py-8 pt-[10rem] px-4 lg:px-12 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${RplHero})`,
      }}
    >
      <div className="w-full lg:w-2/3 max-w-4xl mx-auto text-headline text-center lg:text-left mb-8 lg:mb-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
          Recognition of Prior Learning
        </h1>
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-8">
          Assessing Your Skills for Academic Credit
        </h3>
        <h4 className="bg-accent text-headline p-4 sm:p-6 rounded-l-3xl text-lg sm:text-xl md:text-2xl lg:text-3xl italic mb-8">
          Client Voices: Their Experiences with Us
        </h4>
        <Swiper 
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="w-full max-w-2xl mx-auto"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className=" rounded-lg shadow-lg p-4 sm:p-6">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-16 h-16 sm:w-24 sm:h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-headline text-base sm:text-lg md:text-xl lg:text-2xl italic mb-4">{testimonial.text}</p>
              <p className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl">{testimonial.name}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <form ref={formRef} id="application-form"  className="bg-primary shadow-md rounded-lg p-4 sm:p-6 lg:p-8 space-y-4 w-full lg:w-1/3 max-w-md mx-auto lg:mx-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2 md:col-span-1">
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">First Name (Required)</label>
            <input type="text" id="first-name" name="first-name" required className="mt-1 block w-full px-3 py-2 border-gray-300 rounded-sm shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="First Name" />
          </div>
          <div className="sm:col-span-2 md:col-span-1">
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">Last Name (Required)</label>
            <input type="text" id="last-name" name="last-name" required className="mt-1 block w-full px-3 py-2 border-gray-300 rounded-sm shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Last Name" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Enter your Email (Required)</label>
            <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 border-gray-300 rounded-sm shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Email" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Mobile Number (Required)</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 py-2 rounded-l-sm border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">+27</span>
              <input type="tel" id="phone" name="phone" required className="mt-1 block w-full px-3 py-2 border-gray-300 rounded-r-sm shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Phone Number" />
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="learning-interest" className="block text-sm font-medium text-gray-700 mb-1">What are you interested in learning? (Required)</label>
          <select id="learning-interest" name="learning-interest" required className="mt-1 block w-full px-3 py-2 border-gray-300 rounded-sm shadow-sm focus:ring-blue-500 focus:border-blue-500">
            <option value="">Select a course</option>
            <option value="computer-course">Computer Course End-User Computing</option>
            <option value="office-skills">Office skills and Administration</option>
            <option value="certificate-office-admin">Certificate –Office Administration- level.5 ICB</option>
            <option value="higher-certificate-office-admin">Higher Certificate: Office Administration- Level.5</option>
            <option value="nd-office-admin">ND: Office administration-Level.6 ICB</option>
            <option value="nc-human-resource">National Certificates: Human resource management N4-N6</option>
          </select>
        </div>
        <div>
          <label htmlFor="learning-method" className="block text-sm font-medium text-gray-700 mb-1">How do you want to learn? (Required)</label>
          <select id="learning-method" name="learning-method" required className="mt-1 block w-full px-3 py-2 border-gray-300 rounded-sm shadow-sm focus:ring-blue-500 focus:border-blue-500">
            <option value="">Select a learning method</option>
            <option value="apprenticeships-workplace-learning">Apprenticeships and Workplace Learning</option>
            <option value="flexible-study-online">Flexible Study with Online Learning</option>
            <option value="rpl-skills-recognition">Get My Skills Recognised with RPL</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="start-time" className="block text-sm font-medium text-gray-700 mb-1">When do you want to get started? (Required)</label>
          <select id="start-time" name="start-time" required className="mt-1 block w-full px-3 py-2 border-gray-300 rounded-sm shadow-sm focus:ring-blue-500 focus:border-blue-500">
            <option value="">Select a start time</option>
            <option value="now">Now</option>
            <option value="next-1-3-months">Next 1-3 months</option>
            <option value="within-six-months">Within six months</option>
          </select>
        </div>
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">What state do you reside in? (Required)</label>
          <select id="state" name="state" required className="mt-1 block w-full px-3 py-2 border-gray-300 rounded-sm shadow-sm focus:ring-blue-500 focus:border-blue-500">
            <option value="">Select a province</option>
            <option value="eastern-cape">Eastern Cape</option>
            <option value="free-state">Free State</option>
            <option value="gauteng">Gauteng</option>
            <option value="kwazulu-natal">KwaZulu-Natal</option>
            <option value="limpopo">Limpopo</option>
            <option value="mpumalanga">Mpumalanga</option>
            <option value="northern-cape">Northern Cape</option>
            <option value="north-west">North West</option>
            <option value="western-cape">Western Cape</option>
          </select>
        </div>
        <div>
          <label htmlFor="captcha" className="block text-sm font-medium text-gray-700 mb-1">Prove you're not a robot:</label>
          <input type="text" id="captcha" name="captcha" required className="mt-1 block w-full px-3 py-2 border-gray-300 rounded-sm shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Type the text shown" />
        </div>
        <button 
          type="submit"
          className="bg-accent text-white font-bold py-2 px-4 rounded hover:bg-opacity-80 transition duration-300 w-full"
        >
          Submit Now
        </button>
      </form>
    </div>
    <div className='flex flex-col sm:flex-row p-4 sm:p-6 md:p-8 lg:p-11 items-center justify-between border-b border-y-primary'>
  <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-[5rem] font-serif mb-4 sm:mb-0'>What is RPL?</h2>
  <p className="text-white text-base sm:text-lg md:text-xl max-w-2xl mx-auto sm:ml-6">
    Recognition of Prior Learning (RPL) is a process that allows you to receive formal recognition for skills and knowledge you've gained through work, life experiences, and other training.
  </p>
</div>

<h2 className='text-center p-4 sm:p-6 md:p-8 text-2xl sm:text-3xl md:text-4xl font-serif'>
  The Benefits of Recognition of Prior Learning (RPL)
</h2>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 text-white px-4">
  <div className="bg-accent p-4 rounded-lg">
    <h4 className="font-bold text-xl mb-2">Save Time</h4>
    <p>Fast-track your qualification by getting credit for what you already know.</p>
  </div>
  <div className="bg-accent p-4 rounded-lg">
    <h4 className="font-bold text-xl mb-2">Save Money</h4>
    <p>Reduce the cost of your education by avoiding unnecessary coursework.</p>
  </div>
  <div className="bg-accent p-4 rounded-lg">
    <h4 className="font-bold text-xl mb-2">Career Advancement</h4>
    <p>Gain formal recognition of your skills to boost your career prospects.</p>
  </div>
</div>

<div className="bg-text text-white py-8 sm:py-12 text-center mt-8 text-headline px-4">
  <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Get Started?</h2>
  <p className="mb-6">Take the first step towards recognizing your skills and advancing your career.</p>
  <button 
    onClick={scrollToForm} 
    className="text-headline bg-accent text-xl sm:text-2xl md:text-3xl font-bold py-2 px-6 rounded-full hover:bg-primary transition duration-300"
  >
    Apply Now
  </button>
</div>
    </>
  );
};