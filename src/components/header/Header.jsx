import React, { useEffect, useState, useRef } from "react";
import ToggleSwitch from "../toggleSwitch/ToggleSwitch";
import "./Header.scss";
import { ReactComponent as LPLogo } from "../../assets/logos/LPLogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState("greetings");
  const firstMenuItemRef = useRef(null);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // determine which section is in view
      const sections = ["greetings", "projects", "skills", "contact"];
      const currentSectionId =
        sections.find((sectionId) => {
          const element = document.getElementById(sectionId);
          if (!element) return false;
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }) || "greetings";

      setCurrentSection(currentSectionId);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const toggleMenu = () => {
    setIsOpen(!isMenuOpen);
  };

  // fcus management for the menu
  useEffect(() => {
    if (isMenuOpen && firstMenuItemRef.current) {
      // small delay to allow menu animation to start
      setTimeout(() => {
        firstMenuItemRef.current.focus();
      }, 100);
    }
  }, [isMenuOpen]);

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

      setCurrentSection(targetId);
    }
    setIsOpen(false);
  };

  // handle keyboard events for menu
  const handleMenuKeyDown = (e) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };
  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`} role="banner">
      <a
        href="/#"
        onClick={(e) => handleNavClick(e, "greetings")}
        className="logo-link"
        aria-label="Home"
      >
        <LPLogo className="logo" title="Licia Pereira Logo" />
      </a>
      <button
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
        aria-controls="main-menu"
        className="menu-button"
        onClick={toggleMenu}
      >
        <FontAwesomeIcon
          icon={faBars}
          className={`menu-icon ${isMenuOpen ? "open" : ""}`}
          aria-hidden="true"
        />{" "}
      </button>

      <ul
        id="main-menu"
        className={`menu ${isMenuOpen ? "menu-open" : ""}`}
        role="menubar"
        onKeyDown={handleMenuKeyDown}
      >
        <li role="none">
          <a
            href="#greetings"
            onClick={(e) => handleNavClick(e, "greetings")}
            aria-current={currentSection === "greetings" ? "page" : undefined}
            role="menuitem"
            ref={firstMenuItemRef}
          >
            Home
          </a>
        </li>
        <li role="none">
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, "projects")}
            aria-current={currentSection === "projects" ? "page" : undefined}
            role="menuitem"
          >
            Projects
          </a>
        </li>
        <li role="none">
          <a
            href="#skills"
            onClick={(e) => handleNavClick(e, "skills")}
            aria-current={currentSection === "skills" ? "page" : undefined}
            role="menuitem"
          >
            Skills
          </a>
        </li>{" "}
        <li role="none">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            aria-current={currentSection === "contact" ? "page" : undefined}
            role="menuitem"
          >
            Contact
          </a>
        </li>
        <li className="theme-toggle-item" role="none">
          <ToggleSwitch theme={theme} toggleTheme={toggleTheme} />
        </li>
      </ul>
    </header>
  );
};

export default Header;
