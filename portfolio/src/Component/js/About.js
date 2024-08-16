import React from "react";
import "../css/About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="slide-1">
        <h1 className="slide-title">About Me</h1>
        <ul>
          <p className="slide-content " style={{marginLeft: "20px", padding:'10px'}}>
            <li>
              <strong>Name:</strong> RamAshish Chauhan
              <br />
            </li>
            <li>
              <strong>Location:</strong> Azamgarh, U.P, 276123, India.
              <br />
            </li>
            <li>
              <strong>Profession:</strong> I am a passionate and dedicated
              software developer with a strong foundation in Computer Science
              and Engineering, having completed my{" "}
              <span className="highlight-2">B.E / B.Tech </span> from
              <span className="highlight-2"> Punjab University Chandigarh</span>
              . With a keen interest in mobile and web development, I am
              proficient in technologies like NodeJS and ReactJS, allowing me to
              build responsive, user-friendly applications across different
              platforms.
            </li>
          </p>
        </ul>
      </div>

      <div className="slide-2">
        <h1 className="slide-title">Education</h1>
        <ul className="slide-content" style={{marginLeft: "20px", padding:'10px'}}>
          <li>
            Completed 12th in 2016 with{" "}
            <span className="highlight-2"> 81% </span> Marks in Science
            subjects.
          </li>
          <li>
            Completed 10th in 2014 with{" "}
            <span className="highlight-2"> 83% </span> Marks in Science
            subjects.
          </li>
          <li>
            Prepared for JEE Mains + Advanced from Kota Center (Career-Point and
            Resonance) in 2016 and 2017.
          </li>
          <li>
            B.E / B.Tech in Computer Science and Engineering from Punjab
            University Chandigarh (2017-2021).
          </li>
        </ul>
      </div>
      <div className="slide-1">
        <h1 className="slide-title">Work Experience</h1>
        <ul>
          <p className="slide-content" style={{marginLeft: "20px", padding:'10px'}}>
            <h4>
              <strong> <span className="highlight">Software Developer: </span></strong>Backend Developer
            </h4>
            <li>
              <strong>Location: </strong> Mohali Pahse-8B
              <br />
            </li>
            <li>
              <strong>Duration:</strong> Aug 2023 - Nov 2023
              <br />
            </li>
            <li>
              <strong>Job Description:</strong> Worked under Shambhu, Daily new
              tasks like sorting issue. Building new CRUD api. Discuss logic for
              api. Api testing
              <br />
              Contact at Linkedin:<span className="highlight-2"> Shambhu</span>
            </li>
          </p>
        </ul>
        <ul>
          <p className="slide-content" style={{marginLeft: "20px", padding:'10px'}}>
            <h4>
              <strong><span className="highlight">Node Js Developer:</span> </strong> Node Intern
            </h4>
            <li>
              <strong>Location: </strong> Mohali Pahse-5
              <br />
            </li>
            <li>
              <strong>Duration:</strong> Mar 2023 - Jul 2023
              <br />
            </li>
            <li>
              <strong>Job Description:</strong> In which I learn JavaScript and
              build API using Node js, express js, MongoDB (aggregation, Schema
              Model), Nodemailer, and socket.io. Using these concepts make a
              back-end project (Social Media app). We make Onboarding, Likes,
              Comments, upload post as a link and retrieve details of users in
              Excel.
              <br />
              Contact at Linkedin:<span className="highlight-2"> Robin Ekka</span>
            </li>
          </p>
        </ul>
      </div>
      <div className="slide-1">
        <h1 className="slide-title">Contact</h1>
        <p className="slide-content">
          Feel free to reach out to me for collaboration or any opportunities.
          Let's connect and build something amazing together!
          <br />
          Calling Numbers:{" "}
          <span style={{ color: "#00bcd4" }}>
            8874910202, 6283757617, 7234876285
          </span>{" "}
          <br />
          Email:{" "}
          <span style={{ color: "#00bcd4" }}>
            ramasheesh.g7576@gmail.com ,{" "} ramasheeshch9920@gmail.com
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
