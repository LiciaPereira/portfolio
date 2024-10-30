import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Greeting from "./containers/greeting/Greeting";
import Skills from "./containers/skills/Skills";
import Projects from "./containers/projects/Projects";
import Experiences from "./containers/experiences/Experiences";
import Contact from "./containers/contact/Contact";
import Header from "./components/header/Header";
const App = () => {
  const storedTheme = localStorage.getItem("theme") || "dark-theme";
  const [theme, setTheme] = useState(storedTheme);

  const toggleTheme = () => {
    const newTheme = theme === "dark-theme" ? "light-theme" : "dark-theme";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.className = theme; // Optional: Apply the theme to the body as well
  }, [theme]);

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Greeting />
      <Skills />
      <Projects />
      <Experiences />
      <Contact />
    </>
  );
};

export default App;
