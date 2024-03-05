import React from "react";
import "./About.css";

interface AboutProps {
  aboutImage: string;
  textbox: string;
}

const About: React.FC<AboutProps> = ({ textbox, aboutImage }) => {
  return (
    <div className="about-container">
      <div className="about-content">
        <img className="about-image" src={aboutImage} alt="About" />
        {textbox && <h1 className="about-textbox">{textbox}</h1>}
      </div>
    </div>
  );
};

export default About;
