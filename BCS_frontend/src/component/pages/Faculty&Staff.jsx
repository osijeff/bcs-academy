import React, { useRef, useEffect } from 'react';
import Staffcover from '../images/staffcover.jpg'
import teacher1 from '../images/teacher1.jpg'
import teacher3 from '../images/teacher3.jpg'
import teacher4 from '../images/teacher4.jpg'
import teacher5 from '../images/teacher2.jpg'
import principal from '../images/principal.jpg'

const FacultyStaff = () => {
  const listOfStaff = [
    { name: "Dr. Jane Doe", title: "Professor of Biology", expertise: "Expert in environmental science and sustainability.", image: teacher1 },
    { name: "Mr. John Smith", title: "Lecturer in Mathematics", expertise: "Passionate about teaching calculus and statistics.", image: teacher3 },
    { name: "Ms. Emily Johnson", title: "Assistant Professor of Literature", expertise: "Specializes in contemporary fiction and poetry.", image: teacher4 },
    { name: "Dr. Michael Brown", title: "Associate Professor of Chemistry", expertise: "Focuses on organic synthesis and green chemistry.", image: teacher5 },
    { name: "Prof. Sarah Lee", title: "Head of Computer Science", expertise: "Researches artificial intelligence and machine learning.", image: teacher1 },
    { name: "Dr. Robert Wilson", title: "Professor of Physics", expertise: "Expert in quantum mechanics and theoretical physics.", image: teacher3 },
    { name: "Ms. Laura Martinez", title: "Instructor of Art History", expertise: "Specializes in Renaissance and Baroque art periods.", image: teacher4 },
    { name: "Dr. David Chen", title: "Associate Professor of Economics", expertise: "Focuses on international trade and development economics.", image: teacher5 },
  ];

  useEffect(() => {
    document.title = " Faculty & Staff – bcstraininginstitute";
  }, []);
  return (
    <div className=''>
      <div 
        className="bg-cover bg-center bg-no-repeat mx-auto px-4 py-16 md:py-24 lg:py-32 text-headline min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] flex flex-col justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Staffcover})`
        }}
      >
        <div className="container mx-auto pt-16">
          <h4 className="text-xl md:text-2xl font-bold md:pl-6 text-accent font-serif">Meet Our Faculty & Staff</h4>
          
          <section className="bg-white rounded-lg p-6 md:p-8 max-w-full md:max-w-[80%] lg:max-w-[60%] xl:max-w-[50%]">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-700 mb-4">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Our dedicated faculty and staff are committed to providing a high-quality education and fostering student success. With a wealth of experience and passion for teaching, they create an engaging and supportive learning environment.
            </p>
          </section>
        </div>
      </div>
      
      <section className="mb-12">
        <div className='flex justify-center flex-col h-auto py-8 md:py-12 text-headline bg-primary items-center'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-serif mb-4'>Our Teachers</h2>
          <h3 className='italic w-full md:w-3/4 lg:w-1/2 font-sans text-base md:text-lg text-center px-4'>Meet our team of dedicated and passionate educators who bring a wealth of knowledge and experience to inspire and guide our students to success</h3>
        </div>
      
        <div className='flex flex-wrap justify-center bg-primary w-full md:w-[90%] lg:w-[80%] mx-auto'>
          {listOfStaff.map((faculty, index) => (
            <div key={index} className="bg-headline w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
              <div className="flex flex-col gap-3 h-full">
                <img src={faculty.image} alt={faculty.name} className="w-full h-48 object-cover" />
                <h3 className="font-bold text-lg">{faculty.name}</h3>
                <p className="text-gray-700 text-sm">{faculty.title}</p>
                <p className="text-gray-600 text-xs mt-auto">{faculty.expertise}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className='bg-bg flex flex-col md:flex-row pl-10'>
        <div className='w-full md:w-1/2 p-6 md:pl-[8rem] flex flex-col justify-center'>
  <div className=' w-[72%] border-l-[10px] border-l-accent border-l-solid pl-16 text-headline'>
    <h4 className='text-lg md:text-xl font-semibold mb-2'>A Word</h4>
    <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4'>From Our Principal</h2>
    <p className='text-sm md:text-base mb-6' style={{lineHeight: '150%'}}>
    It is with great pride and excitement that I welcome you to our school's website. As the principal of BCS Academy I am honored to lead an institution that stands at the forefront of educational excellence and innovation.

Our mission at BCS Academy is to cultivate a nurturing environment where every student can thrive academically, socially, and emotionally.
    </p>
    <h3 className='text-lg md:text-xl font-semibold'>Jessica Austin</h3>
  </div>
  </div>
  
  <div className='w-full md:w-1/2'>
    <img 
      src={principal} 
      alt="principal" 
      className='w-full h-64 md:h-full object-cover'
    />
  </div>
</section>
    </div>
  )
}

export default FacultyStaff