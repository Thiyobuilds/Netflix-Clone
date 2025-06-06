import React from 'react'
import './Navbar.css';
import logo from '../assets/logo.png';
import search_icon from '../assets/search_icon.svg';
import bell_icon from '../assets/bell_icon.svg';
import profile_icon from '../assets/profile_img.png';
import dropdown_icon from '../assets/caret_icon.svg';

const HomePage = () => {
  return (
    <div className='Navbar'>
      <div className="nav-left">
        <img src={logo} alt="Logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Language</li>
        </ul>
      </div>
      <div className="nav-right">
        <img src={search_icon} alt="Search Icon" className='icons' />
        <p>Childern</p>
        <img src={bell_icon} alt="Bell Icon" className='icons' />
        <div className="user-Profile">
          <img src={profile_icon} alt="Profile Icon" className='icons' />
          <img src={dropdown_icon} alt="Dropdown Icon" />
          <div className="log-out">
            <p>Log Out</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage