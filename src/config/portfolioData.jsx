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
    bio: "I build React, TypeScript, and .NET applications with clean interfaces, reliable workflows, and practical backend integrations.",
    resumeUrl: "/resume.pdf",
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
      title: "Job Tracker App",
      description:
        "A job search management app built with React, TypeScript, Firebase, and Tailwind CSS. It helps users track applications, upload resumes and cover letters, manage follow-up reminders, and review job search progress in a dashboard.",
      url: "https://liciapereira.github.io/job-tracker-app/",
      github: "https://github.com/LiciaPereira/job-tracker-app",
      usedSkills: [
        "React",
        "TypeScript",
        "Firebase",
        "Firestore",
        "Tailwind CSS",
        "React Hook Form",
        "Yup",
        "Responsive UI",
      ],
    },
    {
      title: "Licia Docs",
      description:
        "A real-time collaborative document editor built with React, TypeScript, Vite, and Firebase. It includes anonymous authentication, document creation, persistent editing, and a rich text editor experience.",
      url: "https://liciapereira.github.io/licia-docs/",
      github: "https://github.com/LiciaPereira/licia-docs",
      usedSkills: [
        "React",
        "TypeScript",
        "Vite",
        "Firebase Auth",
        "Firestore",
        "Quill",
        "Real-time Data",
      ],
    },
    {
      title: "Liciaflix",
      description:
        "A Netflix-inspired streaming app built with React, Firebase, Redux, and Stripe. Features include authentication, protected app screens, movie category rows, profile UI, and subscription flow structure.",
      url: "https://licia-flix.web.app/",
      github: "https://github.com/liciapereira/liciaflix",
      image: "liciaflix.webp",
      usedSkills: [
        "React",
        "JavaScript",
        "Firebase Authentication",
        "Firestore",
        "Redux Toolkit",
        "Stripe API",
        "Responsive Design",
      ],
    },
    {
      title: "Weather App",
      description:
        "A responsive weather dashboard built with React that displays real-time conditions and 5-day forecasts. Includes geolocation detection, temperature unit toggles, dynamic weather backgrounds, and persistent search history.",
      url: "https://liciapereira.github.io/weather-app/",
      github: "https://github.com/LiciaPereira/weather-app",
      image: "weather-app.webp",
      usedSkills: [
        "React",
        "JavaScript",
        "SCSS",
        "OpenWeatherMap API",
        "REST APIs",
        "Geolocation API",
        "LocalStorage",
      ],
    },
    {
      title: "Upmkt Digital Website",
      description:
        "A responsive business website for an e-commerce growth agency focused on fashion, apparel, and consumer goods. The site uses clean calls-to-action, mobile-friendly layouts, and performance-conscious frontend implementation.",
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
