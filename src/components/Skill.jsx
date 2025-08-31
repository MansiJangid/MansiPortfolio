import { useEffect, useRef, useState } from "react";

import reactLogo from "../assets/skills/React.svg";
import jsLogo from "../assets/skills/JavaScript.svg";
import htmlLogo from "../assets/skills/HTML5.svg";
import cssLogo from "../assets/skills/CSS3.svg";
import cpp from "../assets/skills/cpp.svg";
import mysql from "../assets/skills/MySQL.svg";
import python from "../assets/skills/Python.svg";
import github from "../assets/skills/GitHub.svg";
import tailwindLogo from "../assets/skills/Tailwind CSS.svg";


export default function Skills() {
  const skills = [
  { name: "C++", icon: cpp },
  { name: "MySQL", icon: mysql },
  { name: "Python", icon: python },
  { name: "HTML", icon: htmlLogo },
  { name: "CSS", icon: cssLogo },
  { name: "JavaScript", icon: jsLogo },
  { name: "React", icon: reactLogo },
  { name: "Tailwind", icon: tailwindLogo },
  { name: "GitHub", icon: github },
  { name: "C++", icon: cpp },
  { name: "MySQL", icon: mysql },
  { name: "Python", icon: python },
  { name: "HTML", icon: htmlLogo },
  { name: "CSS", icon: cssLogo },
  { name: "JavaScript", icon: jsLogo },
  { name: "React", icon: reactLogo },
  { name: "Tailwind", icon: tailwindLogo },
  { name: "GitHub", icon: github },
];
  // const skills = [
  //   { name: "C++", level: 90 },
  //   { name: "Java", level: 60 },
  //   { name: "Python", level: 45 },
  //   { name: "Data Structure & Algorithms", level: 80 },
  //   { name: "MySQL", level: 70 },
  //   { name: "HTML", level: 60 },
  //   { name: "CSS", level: 65 },
  //   { name: "JavaScript", level: 50 },
  //   { name: "React", level: 75 },
  //   { name: "Node.js", level: 50 },
  //   { name: "Git & GitHub", level: 55 }
    
  // ];

  // const [visible, setVisible] = useState(false);
  // const sectionRef = useRef(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       if (entries[0].isIntersecting) {
  //         setVisible(true);
  //         observer.disconnect(); // run only once
  //       }
  //     },
  //     { threshold: 0.3 }
  //   );

  //   if (sectionRef.current) {
  //     observer.observe(sectionRef.current);
  //   }

  //   return () => {
  //     if (sectionRef.current) observer.unobserve(sectionRef.current);
  //   };
  // }, []);

  return (
    <section className="skills-section">
      <h2 className="title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
