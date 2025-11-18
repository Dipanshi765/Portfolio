import React from 'react'

const Internship_1 = () => {
  return (
    <div className="relative  mt-5 pl-5 group">
        <div className="absolute left-0 top-0 w-[2px] h-full bg-gray-300 group-hover:bg-orange-500 transition-colors duration-300"></div>

        <div className="flex flex-col sm:flex-row sm:justify-between items-start font-medium mt-0 gap-2">
          <div >
          <h1>Frontend Development Intern</h1>
          <p className=" text-sm text-gray-500">
            at,{" "}
            <a
              href="https://www.therdgroupofindustries.in/"
              target="_blank"
              rel="noreferrer"
            >
              The RD Group of Industries
            </a>
          </p>
          </div>

         
            <p className="flex items-center text-sm text-gray-500 sm:flex sm:justify-end">June 2025 – August 2025</p>
         
          
        </div>

        <div className="flex items-start gap-2 mt-4 text-sm text-gray-500 ">
          <div className="w-1 h-1 mt-2 rounded-full bg-gray-500 "></div>
          <p>
            Built an AI-based coding interview platform using React, Vite, and
            TailwindCSS with OTP, question, and submission APIs.
          </p>
        </div>

        <div className="flex items-start gap-2 mt-4 text-sm text-gray-500 ">
          <div className="w-1 h-1 mt-2 rounded-full bg-gray-500 "></div>
          <p>
            Cloned and developed responsive medical and gym websites using React
            and TailwindCSS with modular, mobile-first design.
          </p>
        </div>
      </div>
  )
}

export default Internship_1
