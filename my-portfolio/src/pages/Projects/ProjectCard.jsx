import React from "react";

const ProjectCard = ({
  title,
  liveLink,
  codeLink,
  techStack,
  points,
}) => {
  return (
    <div className="relative mt-5 pl-5 group mb-10">
      <div className="absolute left-0 top-0 w-[2px] h-full bg-gray-300 group-hover:bg-orange-500 transition-colors duration-300"></div>

      {/* Title + Links */}
      <div className="flex items-center font-medium mt-5 justify-between">
        <h1>{title}</h1>

        <p className="text-sm text-gray-500">
          <a
            className="mr-6 hover:text-blue-500 transition-colors duration-200"
            href={liveLink}
            target="_blank"
            rel="noreferrer"
          >
            Live
          </a>

          <a
            className="hover:text-blue-500 transition-colors duration-200"
            href={codeLink}
            target="_blank"
            rel="noreferrer"
          >
            Code
          </a>
        </p>
      </div>

      {/* Tech Stack */}
      <div className="flex items-center mt-0 text-sm text-gray-500">
        <p>{techStack}</p>
      </div>

      {/* Bullet Points */}
      {points.map((pt, index) => (
        <div
          key={index}
          className="flex items-start gap-2 mt-4 text-sm text-gray-500"
        >
          <div className="w-1 h-1 mt-2 rounded-full bg-gray-500"></div>
          <p>{pt}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
