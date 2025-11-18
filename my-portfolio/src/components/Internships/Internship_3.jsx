import React from 'react'

const Internship_3 = () => {
  return (
    <div className="relative  mt-5 pl-5 group">
        <div className="absolute left-0 top-0 w-[2px] h-full bg-gray-300 group-hover:bg-orange-500 transition-colors duration-300"></div>

        <div className="flex flex-col sm:flex-row sm:justify-between items-start font-medium mt-0 gap-2">
          <div >
          <h1>Frontend Development Intern</h1>
          <p className=" text-sm text-gray-500">
            at,{" "}
            <a
              href="https://www.bharatintern.com/"
              target="_blank"
              rel="noreferrer"
            >
              Bharat Intern
            </a>
          </p>
          </div>

         
            <p className="flex items-center text-sm text-gray-500 sm:flex sm:justify-end">July 2023 – August 2023</p>
         
          
        </div>

        <div className="flex items-start gap-2 mt-4 text-sm text-gray-500 ">
          <div className="w-1 h-1 mt-2 rounded-full bg-gray-500 "></div>
          <p>
           Developed a Temperature Converter and Netflix clone using React.js
            with dynamic functionality, state management, and responsive design.
          </p>
        </div>

        <div className="flex items-start gap-2 mt-4 text-sm text-gray-500 ">
          <div className="w-1 h-1 mt-2 rounded-full bg-gray-500 "></div>
          <p>
            Collaborated on real-world web projects, improving front-end skills
            and applying best practices in UI design and performance
            optimization.
          </p>
        </div>
      </div>
  )
}

export default Internship_3
