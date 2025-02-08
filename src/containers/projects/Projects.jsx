import React from "react";
import "./Projects.scss";
import { portfolioData } from "../../config/portfolioData";

function Projects() {
  return (
    <div className="projects-section">
      <div className="projects-header">
        <h1 className="projects-title">Projects</h1>
        <p className="projects-description">
          My featured projects and some of my work
        </p>
      </div>

      <div className="projects-container">
        {" "}
        {portfolioData.projects.map((project, index) => (
          <div
            className={`project-row ${index % 2 === 0 ? "right" : "left"}`}
            key={index}
          >
            <div className="project-video-container">
              <video autoPlay loop muted className="project-video">
                <source
                  src={require(`../../assets/projects/${project.video}`)}
                  type="video/mp4"
                  alt={`${project.title} video`}
                />
              </video>
            </div>
            <div className="project-description">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <ul className="project-skills">
                {project.usedSkills.map((skill) => (
                  <li className="project-skill">{skill}</li>
                ))}
              </ul>
              <div className="project-links">
                {project.links.map((link) => (
                  <a
                    href={link.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
