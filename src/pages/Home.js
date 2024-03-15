import React from 'react';
import './Home.css';
import homeImg from './homeImg.jpg';

function Home() {
  return (
    <div className='body'>
      <div className="welcome-section">
        <h1>MY PERSONAL PORTFOLIO, WRITTEN BY ZAIN NAVED</h1>
        <h2> A Collection of Information and Projects</h2>
      </div>
      <div className='hero-section'>
        <div className="text-container">
          <h1>I am a Computer Science student at the University of Texas at Dallas with aspirations to learn all angles of technology.</h1>
          <h2>Explore some of my work as well as my hobbies.</h2>
        </div>
        <img src={homeImg} alt="HomePage Image" className='homeImage'/>
      </div>
    </div>
  );
}
export default Home;
