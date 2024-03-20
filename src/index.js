import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import NavbarSimple from './components/NavbarSimple';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Footer from './components/Footer'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavbarSimple />
      <div className="d-flex flex-column min-vh-100">
        <div className="container flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="resume" element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
