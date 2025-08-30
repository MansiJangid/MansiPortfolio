import React, { useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skill';
import CompanyCarousel from "./components/SimpleSlider";
import imgProject from "./assets/profile.jpg";
import goeco from "./assets/goeco.png";
import trueVox from "./assets/trueVox.png";
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('dark'); // Default to dark theme

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const projects = [
    { id: 1, title: 'HireMe', img:imgProject, description: 'A Web Portal for Job Searching & Posting', link: 'https://github.com/MansiJangid/HireMe' },
    { id: 2, title: 'GoEco', img:goeco, description: 'Renewable Energy Recommendation System.', link: 'https://github.com/MansiJangid/GoEco' },
    { id: 3, title: 'TrueVox AI', img:trueVox, description: 'Voice Emotion Recognition System.', link: 'https://github.com/MansiJangid/TrueVoxAI' },
    { id: 4, title: 'Employee Salary Prediction App', img:imgProject, description: 'A Model to Predict Employee Salary.', link: '#' },
    { id: 5, title: 'Portfolio', img:imgProject, description: 'A Web Based Personal Portfolio', link: '#' },
  ];

  const experiences = [
    { id: 1, role: 'Senior Product Designer', company: 'Tech Corp', duration: '2022 - Present' },
    { id: 2, role: 'Frontend Developer', company: 'Startup X', duration: '2020 - 2022' },
    { id: 3, role: 'UI/UX Intern', company: 'Design Studio', duration: '2019 - 2020' },
  ];

  const blogPosts = [
    { id: 1, title: 'Designing for the Future', date: 'May 2025', excerpt: 'Thoughts on modern UI trends.' },
    { id: 2, title: 'React Best Practices', date: 'April 2025', excerpt: 'Tips for writing clean React code.' },
  ];

  return (
    <div className={`container ${theme}`}>
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <CompanyCarousel/>
      <About/>
      <Skills/>
      <Work projects={projects} />
      {/* <Experience experiences={experiences} /> */}
      {/* <Blog blogPosts={blogPosts} /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;