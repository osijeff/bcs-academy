import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../buttons/button';
import axios from 'axios';
const Register = () => {
  const { courseTitle } = useParams();

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const initialFormState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    idOrPassport: '',
    training_type: 'Individual Training',
    course_category: '',
    course: '',
    program_type: 'Learnership'
  };
  const [formData, setFormData] = useState(initialFormState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
      ...(name === 'course_category' && { course: '' })
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear any previous errors
  
    // Prepare the data to send to the server
    const dataToSend = {
      first_name: formData.firstName || formData.first_name,
      last_name: formData.lastName || formData.last_name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      id_or_passport: formData.idOrPassport || formData.id_or_passport,
      training_type: formData.training_type,
      course_category: formData.course_category,
      course: formData.course,
      program_type: formData.program_type
    };
  
    try {
      
      const response = await axios.post('http://127.0.0.1:8000/api/register/', dataToSend);
      console.log('Registration successful:', response.data);
      setSuccessMessage('Registration successful! Thank you for registering.');
      setFormData(initialFormState);
      // Handle successful registration (e.g., show success message, redirect)
    } catch (error) {
      console.error('Registration failed:', error.response ? error.response.data : error.message);
      setError(error.response ? error.response.data : error.message);
    }
  };
  const coursesByCategory = {
    "Project Management": [
      "Project Administration and Documentation",
      "Project Costing and Budgeting",
      "Project Initiation and Execution",
      "Project Management Fundamentals and Team Building",
      "Project Monitoring and Quality Control",
      "Project Risk Management",
      "Project Team Supervision and Management",
      "Community Based Sports Management",
      "FETC Project Management - Level 4 {SAQA ID: 50080}"
    ],
    "Finance": [
      "National Certificate Bookkeeping - Level 3 {ICB}",
      "FETC: Bookkeeping - Level 4 {ICB}",
      "ND: Technical Financial Accounting - Level 5 {ICB}",
      "ND: Financial Accounting - Level 6 {ICB}",
      "National Certificate: Public Sector Accounting - Level 4 {ICB}",
      "Diploma: Public Sector Accounting - Level 5 {ICB}"
    ],
    "Information Technology": [
      "Computer Programming and Website Design",
      "Computer Technician",
      "Network Support Technician",
      "FETC: Technical Support - Level 4 {SAQA ID 78964}",
      "FETC: System Development - Level 4 {SAQA ID 78965}",
      "NC: End-User Computing - Level 3 {SAQA ID: 49077}"
    ],
    "Office Administration": [
      "Computer Course {End-User Computing}",
      "Office Skills and Administration",
      "Certificate – Office Administration - Level 5 {ICB}",
      "Higher Certificate: Office Administration - Level 5",
      "ND: Office Administration - Level 6 {ICB}",
      "National Certificates: Human Resource Management N4-N6"
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-[8rem]">
      <h1 className="text-3xl font-bold mb-4">Register for Course</h1>
      {successMessage && (
  <div className="success-message">
    {successMessage}
  </div>
)}
      {/* <h2 className="text-2xl mb-4">{decodeURIComponent(courseTitle)}</h2> */}
      <form onSubmit={handleSubmit} className="max-w-lg">
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="idOrPassport" className="block text-gray-700 text-sm font-bold mb-2">
            ID / Passport Number
          </label>
          <input
            type="tel"
            id="idOrPassport"
            name="idOrPassport"
            value={formData.idOrPassport}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-6">
        <label htmlFor="trainingType" className="block text-sm font-medium text-gray-700 mb-1">Training Type</label>
        <select id="trainingType" name="trainingType" value={formData.trainingType} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required>
          <option value="">Select Training Type</option>
          <option value="individual">Individual Training</option>
          <option value="corporate">Corporate Training</option>
        </select>
      </div>



      <div className="mb-6">
  <label htmlFor="course_category" className="block text-sm font-medium text-gray-700 mb-1">Course Category</label>
  <select 
    id="course_category" 
    name="course_category" 
    value={formData.course_category} 
    onChange={handleChange} 
    className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
    required
  >
    <option value="">Select Course Category</option>
    {Object.keys(coursesByCategory).map((category) => (
      <option key={category} value={category}>{category}</option>
    ))}
  </select>
</div>

{formData.course_category && (
  <div className="mb-6">
    <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">Course</label>
    <select 
      id="course" 
      name="course" 
      value={formData.course} 
      onChange={handleChange} 
      className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
      required
    >
      <option value="">Select Course</option>
      {coursesByCategory[formData.course_category].map((course) => (
        <option key={course} value={course}>{course}</option>
      ))}
    </select>
  </div>
)}


      <div className="mb-6">
        <label htmlFor="programType" className="block text-sm font-medium text-gray-700 mb-1">Program Type</label>
        <select id="ProgramType" name="ProgramType" value={formData.ProgramType} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required>
          <option value="">Select Program Type</option>
          <option value="RPL">RPL Program</option>
          <option value="Learnership">Learnership Program</option>
          <option value="internship">Internship Programe</option>
          <option value="employeeSkills">Employee Skills Development Program</option>
        </select>
      </div>
        <div className="mb-6">
          <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="3"
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <Button title="Register" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Register;