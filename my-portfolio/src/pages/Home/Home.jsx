import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Profile from '../../components/Profile/Profile'
import AboutMe from '../../components/AboutMe/AboutMe'
import Experience from '../../components/Experience/Experience'
import Achievements from '../../components/Achievements/Achievements'
import Contact from '../Contacts/Contact'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Profile />
      <AboutMe />
      <Experience />
      <Achievements />
      <Contact />
    </div>
  )
}

export default Home
