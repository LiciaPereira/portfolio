import React from "react";
import "./Greeting.scss";
import { portfolioData } from "../../config/portfolioData";
import LottieAnimation from "../../components/LottieAnimation/LottieAnimation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Greeting = () => {
  const { name, bio } = portfolioData.greeting;

  const handleScrollDown = () => {
    window.scrollTo({ top: window.innerHeight + 50, behavior: "smooth" });
  };

  return (
    <div className="greetings">
      <div className="greeting-text">
        <h2>
          Hello! I'm <span className="greeting-name">{name}</span>
        </h2>
        <h1>Software Developer</h1>
        <h2>{bio}</h2>
      </div>
      <div className="greeting-animation">
        <LottieAnimation props="DevWithAnIdea" />
      </div>
      <div className="scroll-down-symbol" onClick={handleScrollDown}>
        <FontAwesomeIcon icon={faAngleDown} bounce />
      </div>
    </div>
  );
};

export default Greeting;
