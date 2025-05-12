import { ReactComponent as CSharp } from "../assets/icons/csharp.svg";
import { ReactComponent as DotNet } from "../assets/icons/dotnet.svg";
import { ReactComponent as JavaScript } from "../assets/icons/javascript.svg";
import { ReactComponent as React } from "../assets/icons/react.svg";
import { ReactComponent as Python } from "../assets/icons/python.svg";
import { ReactComponent as CSS } from "../assets/icons/css.svg";
import { ReactComponent as HTML } from "../assets/icons/html.svg";
import { ReactComponent as SASS } from "../assets/icons/sass.svg";
import { ReactComponent as TypeScript } from "../assets/icons/typescript.svg";
import { ReactComponent as MySQL } from "../assets/icons/mysql.svg";
import { ReactComponent as Git } from "../assets/icons/git.svg";
import { ReactComponent as Jira } from "../assets/icons/jira.svg";

export const portfolioData = {
  greeting: {
    name: "Licia",
    bio: "who solves puzzles through code to create better user experiences.",
  },
  skills: [
    { name: "HTML", icon: { HTML } },
    { name: "CSS", icon: { CSS } },
    { name: "SASS", icon: { SASS } },
    { name: "JavaScript", icon: { JavaScript } },
    { name: "TypeScript", icon: { TypeScript } },
    { name: "React", icon: { React } },
    { name: "C#", icon: { CSharp } },
    { name: ".NET", icon: { DotNet } },
    { name: "Python", icon: { Python } },
    { name: "MySQL", icon: { MySQL } },
    { name: "Git", icon: { Git } },
    { name: "Jira", icon: { Jira } },
  ],
  projects: [
    {
      title: "Weather App",
      description:
        "A modern, responsive weather dashboard built with React that displays real-time conditions and 5-day forecasts for any city. Includes dynamic weather-based backgrounds, geolocation detection, temperature unit toggle, and persistent search history with localStorage.",
      url: "https://liciapereira.github.io/weather-app/",
      github: "https://github.com/LiciaPereira/weather-app",
      image: "weather-app.webp", //1350px width
      usedSkills: [
        "React.js",
        "JavaScript (ES6+)",
        "SCSS",
        "OpenWeatherMap API",
        "REST APIs",
        "Geolocation API",
        "Responsive Design",
        "LocalStorage",
        "GitHub Pages",
      ],
    },
    {
      title: "Upmkt Digital Website",
      description:
        "Developed a responsive, modern website for Upmkt Digital, an e-commerce growth agency focused on fashion, apparel, and consumer goods. Built with HTML, CSS, JavaScript, and PHP, the site features clean design, strong calls-to-action, and optimized performance across devices.",
      url: "https://upmkt.digital/",
      image: "upmktdigital.webp",
      usedSkills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "PHP",
        "Responsive Design",
        "Performance Optimization",
      ],
    },
    {
      title: "Liciaflix",
      description:
        "Developed a Netflix-inspired streaming platform using React, Firebase, and Stripe. Features include user authentication, subscription management, and a responsive, interactive UI.",
      url: "http://licia-flix.web.app/",
      github: "https://github.com/liciapereira/liciaflix",
      image: "liciaflix.webp",
      usedSkills: [
        "React.js",
        "JavaScript (ES6+)",
        "Firebase Authentication",
        "Firestore",
        "Stripe API",
        "Responsive Design",
      ],
    },
  ],
  education: [
    { degree: "Information Systems Bachelor", year: "2018" },
    { degree: "Web Development and Internet Applications", year: "2023" },
  ],
  certifications: [
    { certification: "Graphic Design", year: "2020" },
    { certification: "Women's Business Leadership", year: "2020" },
  ],
  contact: {
    email: "liciapereira12@gmail.com",
  },
};
