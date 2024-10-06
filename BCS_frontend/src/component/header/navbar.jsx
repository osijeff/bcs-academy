import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Logo from "./final.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { Button } from '../buttons/button';

const SubMenu = ({ items, isOpen, closeMenu }) => {
  return (
    <ul className={`lg:absolute lg:bg-headline lg:shadow-md lg:mt-2 lg:min-w-[200px] w-full
      ${isOpen ? 'block' : 'hidden'}`}>
      {items.map((item, index) => (
        <li key={index} className="lg:px-4 py-2 hover:bg-gray-100">
          <NavLink
            to={item.link}
            className={({ isActive }) =>
              `text-text font-serif text-base uppercase hover:text-primary duration-500 block w-full ${isActive ? 'text-primary' : ''}`
            }
            onClick={closeMenu}
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

SubMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const Links = [
    {name:"Home", link: '/'},
    {name:"About", link: '/About'},
    {name: "Academics",link: '/Academics',
      submenu: [
        {name: "Learnerships programmes", link: '/Academics/Learnership'},
        {name: " Internship Programmes", link: '/academics/internships'},
        {name: "Employee skills development", link: '/Academics/employee'},
        {name: "RPL Programmes", link: '/Academics/rpl'},
      ]
    },
    {name:"News & Events", link: '/Newsevents'},
    {name:"Contact", link: '/Contacts'},
    {name:"Faculty & Staff", link: '/FacultyStaff'},
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  return (
    <nav className='shadow-md w-full fixed top-0 left-0 border-b border-text lg:border-none z-50'>
      <div className="flex items-center justify-between bg-headline py-4 px-7 lg:px-8">
        <Link to="/" className="inline-block" onClick={closeMenu}>
          <img src={Logo} alt="logo" className="w-auto h-20 sm:h-12 lg:h-14" />
        </Link>

        <button 
          onClick={toggleMenu} 
          className='text-3xl cursor-pointer lg:hidden text-text'
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`lg:flex lg:items-center fixed lg:static bg-headline 
          top-[72px] left-0 h-[calc(100vh-72px)] w-full lg:w-auto lg:h-auto lg:bg-transparent z-20
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}`}>
          <ul className="flex flex-col lg:flex-row items-start lg:items-center h-full pt-6 lg:pt-0 px-7 lg:px-0">
            {Links.map((link, index) => ( 
              <li key={index} className='lg:ml-8 text-xl my-4 lg:my-0 w-full lg:w-auto lg:relative uppercase'>
                {link.submenu ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(index)}
                      className="text-text font-serif text-base hover:text-primary uppercase duration-500 flex items-center"
                    >
                      {link.name}
                      <span className="ml-1">{openSubmenu === index ? '▲' : '▼'}</span>
                    </button>
                    <SubMenu
                      items={link.submenu}
                      isOpen={openSubmenu === index}
                      closeMenu={closeMenu}
                    />
                  </>
                ) : (
                  <NavLink 
                    to={link.link} 
                    className={({ isActive }) => 
                      `text-text font-serif  text-base hover:text-primary duration-500 block lg:inline-block ${isActive ? 'text-primary' : ''}`
                    }
                    onClick={closeMenu}
                  >
                    {link.name}
                  </NavLink>
                )}
              </li>
            ))}
            
            <li className='lg:ml-8 text-xl my-4 lg:my-0 w-full  lg:w-auto'>
              <Link to="/register" onClick={closeMenu} className="block lg:inline-block w-full lg:w-auto">
                <Button title="Register" className="w-full lg:w-auto uppercase" />
              </Link>
            </li>
            <li className='lg:ml-8 text-xl my-4 lg:my-0 w-full lg:w-auto'>
              <Link to="/login" onClick={closeMenu} className="block lg:inline-block w-full lg:w-auto">
                <Button title="Login" className="w-full lg:w-auto uppercase "  />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}