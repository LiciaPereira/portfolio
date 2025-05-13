import React from "react";
import "./Skills.scss";
import { portfolioData } from "../../config/portfolioData";

function Skills() {
  return (
    <div className="skills-section">
      <h2 id="skills-title" className="skills-title">
        My Skills
      </h2>
      <div className="skills-cards" role="list">
        {portfolioData.skills.map((skill, index) => (
          <div className="skills-card" key={index} role="listitem" tabIndex="0">
            {typeof skill.icon === "object" ? (
              React.createElement(Object.values(skill.icon)[0], {
                className: "skill-icon",
                "aria-hidden": "true",
                title: skill.name,
              })
            ) : (
              <img
                src={skill.icon}
                alt=""
                className="skill-icon"
                aria-hidden="true"
              />
            )}
            <p className="skill-name" id={`skill-name-${index}`}>
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
