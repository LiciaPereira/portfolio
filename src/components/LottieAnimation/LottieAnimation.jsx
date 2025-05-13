import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import DevWithAnIdea from "../../assets/animations/DevWithAnIdea.json";
import DevSolutioning from "../../assets/animations/DevSolutioning.json";
import MailLetter from "../../assets/animations/MailLetter.json";
import WebDesignData from "../../assets/animations/WebDesignData.json";

const LottieAnimation = ({ animation, ariaLabel }) => {
  const containerRef = useRef(null);

  const getAnimationData = (animationName) => {
    switch (animationName) {
      case "DevWithAnIdea":
        return DevWithAnIdea;
      case "DevSolutioning":
        return DevSolutioning;
      case "MailLetter":
        return MailLetter;
      case "WebDesignData":
        return WebDesignData;
      default:
        return DevWithAnIdea;
    }
  };

  useEffect(() => {
    const animationInstance = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: getAnimationData(animation),
    });

    // Add accessibility attributes to the SVG
    if (containerRef.current && containerRef.current.querySelector("svg")) {
      const svg = containerRef.current.querySelector("svg");
      svg.setAttribute("aria-hidden", "true");
      svg.setAttribute("focusable", "false");
    }

    return () => animationInstance.destroy();
  }, [animation]);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    />
  );
};

export default LottieAnimation;
