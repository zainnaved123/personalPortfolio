import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import homeImg from './homeImg.jpeg';
import angularLogo from '../Logos/angular.png';
import reactLogo from '../Logos/reactLogo.png';
import cssLogo from '../Logos/cssLogo.png';
import java from '../Logos/Java.png';
import cPlusLogo from '../Logos/c++logo.png';
import mongoDBLogo from '../Logos/mogoLogo.png';
import nodeLogo from '../Logos/nodeJSLogo.png';
import pythonLogo from '../Logos/pythonLogo.png';
import sqlLogo from '../Logos/sqlLogo.png';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

function Home() {
  const phrase = "Explore some of my work as well as my hobbies.";
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const imagesGridRef = useRef(null);
  const [animationKey, setAnimationKey] = useState(0);
  const [recentTrack, setRecentTrack] = useState(null); // State to hold the most recently played track
  


  // Depend on an authentication state if needed
  //  fetchRecentlyPlayed();
  // }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log(entries[0].isIntersecting);
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          setAnimationKey((prevKey) => prevKey + 1);
        }
      },
      { threshold: 0.5 } // Trigger when at least 50% of the element is in the viewport
    );

    if (imagesGridRef.current) {
      observer.observe(imagesGridRef.current);
    }

    return () => {
      if (imagesGridRef.current) {
        observer.unobserve(imagesGridRef.current);
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount


  // Updated function to include visibility check
  const getFadeInClassName = (index) => {
    return isVisible ? `fade-in-delay-${index + 1}` : '';
  }


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
          <h2>Explore some of my work as well as my hobbies.</h2>
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
          <div className="images-grid" ref={imagesGridRef}>
            <img src={reactLogo} alt="React Logo" className={getFadeInClassName(0)} key={`image-0-${animationKey}`} />
            <img src={java} alt="C Logo" className={getFadeInClassName(1)} key={`image-1-${animationKey}`} />
            <img src={pythonLogo} alt="Python Logo" className={getFadeInClassName(2)} key={`image-2-${animationKey}`} />
            <img src={nodeLogo} alt="Node.js Logo" className={getFadeInClassName(3)} key={`image-3-${animationKey}`} />
            <img src={angularLogo} alt="Angular Logo" className={getFadeInClassName(4)} key={`image-4-${animationKey}`} />
            <img src={mongoDBLogo} alt="MongoDB Logo" className={getFadeInClassName(5)} key={`image-5-${animationKey}`} />
            <img src={cPlusLogo} alt="C++ Logo" className={getFadeInClassName(6)} key={`image-6-${animationKey}`} />
            <img src={cssLogo} alt="CSS Logo" className={getFadeInClassName(7)} key={`image-7-${animationKey}`} />
            <img src={sqlLogo} alt="SQL Logo" className={getFadeInClassName(8)} key={`image-8-${animationKey}`} /> {/* Updated to use sqlLogo instead of faJava */}
          </div>
        </div>
      </div>


    </div>
  );
}

export default Home;