import React from "react";
import Internship_1 from "../Internships/Internship_1";
import Internship_2 from "../Internships/Internship_2";
import Internship_3 from "../Internships/Internship_3";

const Experience = () => {
  return (
    <div>
      <div className="flex items-center font-semibold   mt-8">
        <h1>Worked As</h1>
      </div>

      {/* Internship 1 */}

      <Internship_1 />

      {/* Internship 2 */}

      <Internship_2 />

      {/* Internship 3 */}

      <Internship_3 />
    </div>
  );
};

export default Experience;
