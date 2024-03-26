import React from 'react';
import './Resume.css'; // Import the CSS file
import atticus from '../Logos/atticus.png'
import lpl from '../Logos/kisspng-logo-brand-organization-financial-advisor-5b5d89561cf014.7262391415328566621185.png'
import jpm from '../Logos/JPMorgan_Chase-Logo.wine.png'
import angular from '../Logos/angular.png'
import node from '../Logos/nodeJSLogo.png'
import octopus from '../Logos/Logo-Blue_140px_rgb.png'
import teamcity from '../Logos/TeamCity_Icon.png'
import sonar from '../Logos/SonarQube.png'
import aws from '../Logos/AWS.png'
import react from '../Logos/reactLogo.png'
import mongo from '../Logos/mogoLogo.png'
import figma from '../Logos/Figma.png'


function Resume() {
  const resumeURL = 'https://drive.google.com/file/d/1Aeds-rThiRKE18e_an3QfD0Z5wKk9Xct/view?usp=sharing';

  const experiences = [
    {
      companyName: "J.P Morgan Chase",
      description: "At Company A, I was responsible for developing and maintaining web applications...",
      mainLogo: jpm,
      techLogos: [

      ],
    },
    {
      companyName: "LPL Financial",
      description: "At Company A, I was responsible for developing and maintaining web applications...",
      mainLogo: lpl,
      techLogos: [
        angular,
        node,
        octopus,
        teamcity,
        sonar,
        aws
        // Add more as needed
      ],
    },
    {
      companyName: "Atticus",
      description: "At Company A, I was responsible for developing and maintaining web applications...",
      mainLogo: atticus,
      techLogos: [
        react,
        mongo,
        figma
        // Add more as needed
      ],
    },
    // Add more experiences as needed
  ];

  return (
    <div className="resume-container">
      <div className="experience-section">
        {experiences.map((exp, index) => (
          <div key={index} className="experience">
            <div className="experience-info">
              <h2>{exp.companyName}</h2>
              <p>{exp.description}</p>
            </div>
            <div className="experience-logos">
              <img src={exp.mainLogo} alt={`${exp.companyName} Logo`} className="company-logo" />
              <div className="tech-logos-grid">
                {exp.techLogos.map((logo, logoIndex) => (
                  <img key={logoIndex} src={logo} alt={`${exp.companyName} Technology ${logoIndex + 1}`} /> // Consider a more descriptive alt text
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <a href={resumeURL} target="_blank" rel="noopener noreferrer" className="resume-download-link">
        Download My Resume
      </a>


    </div>
  );
}

export default Resume;

