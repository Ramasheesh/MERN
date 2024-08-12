import React ,{useEffect}from "react";
import "../css/Home.css";
import developerImg from "../ramashish.png";

const Home = () => {
  const onClickHandle = (event) => {
    event.preventDefault();
    window.open("https://github.com/Ramasheesh?tab=repositories", "_blank");
  };
  const onClickLinkedin = (event) => {
    event.preventDefault();
    window.open(
      "https://linkedin.com/in/ramasheesh-chauhan-872220159",
      "_blank"
    );
  };
  const onClickInstagram = (event) => {
    event.preventDefault();
    window.open("https://www.instagram.com/ramasheesh12/?hl=en", "_blank");
  };
  const onClickFacebook = (event) => {
    event.preventDefault();
    window.open("https://www.facebook.com/ramashish.chauhan.5688", "_blank");
  };
  const onClickYoutube = (event) => {
    event.preventDefault();
    window.open("https://www.youtube.com/@u.gacademy3524", "_blank");
  };
  const onClickTwiter = (event) => {
    event.preventDefault();
    window.open("https://github.com/Ramasheesh?tab=repositories", "_blank");
  };

  useEffect(() => {
    const textElement = document.querySelector('.typing-text');
    const texts = ["Full Stack Developer", "Back-End Developer", "Front-End Developer"];
    let index = 0;
    let charIndex = 0;
    let typingTimeout;
    let erasingTimeout;
  
    function typeText() {
      if (charIndex < texts[index].length) {
        textElement.textContent += texts[index].charAt(charIndex);
        charIndex++;
        typingTimeout = setTimeout(typeText, 150); 
      } else {
        erasingTimeout = setTimeout(eraseText, 1000); 
      }
    }
  
    function eraseText() {
      if (charIndex > 0) {
        textElement.textContent = texts[index].substring(0, charIndex - 1);
        charIndex--;
        erasingTimeout = setTimeout(eraseText, 100);
      } else {
        index = (index + 1) % texts.length; 
        charIndex = 0; 
        setTimeout(typeText, 500); 
      }
    }
  
    textElement.textContent = '';
  
    typingTimeout = setTimeout(typeText, 1000);
  
    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(erasingTimeout);
    };
  }, []);
  
  return (
    <>
      <div className="home-container">
        <div className="left-section">
          <h1 className="greeting">
            Hi, <span className="wave">👋</span>
          </h1>
          <h1 className="name">
            I'm <span className="highlight">RamAsheesh Chauhan !</span>
          </h1>
          <h2 className="profession">
            I'm a <span className="typing-text "></span>
          </h2>
          <p className="description ">
            I'm a Software Developer with expertise in problem solving and algorithmic
            thinking. I love to explore various technologies and frameworks to
            develop efficient and scalable solutions. I am constantly expanding
            my skills and staying up-to-date with the latest advancements in the
            field of software development.
          </p>
          <div className="social-icons-home">
            {/* Social Icons */}
            <a href="#facebook" className="icon" onClick={onClickFacebook}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#twiter" className="icon" onClick={onClickTwiter}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#youtube" className="icon" onClick={onClickYoutube}>
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#instagaram" className="icon" onClick={onClickInstagram}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#linkedin" className="icon" onClick={onClickLinkedin}>
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#github" className="icon" onClick={onClickHandle}>
              <i className="fab fa-github"></i>
            </a>
          </div>
          <a
            href="https://drive.google.com/file/d/19bPDOjTig4US22LIS8o9o4HILOLT6h_B/view?usp=sharing"
            className="resume-button"
          >
            My Resume
          </a>
        </div>

        <div className="right-section image-container">
          <img src={developerImg} alt="Developer" className="developer-image" />
        </div>
      </div>
    </>
  );
};

export default Home;
