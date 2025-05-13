import React, { useId } from "react";
import "./ToggleSwitch.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

const ToggleSwitch = ({ theme, toggleTheme }) => {
  const switchId = useId();
  const isDarkTheme = theme === "dark-theme";

  return (
    <div className="toggle-switch-container">
      <FontAwesomeIcon
        icon={faCircleHalfStroke}
        className="icon-dark-light"
        aria-hidden="true"
      />
      <label className="toggle-switch" htmlFor={switchId}>
        <span className="sr-only">
          {isDarkTheme ? "Switch to light theme" : "Switch to dark theme"}
        </span>
        <input
          id={switchId}
          type="checkbox"
          checked={isDarkTheme}
          onChange={toggleTheme}
          aria-label={
            isDarkTheme ? "Switch to light theme" : "Switch to dark theme"
          }
          role="switch"
          aria-checked={isDarkTheme}
        />
        <span className="slider" />
      </label>
    </div>
  );
};

export default ToggleSwitch;
