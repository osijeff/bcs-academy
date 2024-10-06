import React, { useRef, useEffect } from 'react';
import Aboutus from '../heroSection/hero1.jpg'
import { Button } from '../buttons/button'
import Profile from '../files/profile.pdf'
import staff1 from "../images/teacher1.jpg"
import staff2 from "../images/teacher2.jpg"
import staff3 from "../images/teacher3.jpg"
import staff4 from "../images/teacher4.jpg" 
import Accreditions from '../accreditions'

export const About = () => {
  
    useEffect(() => {
    document.title = "About Us – bcstraininginstitute";
  }, []);


  return (
    <>
      <div 
        className='h-[20rem] sm:h-[25rem] md:h-[30rem] mt-[3rem] sm:mt-[4rem] md:mt-[5rem] bg-primary relative flex items-center justify-start'
        style={{
          backgroundImage: `url(${Aboutus})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl font-bold text-white z-10 relative text-headline text-left px-4 shadow-lg'>Get To Know <br /> Who We Are</h2>
      </div>
   
      <div className='flex flex-col md:flex-row h-auto md:h-[400px] bg-gray-100 items-center justify-between p-6 md:p-10'>
  <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-6 md:mb-0 md:w-1/3'>Our Story</h2>
  <div className='flex flex-col items-start md:w-2/3'>
    <p className='w-full lg:w-[70%] xl:w-[80%] text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-loose mb-6 '>
      BCS Academy is a learning & development institution that was established in 2011 with the aim to bridge skills gaps at the
      workplaces by extending its training programme to the business world as well as unemployed youth.
      Our main target is to address the scarce skills and equip both unskilled and skilled people with more advanced skills that
      will improve quality of both life and work.
    </p>
    <a 
      href={Profile}
      download 
      className='bg-accent text-headline py-2 px-4 rounded-md hover:bg-primary transition duration-300 ease-in-out text-sm md:text-base text-center'
    >
      Company Profile
    </a>
  
  </div>
</div>
<section className='flex flex-col lg:flex-row bg-gray-100 overflow-hidden'>
  <div className='lg:w-1/2 relative'>
    <div className='w-full h-full overflow-hidden'>
      <img 
        src={Aboutus} 
        alt="About Us" 
        className='w-full h-full object-cover'
      />
    </div>
    <div 
      className='absolute inset-0 bg-bg' 
      style={{
        clipPath: 'polygon(65% 0, 100% 0, 100% 100%, 100% 100%)',
      }}
    ></div>
    <h2 className='
      absolute 
      text-3xl sm:text-4xl 
      font-bold 
      text-white 
      whitespace-nowrap
      top-4 left-4
      lg:top-1/2 lg:right-0 lg:left-auto
      lg:transform lg:-translate-y-[670%] lg:translate-x-[90%] lg:rotate-90 lg:origin-left  text-headline
    '>
      Company Objectives
    </h2>
  </div>
  <div className='lg:w-1/2 p-6 lg:p-12 bg-bg text-headline'>
    <div className='space-y-6'>
      <p className='text-sm sm:text-base lg:text-lg text-white leading-relaxed'>
        To assist organizations, develop a strong learning culture where employees develop new
        innovations or novel process improvements through workplace training and the skills
        development.
      </p>
      <p className='text-sm sm:text-base lg:text-lg text-white leading-relaxed'>
        To ensure Learning and Development fosters workplace training for professional growth,
        upskilling, and team improvement for employees through ensuring training is treated as an
        investment by organisations.
      </p>
      <p className='text-sm sm:text-base lg:text-lg text-white leading-relaxed'>
        Ensuring employee training programs and development opportunities are an essential
        feature of successful organizations, enabling them to upskill team members and drive
        productivity levels.
      </p>
      <p className='text-sm sm:text-base lg:text-lg text-white leading-relaxed'>
        Ensuring that these programs are not a means to fill knowledge gaps; but are strategic
        investments in people, fostering a culture of continuous improvement and adaptability.
      </p>
    </div>
  </div>
</section>

<section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-3xl mx-auto space-y-8 sm:space-y-12">
    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
      <Button 
        title='Our Vision'
        className=" text-white  text-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
      />
      <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
        Quality training programme that exceeds set standard
      </p>
    </div>
    
    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
      <Button 
        title='Our Mission'
        className=" text-white  text-lg font-semibold shadow-md hover:bg-green-700 transition duration-300 ease-in-out"
      />
      <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
        To employ integrative learning strategy that does not only
        addresses the work-skills requirement but personal
        development in the process.
      </p>
    </div>
  </div>
</section>
<section className="bg-text py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-headline mb-12">Our Management Team</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { img: staff1, name: "Lerato Grace", position: "Managing Director" },
        { img: staff2, name: "Victor James", position: "Training Director" },
        { img: staff3, name: "Abdul Kisheem", position: "General Manager" },
        { img: staff4, name: "John Doe", position: "Quality Assurance Manager" }
      ].map((staff, index) => (
        <div key={index} className="bg-headline rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
          <img src={staff.img} alt={staff.name} className="w-full h-64 object-cover object-center" />
          <div className="p-6">
            <h4 className="text-xl font-semibold text-gray-800">{staff.name}</h4>
            <h3 className="text-lg text-blue-600 mb-4">{staff.position}</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea dolor neque eligendi, tempora dolore totam voluptatem ex aliquid error quod, unde a iure soluta blanditiis ipsa culpa? Magnam, illo praesentium.
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
<Accreditions>

    </Accreditions>
    </>
  )
}