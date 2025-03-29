import React, { useEffect, useState } from "react";
import ToggleSwitch from "../toggleSwitch/ToggleSwitch";
import "./Header.scss";
import { ReactComponent as LPLogo } from "../../assets/logos/LPLogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isMenuOpen);
  };

  const handleOutsideClick = (e) => {
    if (
      !e.target.closest(".menu-icon") &&
      !e.target.closest(".toggle-switch")
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 60;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <a href="/#" onClick={(e) => handleNavClick(e, "greetings")}>
        <LPLogo className="logo" />
      </a>
      <div>
        <FontAwesomeIcon
          icon={faBars}
          className={`menu-icon ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        />
      </div>

      <ul className={`menu ${isMenuOpen ? "menu-open" : ""}`}>
        <li>
          <a href="#greetings" onClick={(e) => handleNavClick(e, "greetings")}>
            Home
          </a>
        </li>
        <li>
          <a href="#projects" onClick={(e) => handleNavClick(e, "projects")}>
            Projects
          </a>
        </li>
        <li>
          <a href="#skills" onClick={(e) => handleNavClick(e, "skills")}>
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
            Contact
          </a>
        </li>
        <ToggleSwitch theme={theme} toggleTheme={toggleTheme} />
      </ul>
    </header>
  );
};

export default Header;
