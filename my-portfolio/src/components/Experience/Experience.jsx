


import React from "react";
import InternshipCard from "../Internships/InternshipCard";

const Experience = () => {
  const internships = [
    {
      title: "Frontend Developer and LLM Post-Training Intern",
      companyName: "Ethara AI",
      companyLink: "https://www.ethara.ai/",
      duration: "January 2026 – May 2026",
      point1:
        "Developed responsive AI-powered dashboards using React.js, reusable components, and API integrations to visualize model performance and business metrics",
      point2:
        "Contributed to LLM post-training through response evaluation, annotation, alignment testing, and quality assurance to improve model reliability.",
      point3:
        "Performed multimodal AI evaluations across text-to-image, text-to-speech, and other generalist tasks on the MultiMango platform, enhancing output quality and consistency.",
    },
    {
      title: "Frontend Development Intern",
      companyName: "The RD Group of Industries",
      companyLink: "https://www.therdgroupofindustries.in/",
      duration: "June 2025 – August 2025",
      point1:
        "Built an AI-based coding interview platform using React, Vite, and TailwindCSS with OTP, question, and submission APIs.",
      point2:
        "Cloned and developed responsive medical and gym websites using React and TailwindCSS with modular, mobile-first design.",
    },
    {
      title: "Frontend Development Intern",
      companyName: "VerveBridge",
      companyLink: "https://www.vervebridge.com/",
      duration: "July 2024 – August 2024",
      point1:
        "Built responsive E-commerce and Quiz apps using React.js with reusable components, hooks, and interactive cross-device UI.",
      point2:
        "Gained experience in scalable front-end architectures, improving engagement with clean UI and modern practices.",
    },
    {
      title: "Web Development Intern",
      companyName: "Bharat Intern",
      companyLink: "https://www.bharatintern.com/",
      duration: "July 2023 – August 2023",
      point1:
        "Developed a Temperature Converter and Netflix clone using React.js with dynamic functionality and responsive design.",
      point2:
        "Collaborated on real-world web projects, improving UI design and performance optimization skills.",
    },
  ];

  return (
    <div>
      <div className="flex items-center font-semibold mt-8">
        <h1>Worked As</h1>
      </div>

      {/* Use map() to render internships */}
      {internships.map((item, index) => (
        <InternshipCard
          key={index}
          title={item.title}
          companyName={item.companyName}
          companyLink={item.companyLink}
          duration={item.duration}
          point1={item.point1}
          point2={item.point2}
        />
      ))}
    </div>
  );
};

export default Experience;
