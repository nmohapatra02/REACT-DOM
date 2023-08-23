import React from 'react'
import './App.css';

const NavLink = () => {
  return (
    <div>
       

        <nav className='nav'>
          <a className='site-title' href="">Site Name</a>
          <ul className='list' type='none'>
            <li><a href="/">Home</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/aboutus">AboutUs</a></li>
          </ul>
        </nav>

    </div>
  )
}

export default NavLink