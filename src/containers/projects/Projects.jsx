import React from "react";
import "./Projects.scss";
import { portfolioData } from "../../config/portfolioData";

function Projects() {
  return (
    <div className="projectsSection">
      <div className="projectsHeader">
        <h1>Projects</h1>
        <p>My featured projects and some of my work</p>
      </div>
      <div className="projectsContainer">
        {portfolioData.projects.map((project, index) => (
          <div
            // if the index is even, the project will be displayed normally, if the index is odd, the project will be displayed in reverse
            className={`project ${index % 2 === 0 ? "" : "reverse"}`}
            key={index}
          >
            <div className="projectContainer">
              <div className="projectImage">
                <img
                  src={require(`../../assets/projects/${project.image}`)}
                  alt={project.title}
                />
              </div>
            </div>
            <div className="projectDetails">
              <div>
                <p className="projectName">{project.title}</p>
                <p className="projectDescription">{project.description}</p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
