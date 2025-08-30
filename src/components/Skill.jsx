import { useEffect, useRef, useState } from "react";

export default function Skills() {
  const skills = [
    { name: "C++", level: 90 },
    { name: "Java", level: 60 },
    { name: "Python", level: 45 },
    { name: "Data Structure & Algorithms", level: 80 },
    { name: "MySQL", level: 70 },
    { name: "HTML", level: 60 },
    { name: "CSS", level: 65 },
    { name: "JavaScript", level: 50 },
    { name: "React", level: 75 },
    { name: "Node.js", level: 50 },
    { name: "Git & GitHub", level: 55 }
    
  ];

  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="skills-section">
      <div className="skills-container">
        <h2>My Skills</h2>
        <p>Here are some technologies and tools I work with:</p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className={`progress ${visible ? "animate" : ""}`}
                  style={{ width: visible ? `${skill.level}%` : "0%" }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
