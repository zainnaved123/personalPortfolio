import React, { useState, useEffect } from 'react';
import './Home.css';
import homeImg from './homeImg.jpeg';
import angularLogo from '../Logos/angular.png';
import reactLogo from '../Logos/reactLogo.png';
import cssLogo from '../Logos/cssLogo.png';
import cLogo from '../Logos/cLogo.png';
import cPlusLogo from '../Logos/c++logo.png';
import mongoDBLogo from '../Logos/mogoLogo.png';
import nodeLogo from '../Logos/nodeJSLogo.png';
import pythonLogo from '../Logos/pythonLogo.png';
import sqlLogo from '../Logos/sqlLogo.png';

function Home() {
  const phrase = "Explore some of my work as well as my hobbies.";
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < phrase.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((currentText) => currentText + phrase[charIndex]);
        setCharIndex(charIndex + 1);
      }, 120); // Speed of typing

      return () => clearTimeout(timeoutId);
    }
  }, [charIndex, phrase]);

  return (
    <div>
      <div className='hero-section'>
        <div className="text-container">
          <h1>WELCOME, MY NAME IS ZAIN NAVED</h1>
          <h2>{displayedText}</h2>
        </div>
        <img src={homeImg} alt="HomePage Image" className='homeImage' />
      </div>
      <div id="about-me" className='about-me'>
        <h1>ABOUT ME</h1>
        <div className="about-content">
          <h2>As an ambitious Software Developer, I am deeply passionate about exploring the vast landscape of technology.
            With a keen interest in algorithms and machine learning, I am dedicated to expanding my knowledge and skills in these areas.
            My journey is fueled by a desire to uncover the intricacies of tech innovation and apply this understanding to create impactful solutions.
            Continuously seeking to enhance my expertise, I am on a path of learning and discovery, aiming to contribute significantly to the field of technology.</h2>
          <div className="images-grid">
            <img src={reactLogo} alt="React Logo" />
            <img src={cLogo} alt="C Logo" />
            <img src={pythonLogo} alt="Python Logo" />
            <img src={nodeLogo} alt="Node.js Logo" />
            <img src={angularLogo} alt="Angular Logo" />
            <img src={mongoDBLogo} alt="MongoDB Logo" />
            <img src={cPlusLogo} alt="C++ Logo" />
            <img src={cssLogo} alt="CSS Logo" />
            <img src={sqlLogo} alt="SQL Logo" /> {/* Updated to use sqlLogo instead of faJava */}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;