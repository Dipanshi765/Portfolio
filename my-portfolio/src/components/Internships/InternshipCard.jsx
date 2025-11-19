import React from "react";

const InternshipCard = ({ title, companyName, companyLink, duration, point1, point2 }) => {
  return (
    <div className="relative mt-5 pl-5 group mb-8">
      <div className="absolute left-0 top-0 w-[2px] h-full bg-gray-300 group-hover:bg-orange-500 transition-colors duration-300"></div>

      <div className="flex flex-col sm:flex-row sm:justify-between items-start font-medium mt-0 gap-2">
        <div>
          <h1>{title}</h1>
          <p className="text-sm text-gray-500">
            at,{" "}
            <a href={companyLink} target="_blank" rel="noreferrer">
              {companyName}
            </a>
          </p>
        </div>

        <p className="flex items-center text-sm text-gray-500 sm:flex sm:justify-end">
          {duration}
        </p>
      </div>

      <div className="flex items-start gap-2 mt-4 text-sm text-gray-500">
        <div className="w-1 h-1 mt-2 rounded-full bg-gray-500"></div>
        <p>{point1}</p>
      </div>

      <div className="flex items-start gap-2 mt-4 text-sm text-gray-500">
        <div className="w-1 h-1 mt-2 rounded-full bg-gray-500"></div>
        <p>{point2}</p>
      </div>
    </div>
  );
};

export default InternshipCard;
