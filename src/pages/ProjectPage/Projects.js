import React from 'react'
import "./Project.css"
import cancareImg from './cancare.png'
import vigilAI from './vigilai.png'
import langportal from './langportal.png'
import projectShare from './projectShare.png'
import { NavLink } from 'react-router-dom';
import react from '../Logos/reactLogo.png'
import python from '../Logos/pythonLogo.png'
import pandas from '../Logos/Pandas.png'
import numpy from '../Logos/NumPy.png'
import jupyter from '../Logos/Jupyter.png'
import aws from '../Logos/AWS.png'
import tensor from '../Logos/TensorFlow.png'
import css from '../Logos/cssLogo.png'
import javascript from '../Logos/JavaScript.png'
import firebase from '../Logos/Firebase.png'
import flask from '../Logos/Flask.png'
import uml from '../Logos/Unified Modelling Language (UML).png'
import mui from '../Logos/Material UI.png'

function Projects() {
  return (
    <div>
      <div class="project">
        <div class="project-info">
          <h1>SHHHHH Something Big is Coming!</h1>
          <p class="project-description">This project is a web application that allows users to track their daily tasks and manage their time more efficiently. Built with React and Node.js.</p>
        </div>
        <div className="project-right">
          <div className="logos-grid">
            {/* Example: Display logos */}
            <img src={flask} alt="Angular Logo" />
            <img src={react}/>
            {/* Add more logos here */}
          </div>
        </div>
      </div>
      <div class="project">
        <div class="project-info">
          <h1>Personal Portfolio</h1>
          <a href="https://github.com/zainnaved123/personalPortfolio" target="_blank" rel="noopener noreferrer" class="github-link" >View on GitHub</a>
          <p class="project-description">This project is a web application that allows users to track their daily tasks and manage their time more efficiently. Built with React and Node.js.</p>
          <NavLink to="/" className="app-link">Live APP</NavLink>
        </div>
        <div className="project-right">
          <div className="logos-grid">
            {/* Example: Display logos */}
            <img src={react} alt="Angular Logo" />
            <img src={css}/>
            <img src={javascript}/>
            {/* Add more logos here */}
          </div>
        </div>
      </div>
      <div className="project">
        <div className="project-info">
          <h1>CanCare</h1>
          <a href="https://github.com/cfgtexas23/Team-6" target="_blank" rel="noopener noreferrer" className="github-link">View on GitHub</a>
          <p className="project-description">This project is a web application that allows users to track their daily tasks and manage their time more efficiently. Built with React and Node.js.</p>
        </div>
        <div className="project-right">
          <div className="project-image">
            <a href="https://docs.google.com/presentation/d/1ckCcpY_r14cyEMcLANIzCGgouUoVvRp44DJBR_Yb1Fo/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
              <img src={cancareImg} alt="Project Screenshot" />
            </a>
          </div>
          <div className="logos-grid">
            {/* Example: Display logos */}
            <img src={react} alt="react logo" />
            <img src={css}/>
            <img src={javascript}/>
            <img src={flask}/>
            <img src={firebase}/>
            <img src={uml}/>
            {/* Add more logos here */}
          </div>
        </div>
      </div>
      <div class="project">
        <div class="project-info">
          <h1>VigilAi</h1>
          <a href="https://github.com/MtGuerenS/AIM-Threat-Detection" target="_blank" rel="noopener noreferrer" class="github-link" >View on GitHub</a>
          <p class="project-description">This project is a web application that allows users to track their daily tasks and manage their time more efficiently. Built with React and Node.js.</p>
        </div>
        <div className="project-right">
          <div class="project-image">
            <a href="https://docs.google.com/presentation/d/1AaXVOhiLFS2FbZJGCHHKw61h10Zm6YD4Fn3eiVplHmc/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
              <img src={vigilAI} alt="Project Screenshot" />
            </a>
          </div>
          <div className="logos-grid">
            {/* Example: Display logos */}
            <img src={react} />
            {/* Add more logos here */}
          </div>
        </div>
      </div>
      <div class="project">
        <div class="project-info">
          <h1>Langportal</h1>
          <a href="https://github.com/BlueStarBurst/LangPortal?tab=readme-ov-file" target="_blank" rel="noopener noreferrer" class="github-link" >View on GitHub</a>
          <p class="project-description">This project is a web application that allows users to track their daily tasks and manage their time more efficiently. Built with React and Node.js.</p>
          <a href="https://hargreaves.dev/LangPortal/" target="_blank" rel="noopener noreferrer" class="app-link" >Live APP</a>
          <br></br>
          <a href="https://huggingface.co/zainnaved/marian-finetuned-kde4-en-to-es?text=My+name+is+Wolfgang+and+I+live+in+Berlin" target="_blank" rel="noopener noreferrer" class="app-link" >Open Source NLP Model</a>
        </div>
        <div className="project-right">
          <div class="project-image">
            <a href="https://www.canva.com/design/DAF__8ces5g/Y3zsiUovNSJ5VKPE52qbxA/edit?utm_content=DAF__8ces5g&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener noreferrer">
              <img src={langportal} alt="Project Screenshot" />
            </a>
          </div>
          <div className="logos-grid">
            {/* Example: Display logos */}
            <img src={python}/>
            <img src={jupyter}/>
            <img src={aws}/>
            <img src={tensor}/>
            <img src={react} alt="react Logo" />
            {/* Add more logos here */}
          </div>
        </div>
      </div>
      <div class="project">
        <div class="project-info">
          <h1>Mushroom Classification</h1>
          <a href="https://github.com/zainnaved123/Coding-Challenge-S22" target="_blank" rel="noopener noreferrer" class="github-link" >View on GitHub</a>
          <p class="project-description">This project is a web application that allows users to track their daily tasks and manage their time more efficiently. Built with React and Node.js.</p>
        </div>
        <div className="project-right">
          <div className="logos-grid">
            {/* Example: Display logos */}
            <img src={python} alt="python Logo" />
            <img src={jupyter} alt="jup Logo" />
            <img src={numpy} alt="nump Logo" />
            <img src={pandas} alt="pandas Logo" />

            {/* Add more logos here */}
          </div>
        </div>
      </div>
      <div class="project">
        <div class="project-info">
          <h1>Project Share</h1>
          <a href="https://github.com/zainnaved123/project-share" target="_blank" rel="noopener noreferrer" class="github-link" >View on GitHub</a>
          <p class="project-description">This project is a web application that allows users to track their daily tasks and manage their time more efficiently. Built with React and Node.js.</p>
        </div>
        <div className="project-right">
          <div class="project-image">
            <a href="https://docs.google.com/presentation/d/1VvpSNr_E_ec9s6vWIdh9TgH5nX4IXo5qq6i6xxcCQec/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
              <img src={projectShare} alt="Project Screenshot" />
            </a>
          </div>
          <div className="logos-grid">
            {/* Example: Display logos */}
            <img src={react} alt="" />
            <img src={mui}/>
            {/* Add more logos here */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects