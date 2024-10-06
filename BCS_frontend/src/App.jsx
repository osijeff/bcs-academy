
import { useState } from 'react'
import { FaBeer } from 'react-icons/fa';
import { FaAlignJustify } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './component/pages/Home';
import { Navbar } from './component/header/navbar';
import { About } from './component/pages/About';
import { Learnership } from './component/submenu/Learnership';
import  Internships  from './component/submenu/Internship';
import { RPL } from './component/submenu/RPL';
import { Employee } from './component/submenu/Employee'; 
import { Contacts } from './component/pages/Contacts';
import  FacultyStaff  from './component/pages/Faculty&Staff';
import  BlogList  from './component/pages/BlogList';
import Login from './component/pages/login';
import  Register  from './component/pages/Register';
import { Policy } from './component/pages/Policy';
import CourseCatalog from './component/CourseCategory';
import CourseDetails from './component/CourseDetails';
import {Footer }from './component/footer/footer';
import ProfilePage from './component/pages/ProfilePAge';






function App() {


  return (
    <>
       <Router>
   
   
    <Navbar />
    <Routes>
    {/* {name: "Learnerships programmes", link: '/Academics/Learnership'},
        {name: " Internship Programmes", link: '/academics/internships'},
        {name: "Employee skills development", link: '/Academics/employee'},
        {name: "RPL Programmes", link: '/Academics/rpl'}, */}

    <Route path='/' element={    <Home />} />
    <Route path='/about' element={    <About />} />
    <Route path="/Academics/Learnership" element={<Learnership />} />
    <Route path="/Academics/rpl" element={<RPL />} />
    <Route path="/Academics/employee" element={<Employee />} />
    <Route path="/Academics/internships" element={<Internships />} />
    <Route path='/facultystaff' element={    <FacultyStaff/>} />
    <Route path='/newsevents' element={    <BlogList />} />
    <Route path='/contacts' element={    <Contacts />} />
    <Route path="/register" element={<Register />} />
    <Route path="/course/:courseId" element={<CourseDetails />} />
    <Route path="/register/:courseTitle" element={<Register />} />
    <Route path='/login' element={    <Login />} />
    {/* <Route path="/course/:courseTitle" element={<CourseDetails />} /> */}
    <Route path='/policy' element={    <Policy />} />
    <Route path='/profile' element={    <ProfilePage />} />
    </Routes>
   
<Footer />

    </Router>
    </>
  )
}

export default App
