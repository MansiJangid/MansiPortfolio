// import "./App.css"
import React from "react";

export default function CompanyCarousel() {
  const companies = [
    "Data Structure & Algorithm",
    "Problem Solver",
    "AI/ML Enthusiast",
    "Web Develpment",
    // "Meta",
    // "Tesla",
    // "Apple",
    // "IBM",
  ];

  // Duplicate list for seamless loop
  const repeated = [...companies, ...companies];

  return (
    <div className="carousel">
      <div className="carousel-track">
        {repeated.map((company, i) => (
          <span key={i}>{company}</span>
        ))}
      </div>
    </div>
  );
}