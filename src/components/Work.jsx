import React from 'react';

const Work = ({ projects }) => {
  return (
    <section id="work" className="section">
      <h2 className="section-heading">Work</h2>
      <div className="work-grid">
        {projects.map((project) => (
          <div key={project.id} className="work-card">
            <h3>{project.title}</h3>
            <img src={project.img} alt="Project Image" className='work-img'/>
            <p>{project.description}</p>
            <a href={project.link} className="work-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;