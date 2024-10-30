import React from "react";
import "./ToggleSwitch.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

const ToggleSwitch = ({ theme, toggleTheme }) => {
  return (
    <div className="toggle-switch-container">
      <FontAwesomeIcon icon={faCircleHalfStroke} className="icon-dark-light" />
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={theme === "dark-theme"}
          onChange={toggleTheme}
        />
        <span className="slider" />
      </label>
    </div>
  );
};

export default ToggleSwitch;
