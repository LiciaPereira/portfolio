import React from "react";
import "./Projects.scss";
import { portfolioData } from "../../config/portfolioData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

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
        {portfolioData.projects.map((project, index) => (
          <div
            className={`project-row ${index % 2 === 0 ? "right" : "left"}`}
            key={index}
          >
            <div className="project-image">
              <img
                src={require(`../../assets/projects/${project.image}`)}
                alt={`${project.title}`}
              />
            </div>

            <div className="project-description">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <ul className="project-skills">
                {project.usedSkills.map((skill) => (
                  <li className="project-skill">
                    <FontAwesomeIcon icon={faTerminal} className="checkmark" />
                    {skill}
                  </li>
                ))}
              </ul>
              <div className="project-links">
                {[
                  { href: project.url, label: "Live" },
                  { href: project.github, label: "GitHub" },
                ]
                  .filter((link) => link.href)
                  .map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      {link.label}
                      <FontAwesomeIcon
                        icon={faUpRightFromSquare}
                        className="new-tab-icon"
                      />
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
