import React from 'react';
import './Resume.css'; // Import the CSS file
import resumeImage from './resumeImg.jpg'; // Import your image here

function Resume() {
  const resumeURL = 'https://drive.google.com/file/d/1Aeds-rThiRKE18e_an3QfD0Z5wKk9Xct/view?usp=sharing';

  return (
    <div className="resume-container">
      {/* Image with a class for styling */}
      <a href={resumeURL} target="_blank" rel="noopener noreferrer" className="resume-download-link">
        Download My Resume
      </a>
      <br></br>
      <img src={resumeImage} alt="Resume Thumbnail" className="resume-image" />
      
    </div>
  );
}

export default Resume;

