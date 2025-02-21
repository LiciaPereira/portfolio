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
    document.body.className = theme; // Optional: Apply the theme to the body as well
  }, [theme]);

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <section id="greetings">
          <Greeting />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
