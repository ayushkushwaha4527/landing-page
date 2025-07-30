import React from 'react'
import './App.css'

export const Header = () => {
  return (
    <div className='container'>
      {/* Navbar */}
      <div className='navbar'>
        <div className='logo'>
          <img src="https://c3ihub.org/_nuxt/c3ihub-logo-plain.54b6a228.svg" alt="main logo" />
        </div>
        <ul className='nav-links'>
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Team</li>
          <li>Contact</li>
        </ul>
        <div className='btn'>
          <button>Sign In</button>
        </div>
      </div>

      {/* Hero Section */}
      <div className='main-image'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi8Z9SgVCWJsn0lCgiRhbsuU_B2_fkP10fYw&s" alt="hero banner" />
        <h1>
          We Incubate <br /> Your Innovations
        </h1>
      </div>
    </div>
  )
}
