import React, { useEffect, useState } from 'react'
import About from '../../components/About'
import Projects from '../../components/Projects'
import Contact from '../../components/Contact'
import Resume from '../../components/Resume'
import axios from 'axios'

const HomeScreen = () => {
  const [profile, setProfile] = useState()

  const getProfile = async () => {
    const { data } = await axios.get('/api/profile')

    setProfile(data)
  }

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <>
      <About profile={profile} />
      <Projects />
      <Resume profile={profile} />
      <Contact />
    </>
  )
}

export default HomeScreen
