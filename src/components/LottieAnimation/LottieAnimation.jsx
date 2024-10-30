import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import DevWithAnIdea from "../../assets/DevWithAnIdea.json";
import DevSolutioning from "../../assets/DevSolutioning.json";
import MailLetter from "../../assets/MailLetter.json";
import WebDesignData from "../../assets/WebDesignData.json";

const LottieAnimation = (props) => {
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
    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: getAnimationData(props.animation),
    });

    return () => animation.destroy();
  }, [props.animation]);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
};

export default LottieAnimation;
