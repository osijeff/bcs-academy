import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { apiBaseUrl } from '../config';

const API_URL = apiBaseUrl;

const CourseDetails = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(`${API_URL}/courses/${courseId}/`);
        setCourse(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching course details:", err);
        setError('Failed to fetch course details');
        setLoading(false);
      }
    };

    fetchCourseDetails();
  }, [courseId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!course) return <div>No course found</div>;

  return (
    <div className="container mx-auto mt-[8rem] px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      {course.img && (
        <img 
          src={`${API_URL}${course.img}`} 
          alt={course.title}
          className="mb-4 max-w-md"
        />
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Course Description</h2>
          <p className="mb-4">{course.description}</p>
          <h2 className="text-2xl font-semibold mb-2">Course Details</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Duration: {course.duration}</li>
            <li>Level: {course.level}</li>
            <li>Category: {course.category?.title}</li>
            <li>Start Date: {course.start_date}</li>
          </ul>
        </div>
        <div>
  <h2 className="text-2xl font-semibold mb-2">What You'll Learn</h2>
  <ul className="list-disc list-inside mb-4">
    {Array.isArray(course.learning_outcomes) ? (
      course.learning_outcomes.map((outcome, index) => (
        <li key={index}>{outcome.outcome}</li>
      ))
    ) : (
      <li>No learning outcomes available</li>
    )}
  </ul>
  <h2 className="text-2xl font-semibold mb-2">Requirements</h2>
  <ul className="list-disc list-inside mb-4">
    {Array.isArray(course.requirements) ? (
      course.requirements.map((req, index) => (
        <li key={index}>{req.requirement}</li>
      ))
    ) : (
      <li>No requirements available</li>
    )}
  </ul>
</div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Instructor</h2>
        <p>{course.instructor}</p>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Enroll Now</h2>
        <p>Price: ${course.price}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Enroll in this course
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;