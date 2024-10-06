import React, { useState } from 'react';
import { Button } from './buttons/button';

const QuoteForm = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    trainingType: '',
    learningProgram: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    closeModal();
  };

  const learningPrograms = {
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
    <form onSubmit={handleSubmit} className="w-full max-w-lg bg-headline mt-16 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Get a Quote for Training</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="id" className="block text-sm font-medium text-gray-700 mb-1">ID</label>
          <input type="text" id="id" name="id" value={formData.id} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
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
        <label htmlFor="learningProgram" className="block text-sm font-medium text-gray-700 mb-1">Learning Program</label>
        <select id="learningProgram" name="learningProgram" value={formData.learningProgram} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required>
          <option value="">Select Learning Program</option>
          {Object.entries(learningPrograms).map(([category, programs]) => (
            <optgroup label={category} key={category}>
              {programs.map(program => (
                <option value={program} key={program}>{program}</option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
        <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
      </div>

      <div className="flex justify-end">
        <Button 
          title="Submit Quote Request" 
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        />
      </div>
    </form>
  );
};

export default QuoteForm;