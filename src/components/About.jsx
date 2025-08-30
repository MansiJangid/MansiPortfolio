import React from 'react';
import github from "../assets/github.png";
import code from "../assets/code.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";

const About = () => {
    const educationData = [
    {
      degree: "Master of Computer Applications (MCA)",
      school: "IGDTUW",
      year: "2024 - 2026",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Delhi University",
      year: "2020 - 2023",
    },
    {
      degree: "High School",
      school: "RPVV",
      year: "2018 - 2020",
    },
  ];
  const experienceData = [
    {
      degree: "IBM Virtual Internship",
      school: "AI Intern",
      year: "June - July",
    },
    {
      degree: "PWC Launchpad 3.0 Program",
      school: "Trainee",
      year: "Jan - July",
    },
    {
      degree: "Sattva Society",
      school: "Creative Head",
      year: "2022 - 2023",
    },
    
  ];
    return (
        <section id="about" className="section about-me-section">
            <h2 className="section-heading">About Me</h2>
            <div className="about-me-container">
                {/* Left Column */}
                <div className="about-me-right">
                    <h3>A Little About Myself...</h3>
                    <p>
                        Hi, I’m Mansi.

                    </p>
                    <p>
                        I love solving problems and turning ideas into real-world solutions using technology. I’m comfortable with C++, Python, and JavaScript, and I enjoy building projects in web development, AI/ML, and software applications.
                    </p>

                    <p>
                        I have a strong foundation in core computer science concepts like Data Structures & Algorithms, OOP, Operating Systems, and Networking. I’m driven by curiosity and always eager to learn new tools and techniques to create meaningful, efficient, and impactful solutions.
                    </p>
                    <div className='about-me-icon'>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="GitHub" />
                        </a>
                        <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer">
                            <img src={code} alt="LeetCode" />
                        </a>
                        <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="X" />
                        </a>
                    </div>
                    {/* <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                        <button className="resume-btn">Resume</button>
                    </a>
                    <button className="contact-btn" onClick={() => alert("Contact form coming soon!")}>
                        Contact Me
                    </button> */}
                </div>
                <div className="about-me-left education-section">
                    <h2>Education</h2>
                    <div className="timeline">
                        {educationData.map((edu, index) => (
                            <div className="timeline-item" key={index}>
                                <div className="timeline-dot"></div>
                                {index !== educationData.length - 1 && <div className="timeline-line"></div>}
                                <div className="timeline-content">
                                    <h3>{edu.degree}</h3>
                                    <p>{edu.school}</p>
                                    <span>{edu.year}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="about-me-left education-section">
                    <h2>Experience</h2>
                    <div className="timeline">
                        {experienceData.map((edu, index) => (
                            <div className="timeline-item" key={index}>
                                <div className="timeline-dot"></div>
                                {index !== educationData.length - 1 && <div className="timeline-line"></div>}
                                <div className="timeline-content">
                                    <h3>{edu.degree}</h3>
                                    <p>{edu.school}</p>
                                    <span>{edu.year}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                </div>

                {/* Right Column */}
            </div>

        </section>
    );
};

export default About;