import React, { useEffect, useState } from "react";
import Greeting from "./containers/greeting/Greeting";
import Skills from "./containers/skills/Skills";
import Projects from "./containers/projects/Projects";
import Contact from "./containers/contact/Contact";
import Header from "./components/header/Header";
import Footer from "./containers/footer/Footer";

const App = () => {
  const storedTheme = localStorage.getItem("theme") || "dark-theme";
  const [theme, setTheme] = useState(storedTheme);

  const toggleTheme = () => {
    const newTheme = theme === "dark-theme" ? "light-theme" : "dark-theme";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <a href="#main-content" className="skip-link sr-only focus-visible">
        Skip to main content
      </a>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main id="main-content" tabIndex="-1">
        <section id="greetings" aria-labelledby="greeting-title">
          <Greeting />
        </section>
        <section id="projects" aria-labelledby="projects-title">
          <Projects />
        </section>
        <section id="skills" aria-labelledby="skills-title">
          <Skills />
        </section>
        <section id="contact" aria-labelledby="contact-title">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
