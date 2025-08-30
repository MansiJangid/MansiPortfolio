import React from 'react';

const Experience = ({experiences }) => {
  return (
    <section id="experience" className="section">
      <h2 className="section-heading">Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-item">
            <h3>{exp.role}</h3>
            <p className="experience-details">
              {exp.company} | {exp.duration}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;