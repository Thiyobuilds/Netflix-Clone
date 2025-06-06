import React, {use, useState} from 'react'
import './HomePage.css';
import Navbar from '../Components/Navbar';
import hero_Banner from '../assets/hero_banner.jpg'
import hero_title from '../assets/hero_title.png';
import play_icon from '../assets/Play_icon.png';
import info_icon from '../assets/Info_icon.png';
import TitleCard from '../Components/TitleCard';

const HomePage = () => {

  return (
    <div className='HomePage'>
      <Navbar />
      <div className="Home">
        <img src={hero_Banner} alt="Hero Banner" className='banner-img' />
        <div className="hero_caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quam adipisci impedit ipsa ullam corrupti autem laboriosam optio iste aliquam.</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="Play Iocn" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="Info Icon" />More Info</button>
          </div>
          < TitleCard />
        </div>
      </div>
    </div>
  )
}

export default HomePage