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
      title: "UP! MKT Digital",
      description:
        "A delicate WordPress-based marketing site showcasing modern branding and services.",
      url: "http://upmkt.digital/",
      image: "upmktdigital.webp", //1350px width
      usedSkills: ["Wordpress", "PHP", "CSS", "JavaScript"],
    },
    {
      title: "Liciaflix",
      description:
        "A feature-rich React app mimicking Netflix, with Firebase backend and Stripe integration.",
      url: "http://licia-flix.web.app/",
      github: "https://github.com/liciapereira/liciaflix",
      image: "liciaflix.webp",
      usedSkills: [
        "React",
        "SASS",
        "JavaScript",
        "Stripe",
        "Firebase",
        "Node.js",
        "HTML",
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
