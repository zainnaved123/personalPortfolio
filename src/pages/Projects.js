import React from 'react'
import "./Project.css"
import cancareImg from './cancare.png'
import vigilAI from './vigilai.png'
import langportal from './langportal.png'

function Projects() {
  return (
    <div>
      <div class="project">
        <div class="project-info">
          <h1>CanCare</h1>
          <a href="https://github.com/cfgtexas23/Team-6" target="_blank" rel="noopener noreferrer" class="github-link" >View on GitHub</a>
          <p class="project-description">This project is a web application that allows users to track their daily tasks and manage their time more efficiently. Built with React and Node.js.</p>
        </div>
        <div class="project-image">
        <a href="https://docs.google.com/presentation/d/1ckCcpY_r14cyEMcLANIzCGgouUoVvRp44DJBR_Yb1Fo/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
            <img src={cancareImg} alt="Project Screenshot" />
          </a>
        </div>
      </div>
      <div class="project">
        <div class="project-info">
          <h1>VigilAi</h1>
          <a href="https://github.com/cfgtexas23/Team-6" target="_blank" rel="noopener noreferrer" class="github-link" >View on GitHub</a>
          <p class="project-description">This project is a web application that allows users to track their daily tasks and manage their time more efficiently. Built with React and Node.js.</p>
        </div>
        <div class="project-image">
        <a href="https://docs.google.com/presentation/d/1AaXVOhiLFS2FbZJGCHHKw61h10Zm6YD4Fn3eiVplHmc/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
            <img src={vigilAI} alt="Project Screenshot" />
          </a>
        </div>
      </div>
      <div class="project">
        <div class="project-info">
          <h1>Langportal</h1>
          <a href="https://github.com/BlueStarBurst/LangPortal?tab=readme-ov-file" target="_blank" rel="noopener noreferrer" class="github-link" >View on GitHub</a>
          <p class="project-description">This project is a web application that allows users to track their daily tasks and manage their time more efficiently. Built with React and Node.js.</p>
          <a href="https://hargreaves.dev/LangPortal/" target="_blank" rel="noopener noreferrer" class="app-link" >Live APP</a>
        </div>
        <div class="project-image">
        <a href="https://www.canva.com/design/DAF__8ces5g/Y3zsiUovNSJ5VKPE52qbxA/edit?utm_content=DAF__8ces5g&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener noreferrer">
            <img src={langportal} alt="Project Screenshot" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects