import React from "react";
import "./Skills.scss";
import { portfolioData } from "../../config/portfolioData";

function Skills() {
  return (
    <div className="skillsSection">
      <h2 className="skillsTitle">My Skills</h2>
      <div className="skills-cards">
        {portfolioData.skills.map((skills, index) => (
          <div className="skills-card" key={index}>
            {typeof skills.icon === "object" ? (
              React.createElement(Object.values(skills.icon)[0], {
                className: "skill-icon",
              })
            ) : (
              <img src={skills.icon} alt={skills.name} className="skill-icon" />
            )}
            <p className="skill-name">{skills.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
