import React from "react";
import "./Greeting.scss";
import { portfolioData } from "../../config/portfolioData";
import LottieAnimation from "../../components/LottieAnimation/LottieAnimation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Greeting = () => {
  const { name, bio, resumeUrl } = portfolioData.greeting;

  const handleScrollDown = () => {
    window.scrollTo({ top: window.innerHeight + 50, behavior: "smooth" });
  };

  const handleProjectsClick = (e) => {
    e.preventDefault();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleScrollDown();
    }
  };

  return (
    <div className="greetings">
      <div className="greeting-text">
        <h2 id="greeting-title">
          Hello! I'm <span className="greeting-name">{name},</span>
        </h2>
        <h1>Software Developer</h1>
        <h2 className="greeting-bio">{bio}</h2>
        <div className="greeting-actions">
          <a href="#projects" onClick={handleProjectsClick}>
            View Projects
          </a>
          {resumeUrl && (
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          )}
        </div>
      </div>
      <div
        className="greeting-animation"
        role="img"
        aria-label="Developer with an idea illustration"
      >
        <LottieAnimation animation="DevWithAnIdea" />
      </div>
      <div
        className="scroll-down-symbol"
        onClick={handleScrollDown}
        onKeyDown={handleScrollKeyDown}
        tabIndex="0"
        role="button"
        aria-label="Scroll down to view projects"
      >
        <FontAwesomeIcon icon={faAngleDown} bounce aria-hidden="true" />
      </div>
    </div>
  );
};

export default Greeting;
