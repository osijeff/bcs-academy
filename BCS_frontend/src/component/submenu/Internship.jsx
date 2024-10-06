import {React, useEffect} from 'react'


 const Internships = () => {
  useEffect(() => {
    document.title = "Internship – bcstraininginstitute";
  }, []);
  return (

    <>
   
<div className="min-h-screen  mt-[8rem]">
      <div className="container bg-headline mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">Internship Program</h1>

        <div className="grid  md:grid-cols-2 gap-8">
          {/* Overview Section */}
          <section className="bg-text text-headline rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Program Overview</h2>
            <p className="text-gray-600">Join our internship program to gain hands-on experience and develop your skills in a professional environment.</p>
            <p>An internship is a short-term work experience program that introduces a student or graduate to a career field. It’s an opportunity to gain practical knowledge, network with industry professionals and potentially secure future employment. Internships are typically unpaid; however, they can lead to full-time employment or help students stand out in a crowded job market.</p>
          </section>

          {/* Benefits Section */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-8">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Benefits of Internships</h2>
  <ul className="list-disc list-inside space-y-2 text-gray-600">
    <li>
      <strong>Networking Opportunities:</strong> Internships allow students to connect with industry professionals, which can lead to future employment opportunities.
    </li>
    <li>
      <strong>Mentorship:</strong> Access to mentorship from experienced professionals in the field.
    </li>
    <li>
      <strong>Development of Soft Skills:</strong>
      <ul className="list-disc list-inside ml-4">
        <li><strong>Communication:</strong> Enhancing verbal and written communication abilities.</li>
        <li><strong>Teamwork:</strong> Learning to work effectively within a team environment.</li>
      </ul>
    </li>
    <li>
      <strong>Career Success:</strong> The skills and connections gained through internships are crucial for achieving career success.
    </li>
  </ul>
</section>

          {/* Program Structure Section */}
          <section className="bg-bg rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Program Structure</h2>
            <p className="text-gray-600 mb-2"><strong>Duration:</strong> 6 months </p>
            <p className="text-gray-600 mb-2"><strong>Schedule:</strong> Flexible hours, 15-20 hours per week</p>
      
          </section>

          {/* Application Process Section */}
          <section className="bg-primary rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Application Process</h2>
            <p className="text-gray-600">To apply, submit your resume and cover letter by March 15.</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Apply Now
            </button>
          </section>

          {/* Internship Roles Section */}
          <section className="bg-primary rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Internship Roles</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Marketing Intern</li>
              <li>Data Analysis Intern</li>
              <li>Software Development Intern</li>
            </ul>
          </section>

          {/* Skills and Qualifications Section */}
          <section className="bg-bg rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills and Qualifications</h2>
            <p className="text-gray-600">Applicants should be pursuing a degree in a related field and possess strong communication skills.</p>
          </section>

          {/* Support and Resources Section */}
          <section className="bg-primary rounded-lg shadow-md p-6 md:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Support and Resources</h2>
            <p className="text-gray-600">Interns will receive mentorship and training throughout the program.</p>
          </section>

          {/* Testimonials Section */}
          <section className="bg-white rounded-lg shadow-md p-6 md:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Testimonials</h2>
            <blockquote className="italic text-gray-600">
              "This internship helped me develop my skills and gave me the confidence to pursue my career!" - Jane Doe
            </blockquote>
          </section>

          {/* FAQs Section */}
          <section className="bg-white rounded-lg shadow-md p-6 md:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">FAQs</h2>
            <p className="text-gray-600">Find answers to common questions about our internship program.</p>
            {/* Add FAQ items here */}
          </section>

          {/* Contact Section */}
          <section className="bg-white rounded-lg shadow-md p-6 md:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions, please reach out to us at{' '}
              <a href="mailto:info@example.com" className="text-blue-500 hover:underline">
                info@example.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
    </>
   
  )
}
export default Internships