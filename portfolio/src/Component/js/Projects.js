import React from 'react';
import '../css/Projects.css'; 


const projects = [
    {
        name: 'Social Media Platform',
        details: 'A full-featured social media platform that allows users to connect, share, and engage with content.',
        link: 'https://github.com/your-username/social-media-platform',
        logo:'../Social.png',  // Replace with actual image path
    },
    {
        name: 'Onboarding Platform',
        details: 'An onboarding API developed in Node Js to authenticate the user and verify the otp who send on email and more with details ',
        link: 'https://github.com/your-username/onboarding-platform',
        logo: '../login.avif',
    },
    {
        name: 'Frontend Portfolio',
        details: 'A personal portfolio website showcasing projects, skills, and contact information, built using React.',
        link: 'https://github.com/your-username/frontend-portfolio',
        logo: '../JavascriptCoding.png',
    },
    {
        name: 'File Organizer in Node.js',
        details: 'A file organizer tool built in Node.js that categorizes and arranges files automatically.',
        link: 'https://github.com/your-username/file-organizer-nodejs',
        logo: '../files.png',
    },
    {
        name: 'HackerRank Code Submission',
        details: 'A platform for submitting and managing HackerRank coding challenges, with detailed analytics.',
        link: 'https://github.com/your-username/hackerrank-code-submission',
        logo: '../HackerRank.png', 
    },
    {
        name: 'Scrapping IPL2023',
        details: 'A Website of IPL(2023) scrapped the all Data with help of Node js, with detailed analytics.',
        link: 'https://github.com/your-username/hackerrank-code-submission',
        logo: '../image.png', 
    },
];

function Projects() {
    return (
        <div className="projects-container">
            {projects.map((project, index) => (
                <section className="project" key={index}>
                    <img src={project.logo} alt={`${project.name} logo`} className="project-logo" />
                    <h2>{project.name}</h2>
                    <p>{project.details}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                        View Project
                    </a>
                </section>
            ))}
        </div>
    );
}

export default Projects;
