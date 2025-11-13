import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Profile from '../../components/Profile/Profile'

const Projects = () => {

   const [active,setActive]= useState("web")


  return (
    <div className='mb-15'>
      <Navbar />
      <Profile />
      
      
      <div className="flex items-center font-semibold ml-60 mt-8 ">
        <h1>Worked On</h1>
      </div>

      {/* Project 1 */}
      <div className="relative ml-60 mt-5 pl-5 group mb-8">
        <div className="absolute left-0 top-0 w-[2px] h-full bg-gray-300 group-hover:bg-orange-500 transition-colors duration-300"></div>

        <div className="flex items-center font-medium ml-3 mt-5 justify-between mr-60">
          <h1> Forever Ecom App</h1>
          <p className="text-sm text-gray-500"><a className='mr-6  hover:text-blue-500 s transition-colors duration-200'
              href="https://atelierstore.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
             Live
            </a>
            <a className=' hover:text-blue-500  transition-colors duration-200'
              href="https://github.com/Dipanshi765/Forever"
              target="_blank"
              rel="noreferrer"
            >
             Code
            </a></p>
        </div>

        <div className="flex items-center ml-3 mt-0 text-sm text-gray-500">
          <p>
             |React, React Router, Tailwind CSS , Material UI, Context API|
            
          </p>
        </div>

        <div className="flex items-center ml-3 mt-4 text-sm text-gray-500 mr-60 ">
          <div className="w-1 h-1 rounded-full bg-gray-500 mr-2"></div>
          <p>
          Developed a modern e-commerce platform featuring product browsing, search, cart, and authentication.
          </p>
        </div>

        <div className="flex items-center ml-3 mt-4 text-sm text-gray-500 mr-60 ">
          <div className="w-1 h-1 rounded-full bg-gray-500 mr-2"></div>
          <p>
            Utilized Context API and React Router for scalable state management and smooth navigation.
          </p>
        </div>



        <div className="flex items-center ml-3 mt-4 text-sm text-gray-500 mr-60 mb-12">
          <div className="w-1 h-1 rounded-full bg-gray-500 mr-2"></div>
          <p>
            Styled with Tailwind CSS, building mobile-friendly components like dropdowns and search overlays.
          </p>
        </div>
      </div>
      




      {/* Project 2 */}


       <div className="relative ml-60 mt-5 pl-5 group">
        <div className="absolute left-0 top-0 w-[2px] h-full bg-gray-300 group-hover:bg-orange-500 transition-colors duration-300"></div>

        <div className="flex items-center font-medium ml-3 mt-5 justify-between mr-60">
          <h1> Hoobank </h1>
          <p className="text-sm text-gray-500"> <a className='mr-6  hover:text-blue-500  transition-colors duration-200'
              href="https://cash-mind-website.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
             Live
            </a>
            <a className=' hover:text-blue-500  transition-colors duration-200'
              href="https://github.com/Dipanshi765/Modern-Bank"
              target="_blank"
              rel="noreferrer"
            >
             Code
            </a></p>
        </div>

        <div className="flex items-center ml-3 mt-0 text-sm text-gray-500">
          <p>
             |React, React Router, CSS, Media Queries|
            
          </p>
        </div>

        <div className="flex items-center ml-3 mt-4 text-sm text-gray-500 mr-60">
          <div className="w-1 h-1 rounded-full bg-gray-500 mr-2"></div>
          <p>
        Created a sleek, secure banking platform with React for a modern digital experience.
          </p>
        </div>

        <div className="flex items-center ml-3 mt-4 text-sm text-gray-500 mr-60">
          <div className="w-1 h-1 rounded-full bg-gray-500 mr-2"></div>
          <p>
            Implemented responsive design using media queries for accessibility across all screen sizes.
          </p>
        </div>



        <div className="flex items-center ml-3 mt-4 text-sm text-gray-500 mr-60 mb-12">
          <div className="w-1 h-1 rounded-full bg-gray-500 mr-2"></div>
          <p>
         Focused on secure routing, navigation, and optimized web performance.
          </p>
        </div>
      </div>
      

      {/* Project 3 */}
      
         <div className="relative ml-60 mt-5 pl-5 group">
        <div className="absolute left-0 top-0 w-[2px] h-full bg-gray-300 group-hover:bg-orange-500 transition-colors duration-300"></div>

        <div className="flex items-center font-medium ml-3 mt-5 justify-between mr-60">
          <h1> RENT UP </h1>
          <p className="text-sm text-gray-500"> <a className='mr-6  hover:text-blue-500  transition-colors duration-200'
              href="https://rent-up-website.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
             Live
            </a>
            <a className=' hover:text-blue-500  transition-colors duration-200'
              href="https://github.com/Dipanshi765/Rent-Up"
              target="_blank"
              rel="noreferrer"
            >
             Code
            </a></p>
        </div>

        <div className="flex items-center ml-3 mt-0 text-sm text-gray-500">
          <p>
             |React, React Router, HTML, CSS|
            
          </p>
        </div>

        <div className="flex items-center ml-3 mt-4 text-sm text-gray-500 mr-60">
          <div className="w-1 h-1 rounded-full bg-gray-500 mr-2"></div>
          <p>
       Built a responsive house rental platform with React and React Router, enabling users to easily browse and rent properties.
          </p>
        </div>

        <div className="flex items-center ml-3 mt-4 text-sm text-gray-500 mr-60 mb-12">
          <div className="w-1 h-1 rounded-full bg-gray-500 mr-2"></div>
          <p>
            Focused on intuitive UI/UX and responsive layouts for seamless performance across devices.
          </p>
        </div>
      </div>




      {/* project 4 */}
       <div className="relative ml-60 mt-5 pl-5 group">
        <div className="absolute left-0 top-0 w-[2px] h-full bg-gray-300 group-hover:bg-orange-500 transition-colors duration-300"></div>

        <div className="flex items-center font-medium ml-3 mt-5 justify-between mr-60">
          <h1> Restaurant Website</h1>
          <p className="text-sm text-gray-500"> <a className='mr-6 hover:text-blue-500 transition-colors duration-200'
              href="https://take-it-cheesy-website.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
             Live
            </a>
            <a className=' hover:text-blue-500 transition-colors duration-200'
              href="https://github.com/Dipanshi765/Restaurant-Website"
              target="_blank"
              rel="noreferrer"
            >
             Code
            </a>
            
            
            
            
            </p>

            
        </div>

        <div className="flex items-center ml-3 mt-0 text-sm text-gray-500">
          <p>
             |React, React Router, HTML, CSS, Material UI|
            
          </p>
        </div>

        <div className="flex items-center ml-3 mt-4 text-sm text-gray-500 mr-60">
          <div className="w-1 h-1 rounded-full bg-gray-500 mr-2"></div>
          <p>
       Designed and developed a dynamic restaurant website showcasing menu, services, and key business details.
          </p>
        </div>

        <div className="flex items-center ml-3 mt-4 text-sm text-gray-500 mr-60">
          <div className="w-1 h-1 rounded-full bg-gray-500 mr-2"></div>
          <p>
           Used Material UI for modern, accessible UI components and ensured full responsiveness across all devices.
          </p>
        </div>


        <div className="flex items-center ml-3 mt-4 text-sm text-gray-500 mr-60 mb-12">
          <div className="w-1 h-1 rounded-full bg-gray-500 mr-2"></div>
          <p>
           Enhanced user engagement through structured routing and clean, appealing interfaces.
          </p>
        </div>
      </div>


    </div>
    
  )
}

export default Projects
