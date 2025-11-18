import React from 'react'

const Internship_2 = () => {
  return (
    <div className="relative  mt-5 pl-5 group">
        <div className="absolute left-0 top-0 w-[2px] h-full bg-gray-300 group-hover:bg-orange-500 transition-colors duration-300"></div>

        <div className="flex flex-col sm:flex-row sm:justify-between items-start font-medium mt-0 gap-2">
          <div >
          <h1>Frontend Development Intern</h1>
          <p className=" text-sm text-gray-500">
            at,{" "}
            <a
              href="https://www.vervebridge.com/"
              target="_blank"
              rel="noreferrer"
            >
              VerveBridge
            </a>
          </p>
          </div>

         
            <p className="flex items-center text-sm text-gray-500 sm:flex sm:justify-end">July 2024 – August 2024</p>
         
          
        </div>

        <div className="flex items-start gap-2 mt-4 text-sm text-gray-500 ">
          <div className="w-1 h-1 mt-2 rounded-full bg-gray-500 "></div>
          <p>
             Built responsive E-commerce and Quiz apps using React.js with
            reusable components, hooks, and interactive cross-device UI.
          </p>
        </div>

        <div className="flex items-start gap-2 mt-4 text-sm text-gray-500 ">
          <div className="w-1 h-1 mt-2 rounded-full bg-gray-500 "></div>
          <p>
             Gained hands-on experience in building scalable front-end
            architectures and enhancing user engagement through clean,
            maintainable code and modern UI practices.
          </p>
        </div>
      </div>
  )
}

export default Internship_2
