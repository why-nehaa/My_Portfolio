import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Frontend Developer",
    icon: <FrontendIcon />,
  },
  // {
  //   title: "Backend Developer",
  //   icon: <BackendIcon />,
  // },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Freelancer",
    icon: <FreelancerIcon />,
  },
  // {
  //   title: "Leadership",
  //   icon: <LeaderShipIcon />,
  // },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
  ],
  frameworks: [
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
    {
      name: "Flutter",
      icon: "/assets/tech/flutter.svg",
      link: "https://flutter.dev/",
    },
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Three.js",
      icon: "/assets/tech/threejs.svg",
      link: "https://threejs.org/",
    },
    {
      name: "Styled-Components",
      icon: "/assets/tech/styled-components.png",
      link: "https://styled-components.com/",
    },
    {
      name: "Framer-motion",
      icon: "/assets/tech/framer.svg",
      link: "https://www.framer.com/motion/",
    },
    {
      name: "Zustand",
      icon: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
      link: "https://zustand-demo.pmnd.rs",
    },
    {
      name: "Redux/Redux-toolkit",
      icon: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
      link: "https://redux.js.org",
    },
    {
      name: "NextAuth.js",
      icon: "/assets/tech/nextauthjs.png",
      link: "https://next-auth.js.org/",
    },
    {
      name: "Prisma",
      icon: "/assets/tech/prisma.svg",
      link: "https://www.prisma.io/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Figma",
      icon: "/assets/tech/figma.svg",
      link: "https://www.figma.com/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
  ],
  databases: [
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "PostgreSQL",
      icon: "/assets/tech/postgresql.png",
      link: "https://www.postgresql.org",
    },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
  ],
};

const experiences = [
  {
    title: "B.Tech in Computer Science",
    company_name: "Chaibasa Engineering College",
    icon: "/assets/company/gdsc-logo.svg",
    iconBg: "#E6DEDD",
    date: "Sept 2025 - Aug 2029 (Expected)",
    points: [
      "Relevant Coursework: Data Structures & Algorithms, Database Management Systems, Web Technologies.",
    ],
  },
  {
    title: "CBSE Class XII - Computer Science",
    company_name: "DAV Public School, Bistupur",
    icon: "/assets/company/gdsc-logo.svg",
    iconBg: "#E6DEDD",
    date: "Apr 2022 - Mar 2024",
    points: [
      "Senior Volleyball Team Captain",
      "Senior Science Club",
      "Chess",
    ],
  },
  {
    title: "ICSE Class X - Pure Science",
    company_name: "Narbheram Hansraj English School",
    icon: "/assets/company/gdsc-logo.svg",
    iconBg: "#E6DEDD",
    date: "Jan 2010 - Mar 2022",
    points: [
      "Maths & Science Olympiad",
      "Elocution, Debates, Exhibitions",
      "Computer Club",
      "Zonal-level competitions",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Full Stack Task Management App",
    description:
      "A full stack task management web app with user authentication using JWT and bcrypt. Features a RESTful API built with Node.js and Express.js supporting full CRUD operations for tasks, integrated with MongoDB Atlas. Includes role-based access control and protected routes.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/projects/facility-manager.png",
    source_code_link: "https://github.com/why-nehaa",
    deployed_link: "#",
  },
  {
    name: "E-Commerce Platform",
    description:
      "A multi-page e-commerce site with product listing, cart, checkout, and admin dashboard. Utilizes a MySQL relational database schema for users, products, orders, and reviews. Backend APIs handle product search, order processing, and user management.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/projects/netflix-clone.png",
    source_code_link: "https://github.com/why-nehaa",
    deployed_link: "#",
  },
  {
    name: "Student Result Portal",
    description:
      "A web portal for students to view and download results, built with a Flask backend and SQLite database. Features dynamic result tables, PDF export functionality, and an admin interface for managing student data.",
    tags: [
      {
        name: "html/css/js",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
      {
        name: "sqlite",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/projects/spooky-run.png",
    source_code_link: "https://github.com/why-nehaa",
    deployed_link: "#",
  },
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/why-nehaa",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/neha-kumari-817nk",
  },
];

const heroTexts = [
  "B.TECH STUDENT",
  500,
  "Problem solver",
  500,
  "GRAPHIC DESIGNER",
  500,
  "Full Stack Developer",
  500,
  "Fast Learner",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
