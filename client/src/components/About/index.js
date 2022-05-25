import React from 'react'
import {
  AboutContainer,
  AboutLeft,
  AboutRight,
  Picture,
  LinkSection,
} from './About.styled'
import { Section } from '../../styles/Container.styled'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

const About = ({ profile }) => {
  return (
    <Section>
      <AboutContainer id='about'>
        <AboutLeft>
          <div className='picContainer'>
            <div className='orangeBox'>
              <Picture src='./images/IMG-0490.JPG' />
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
