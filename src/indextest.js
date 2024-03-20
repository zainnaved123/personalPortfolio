import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarSimple from './components/NavbarSimple';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Footer from './components/Footer';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// const generateStars = (count) => {
//   let stars = [];
//   for (let i = 0; i < count; i++) {
//     const style = {
//       left: `${Math.random() * 100}%`,
//       top: `${Math.random() * 100}%`,
//       transform: `scale(${Math.random()})`,
//       animationDelay: `${Math.random() * 2}s`
//     };
//     stars.push(<div key={i} className="star" style={style}></div>);
//   }
//   return stars;
// };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <div className="starry-sky">{generateStars(200)}</div> */}
        <NavbarSimple />
        <div className="d-flex flex-column min-vh-100 body">
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