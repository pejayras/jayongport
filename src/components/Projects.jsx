import React from 'react';
import './Projects.css';
import robot1 from '../assets/robot1.png';
import robot2 from '../assets/robot2.png';
import robot3 from '../assets/robot3.png';
import robot4 from '../assets/robot4.png';
import robot5 from '../assets/robot5.png';

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Gallery</h2>
      <div className="project-grid">
        <img src={robot1} alt="Robotik 1" className="project-image" />
        <img src={robot2} alt="Robotik 2" className="project-image" />
        <img src={robot3} alt="Robotik 3" className="project-image" />
        <img src={robot4} alt="Robotik 4" className="project-image" />
        <img src={robot5} alt="Robotik 5" className="project-image" />
      </div>
    </div>
  );
};

export default Projects;
