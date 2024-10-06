import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

// Import your course images here
import corporateTrainingImage from './images/coporatetraining.jpg';
// Import other course images as needed
import defaultImage from './images/training.jpg';
// Import a default image


const CourseCard = ({ course }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
    <img 
      src={course.img || defaultImage} 
      alt={course.title} 
      className="w-full h-48 object-cover"
      onError={(e) => { e.target.onerror = null; e.target.src = defaultImage }}
    />
    <div className="p-4 bg-primary h-[8rem]" >
      <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
      <Link 
        to={`/course/${course.title}`} 
        className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300 group"
      >
        <span className="mr-2 font-medium">Learn More</span>
        <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
    </div>
  </div>
);

const CategorySection = ({ title, courses }) => (
  <div className="mb-12">
    <h2 className="text-4xl font-bold mb-8">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  </div>
);

const CourseCatalog = () => {
  const categories = [
    {
      title: "Project Management",
      courses: [
        { title: "Project Administration and Documentation", id: "PAD001", img: corporateTrainingImage },
        { title: "Project Costing and Budgeting", id: "PCB002", img: corporateTrainingImage },
        { title: "Project Initiation and Execution", id: "PIE003", img: corporateTrainingImage },
        { title: "Project Management Fundamentals and Team Building", id: "PMF004", img: corporateTrainingImage },
        { title: "Project Monitoring and Quality Control", id: "PMQ005", img: corporateTrainingImage },
        { title: "Project Risk Management", id: "PRM006", img: corporateTrainingImage },
        { title: "Project Team Supervision and Management", id: "PTS007", img: corporateTrainingImage },
        { title: "Community Based Sports Management", id: "CBS008", img: corporateTrainingImage },
        { title: "FETC Project Management - Level 4 {SAQA ID: 50080}", id: "FPM009", img: corporateTrainingImage }
      ]
    },
    {
      title: "Finance",
      courses: [
        { title: "National Certificate Bookkeeping - Level 3 {ICB}", id: "NCB001", img: corporateTrainingImage },
        { title: "FETC: Bookkeeping - Level 4 {ICB}", id: "FBK002", img: corporateTrainingImage },
        { title: "ND: Technical Financial Accounting - Level 5 {ICB}", id: "TFA003", img: corporateTrainingImage },
        { title: "ND: Financial Accounting - Level 6 {ICB}", id: "NFA004", img: corporateTrainingImage },
        { title: "National Certificate: Public Sector Accounting - Level 4 {ICB}", id: "PSA005", img: corporateTrainingImage },
        { title: "Diploma: Public Sector Accounting - Level 5 {ICB}", id: "DPS006", img: corporateTrainingImage }
      ]
    },
    {
      title: "Information Technology",
      courses: [
        { title: "Computer Programming and Website Design", id: "CPW001", img: corporateTrainingImage },
        { title: "Computer Technician", id: "CT002", img: corporateTrainingImage },
        { title: "Network Support Technician", id: "NST003", img: corporateTrainingImage },
        { title: "FETC: Technical Support - Level 4 {SAQA ID 78964}", id: "FTS004", img: corporateTrainingImage },
        { title: "FETC: System Development - Level 4 {SAQA ID 78965}", id: "FSD005", img: corporateTrainingImage },
        { title: "NC: End-User Computing - Level 3 {SAQA ID: 49077}", id: "EUC006", img: corporateTrainingImage }
      ]
    },
    {
      title: "Office Administration",
      courses: [
        { title: "Computer Course {End-User Computing}", id: "CCE001", img: corporateTrainingImage },
        { title: "Office Skills and Administration", id: "OSA002", img: corporateTrainingImage },
        { title: "Certificate – Office Administration - Level 5 {ICB}", id: "COA003", img: corporateTrainingImage },
        { title: "Higher Certificate: Office Administration - Level 5", id: "HCO004", img: corporateTrainingImage },
        { title: "ND: Office Administration - Level 6 {ICB}", id: "NOA005", img: corporateTrainingImage },
        { title: "National Certificates: Human Resource Management N4-N6", id: "NCH006", img: corporateTrainingImage }
      ]
    }
  ];
 
  return (
    <div className="container mx-auto px-4 py-8">
     
      {categories.map((category, index) => (
        <CategorySection key={index} title={category.title} courses={category.courses} />
      ))}
     
    </div>
  );
};

export default CourseCatalog;