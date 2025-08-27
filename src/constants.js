// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';

import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';

import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';

import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import phpLogo from './assets/tech_logo/phpLogo.png';
import excelLogo from './assets/tech_logo/excelLogo.jpg';




// Education Section Logo's
import schoolLogo from './assets/education_logo/schoolLogo.png';
import cuLogo from './assets/education_logo/cuLogo.png';

// Project Section Logo's
import profxLogo from './assets/work_logo/profxLogo.png';
import dbLogo from './assets/work_logo/dbLogo.png';
import aivmLogo from './assets/work_logo/aivmLogo.jpg';
import elLogo from './assets/work_logo/elLogo.png';
import tbLogo from './assets/work_logo/tbLogo.png';




export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'PHP', logo: phpLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },

    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'Microsoft Excel', logo: excelLogo },
    ],
  },
];

  

  
  export const education = [
    
    {
      id: 0,
      img: cuLogo,
      school: "Chandigarh University, Mohali",
      date: "Aug 2022 - current",
      grade: "79.9%",
      desc: "I am currently pursuing my Bachelor's degree in Computer Science (BE) from Chandigarh University, Mohali. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Chandigarh University allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Engineering - BE (Computer Science)",
    },
    {
      id: 1,
      img: schoolLogo,
      school: "Study Well Public School , Sitapur",
      date: "Apr 2020 - March 2021",
      grade: "97.2%",
      desc: "I completed my class 12 education from Study Well Public School, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: schoolLogo,
      school: "Study Well Public School,Sitapur",
      date: "Apr 2018 - March 2019",
      grade: "86%",
      desc: "I completed my class 10 education from Study Well Public School, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X) - Science with Computer",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "ProfX - Learning Management System",
      description:
        " An AI-powered chatbot to assist teachers in question paper creation, attendance management, and marksupdating.",
      image: profxLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "Figma","Firebase"],
      github: "",
      webapp: "https://remarkable-nasturtium-151ea6.netlify.app/",
    },
    {
      id: 1,
      title: "TerraByte – Company Website",
      description:
        "A company website for TerraByte, a tech-based startup.",
      image: tbLogo,
      tags: ["HTML", "CSS",  "React JS", "Tailwind CSS","Firebase"],
      github: "https://github.com/devkashish/TerraByte",
      webapp: "https://gregarious-tapioca-230ce6.netlify.app/",
    },
    {
      id: 2,
      title: "Digital Bulletin System",
      description:
        "A real-time bulletin system where users can log in and receive updates based on their interests.",
      image: dbLogo,
      tags: ["Php", "Node JS", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/devkashish/Digital-Bulletin-System",
      webapp: "",
    },
    {
      id: 3,
      title: "AI Virtual Mouse",
      description:
        "An AI-powered virtual mouse  to enable hands-free cursor control.Designed for gesture-based navigation, clicking, and scrolling without physical input devices.",
      image: aivmLogo,
      tags: ["Python", "OpenCV", "Mediapipe"],
      github: "https://github.com/devkashish/AIVirtualMouse",
      webapp: "",
    },
       {
        id: 4,
        title: "eduLearn - E-Learning Platform",
        description:
          "A comprehensive e-learning platform built with modern web technologies. Features include course management, interactive lessons, progress tracking, and a user-friendly interface for both students and instructors.",
        image: elLogo,
        tags: ["TypeScript", "React", "Tailwind CSS", "Firebase"],
        github: "https://github.com/devkashish/edulearn",
        webapp: "https://edulearnin.netlify.app/r",
      },
  ];  