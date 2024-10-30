import React from "react";
import "./Greeting.scss";
import { portfolioData } from "../../config/portfolio";
import LottieAnimation from "../../components/LottieAnimation/LottieAnimation";

const Greeting = () => {
  const { name, bio } = portfolioData.greeting;

  return (
    <div className="greetings">
      <div className="greetingText">
        <h2>Hello! I'm {name},</h2>
        <h1>Software Developer</h1>
        <h3>{bio}</h3>
      </div>
      <div className="greetingAnimation">
        <LottieAnimation props="DevWithAnIdea" />
      </div>
    </div>
  );
};

export default Greeting;
