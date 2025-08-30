import React from 'react';
import profileImg from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="section hero">
      <div className="hero-content">
        <h2>Hi, </h2>
        <h1 className="heading">
          I’m <span className="highlight">Mansi</span>
        </h1>
        <h2>A Postgraduate Student</h2>
        <div className="button-container">
          <a href="#resume" className="primary-button">Resume</a>
          <a href="#contact" className="secondary-button">Contact Me</a>
        </div>
      </div>
      <div className="hero-image-container">
        <div className="polaroid">
          <img
            className="hero-image"
            src={profileImg}
            alt="Mansi"
          />
          <div className="tape tape-top-left"></div>
          <div className="tape tape-bottom-right"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;