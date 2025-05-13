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
        <h2 id="projects-title" className="projects-title">
          Projects
        </h2>
        <p className="projects-description">
          My featured projects and some of my work
        </p>
      </div>

      <div className="projects-container">
        {portfolioData.projects.map((project, index) => (
          <article
            className={`project-row ${index % 2 === 0 ? "right" : "left"}`}
            key={index}
          >
            <div className="project-image">
              <a
                href={`${project.url}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} website`}
              >
                <img
                  src={require(`../../assets/projects/${project.image}`)}
                  alt={`Screenshot of ${project.title}`}
                  loading="lazy"
                />
              </a>
            </div>

            <div className="project-description">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="project-skills" aria-label="Technologies used">
                {project.usedSkills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="project-skill">
                    <FontAwesomeIcon
                      icon={faTerminal}
                      className="checkmark"
                      aria-hidden="true"
                    />
                    {skill}
                  </li>
                ))}
              </ul>
              <div className="project-links">
                {[
                  { href: project.url, label: "Live Site" },
                  { href: project.github, label: "GitHub Repo" },
                ]
                  .filter((link) => link.href)
                  .map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={`${link.label} for ${project.title}`}
                    >
                      {link.label}
                      <FontAwesomeIcon
                        icon={faUpRightFromSquare}
                        className="new-tab-icon"
                        aria-hidden="true"
                      />
                    </a>
                  ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Projects;
