import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Profile from '../../components/Profile/Profile'

const Projects = () => {

   const [active,setActive]= useState("web")


  return (
    <div>
      <Navbar />
      <Profile />

      <div className='flex h-9 w-[60%] border-2 border-gray-200  mt-10 ml-60  rounded-md overflow-hidden cursor-pointer'>
        

        <div 
        onClick={() => setActive("web") }
        className={`flex-1 text-sm flex items-center justify-center transition-colors duration-300 ${active === "web" ? 'bg-gray-500 text-white' : 'bg-white text-gray-700' }
        `}>
             <h1>WEB</h1>
        </div>

        <div
         onClick={() => setActive("📸")}
         className={`flex-1 flex items-center justify-center transition-colors duration-300 ${active === "📸" ? 'bg-gray-500 text-white' : 'bg-white text-gray-700'}
         `}
         >
          <h1>📸</h1>

        </div>

      </div>
    </div>
  )
}

export default Projects
