import React, { useEffect, useState } from 'react'
import {
  AboutContainer,
  AboutLeft,
  AboutRight,
  Picture,
  LinkSection,
} from './About.styled'
import { Section } from '../../styles/Container.styled'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import axios from 'axios'

const About = ({ profile }) => {
  const [profilePicture, setProfilePicture] = useState('')

  const getProfilePicture = async () => {
    const { data } = await axios.get(`/api/image/image-greyWhitt.png`)
    setProfilePicture(data.key)
  }

  useEffect(() => {
    getProfilePicture()
  }, [])

  return (
    <Section>
      <AboutContainer id='about'>
        <AboutLeft>
          <div className='picContainer'>
            <div className='orangeBox'>
              {profilePicture && (
                <Picture
                  src={profilePicture}
                  alt='Portrait of myself in field'
                />
              )}
            </div>
          </div>
        </AboutLeft>
        <AboutRight>
          <div className='bio'>
            <h2>About Me</h2>
            <p>{profile?.bio}</p>
          </div>
        </AboutRight>
      </AboutContainer>
      <LinkSection>
        <a href={profile?.github} target='_blank' rel='noreferrer'>
          <FiGithub color='FF7F11' size={40} />
        </a>
        <a href={profile?.linkedin} target='_blank' rel='noreferrer'>
          <FiLinkedin color='FF7F11' size={40} />
        </a>
      </LinkSection>
    </Section>
  )
}

export default About
