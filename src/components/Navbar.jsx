import React from 'react'
import {FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt="Logo"></img>
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>

      {/*Hamburger*/}
      <div className='hidden'>
        <FaBars />

      </div>

      {/*Mobile*/}
      <div className='hidden'>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
      </div>

      {/*Socials*/}
      <div>

      </div>
    </div>
  )
}

export default Navbar