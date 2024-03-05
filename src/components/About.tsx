import React from "react";
import "./About.css";

interface AboutProps {
  textbox: string;
}

const About: React.FC<AboutProps> = ({ textbox }) => {
  return (
    <div className="about-container">
      <div className="about-content">{textbox}</div>
    </div>
  );
};

export default About;
