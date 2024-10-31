import React, { useEffect, useState } from "react";
import ToggleSwitch from "../toggleSwitch/ToggleSwitch";
import "./Header.scss";
import { ReactComponent as LPLogo } from "../../assets/logos/LPLogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = ({ theme, toggleTheme }) => {
  //state to manage the menu open/close
  const [isMenuOpen, setIsOpen] = useState(false);

  //function to toggle the menu open/close
  const toggleMenu = () => {
    setIsOpen(!isMenuOpen);
  };

  //if the click outside the menu, it should close
  const handleOutsideClick = (e) => {
    if (
      !e.target.closest(".menu-icon") &&
      !e.target.closest(".toggle-switch")
    ) {
      setIsOpen(false);
    }
  };

  //create a listener to the document and pass the element the user clicked on
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <header className="header">
      <a href="/#greetings">
        <LPLogo className="logo" />
      </a>
      <div className="menu-icon">
        <FontAwesomeIcon
          icon={faBars}
          //add the open class if the menu is open
          className={`menu-icon ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        />
      </div>

      <ul className={`menu ${isMenuOpen ? "menu-open" : ""}`}>
        <li onClick={toggleMenu}>
          <a href="#skills">Skills</a>
        </li>
        <li onClick={toggleMenu}>
          <a href="#projects">Projects</a>
        </li>
        <li onClick={toggleMenu}>
          <a href="#experiences">Experiences</a>
        </li>
        <li onClick={toggleMenu}>
          <a href="#contact">Contact</a>
        </li>
        <ToggleSwitch theme={theme} toggleTheme={toggleTheme} />
      </ul>
    </header>
  );
};

export default Header;
