import React from "react";
import "devicon/devicon.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../css/Skills.css";

const Skills = () => {
  const skillsData = [
    {
      iconClass: "devicon-javascript-plain colored",
      name: "JavaScript",
      description:
        "JavaScript is a versatile language used for web development, enabling features like asynchronous programming and DOM manipulation.",
      projectLink: "https://github.com/Ramasheesh/mernProjects",
      projectName: "JavaScript Clone and More",
    },
    {
      iconClass: "devicon-nodejs-plain colored",
      name: "Node.js",
      description:
        "Node.js is a JavaScript runtime that allows you to build scalable network applications on the server-side using JavaScript.",
      projectLink: "https://github.com/Ramasheesh/scrapping",
      projectName: "Scrapping Ipl 2023",
    },
    {
      iconClass: "devicon-java-plain colored",
      name: "Java",
      description:
        "Java is a high-level, object-oriented programming language widely used for building enterprise-scale applications.",
      projectLink: "https://github.com/Ramasheesh/college-project-",
      projectName: "Andriod attendance App",
    },
    {
      iconClass: "devicon-python-plain colored",
      name: "Python",
      description:
        "Python is a high-level programming language known for its simplicity and readability, often used for web development, data science, and automation.",
      projectLink: "https://github.com/Ramasheesh",
      projectName: "Data Analysis Project",
    },
    {
      iconClass: "devicon-react-original colored",
      name: "React",
      description:
        "React is a JavaScript library for building user interfaces, allowing developers to create reusable components and manage the view layer of web applications.",
      projectLink: "https://github.com/Ramasheesh/MERN",
      projectName: "My Portfolio",
    },
    {
      iconClass: "devicon-express-original colored",
      name: "Express",
      description:
        "Express is a minimal and flexible Node.js web application framework that provides robust features for building web and mobile applications.",
      projectLink: "https://github.com/Ramasheesh/collageApi",
      projectName: "Collage Api Backend",
    },
    {
      iconClass: "devicon-mongodb-plain colored",
      name: "MongoDB",
      description:
        "MongoDB is a NoSQL database that uses a flexible document model, allowing for efficient storage and retrieval of data.",
      projectLink: "https://github.com/Ramasheesh",
      projectName: "MongoDB CRUD App",
    },
    {
      iconClass: "devicon-git-plain colored",
      name: "Git/GitHub",
      description:
        "Git is a distributed version control system, and GitHub is a web-based platform for version control and collaboration. Together, they are essential tools for developers.",
      projectLink: "https://github.com/Ramasheesh/",
      projectName: "Git Workflow Tutorial",
    },
    {
      iconClass: "devicon-figma-plain colored",
      name: "Figma",
      description:
        "Figma is a web-based design tool that enables real-time collaboration, allowing teams to design, prototype, and gather feedback on digital projects.",
      projectLink: "https://www.figma.com/file/Ramasheesh",
      projectName: "Figma Design Project",
    },
  ];

  return (
    <div className="skills-slide-container">
      <h1 className="skills-slide-title">Skills and Interests</h1>

      <h2 className="skills-section-title">Skills</h2>
      <div className="skills-full-slide">
      <ul className="skills-slide-list">
        {skillsData.map((skill, index) => (
          <li
            key={index}
            className="skills-slide-item"
            onClick={() => window.open(skill.projectLink, "_blank")}
          >
            <i className={skill.iconClass}></i>
            <div className="skills-slide-details">
              <span>{skill.name}</span>
              <p className="skills-slide-description">{skill.description}</p>
              <p className="skills-slide-project-link">
                <a
                  href={skill.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo Project: {skill.projectName}
                </a>
              </p>
            </div>
          </li>
        ))}
      </ul>
      </div>

      <div className="skills-full-slide">
        <h2 className="skills-section-title">Interests</h2>
        <div className="skills-full-slide-interest">
          <ul className="skills-slide-list">
            <li>
              <i className="devicon-nodejs-plain skills-interest-icon nodejs">
                Node.js
              </i>
            </li>
            <li>
              <i className="devicon-mongodb-plain skills-interest-icon mongodb">
                MongoDB
              </i>
            </li>
            <li>
              <i className="devicon-express-original skills-interest-icon express">
                Express
              </i>
            </li>
          </ul>
        </div>
        <div className="skills-full-slide">
          <div className="skills-full-slide-content">
            <p>
              I have a strong interest in Node.js backend development, where I
              focus on building more server-side applications. My interests also
              include continuous learning, staying up-to-date with the latest
              advancements in the field of software development, and
              contributing to open-source projects.
            </p>
            <div className="slide-content">
              <ul className="projects-list">
                <li>
                  <a
                    href="https://github.com/yourusername/mongodb-app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Social Media App (Apis) :
                  </a>
                  - A social media application using MongoDB, Express, Node and
                  library(JWT,bcypt,joi,mongoose etc). In witch i developed full
                  backend Api's (Onboarding Login with otp, likes, comments,user
                  CRUD, and profile CRUD, upload image etc.) managing data.
                </li>
                <li>
                  <a
                    href="https://github.com/yourusername/nodejs-api"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Login With Google (MERN) :
                  </a>
                  - The "Login With Google (MERN)" project is a full-stack web
                  application that implements user authentication using Google
                  OAuth 2.0. Built with the MERN stack (MongoDB, Express.js,
                  React.js, and Node.js), this project enables users to securely
                  sign in using their Google accounts.
                </li>
                <li>
                  <a
                    href="https://github.com/yourusername/react-portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    React Portfolio :
                  </a>
                  - A personal portfolio site built using React and Node to
                  showcase my projects.
                </li>
                <li>
                  <a
                    href="https://github.com/yourusername/nodejs-api"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Node.js API :
                  </a>
                  - A scalable API built with Node.js for handling various
                  requests.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
