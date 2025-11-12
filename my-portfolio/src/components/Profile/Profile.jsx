// import React from 'react'
// import profilePic from '../../assets/profile.jpg'

// const Profile = () => {
//   return (
//     <div className='mr-70 '>
//     <>
    
//     <div className='flex items-center font-bold leading-none ml-60 text-2xl mt-10'>
      
//       <h1>Hey , I am Dipanshi</h1>     
//     </div>

//     <div className='flex-col items-center ml-60 mt-2  text-gray-500' >
//         <p>A frontend/full stack software engineer, and designer from India.</p>
//         <p>22, she/her</p>
//     </div>
    
//     </>
//     </div>
//   )
// }

// export default Profile







import React from 'react'
import profilePic from '../../assets/profile.jpg'

const Profile = () => {
  return (
    <div className="flex items-center ml-60 mt-10 ">
      
      {/* Profile Image */}
      <img
        src={profilePic}
        alt="Profile"
        className="w-18 h-18 rounded-full object-cover"
      />

      {/* Text Section */}
      <div className="ml-6">
        <h1 className="font-bold leading-none text-xl">
          Hey, I am Dipanshi
        </h1>
        <p className="text-gray-500 mt-2">
          A frontend software engineer, focused on scalability and user experience
        </p>
        <p className="text-gray-500 mt-0">22, she/her</p>
      </div>
    </div>
  )
}

export default Profile
