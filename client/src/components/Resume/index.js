import React, { useEffect, useState } from 'react'
import { ResumeContainer, ResumeLink } from './resume.styled'
import { GoBrowser } from 'react-icons/go'
import { BsTerminal } from 'react-icons/bs'

const Resume = ({ profile }) => {
  const [frontEndSkills, setFrontEndSkills] = useState([])
  const [backEndSkills, setBackEndSkills] = useState([])

  useEffect(() => {
    if (profile) {
      profile.Skills.forEach((skill) => {
        if (skill.type == 'frontend') {
          setFrontEndSkills((state) => [...state, skill.skillName])
        } else {
          setBackEndSkills((state) => [...state, skill.skillName])
        }
      })
    }
  }, [profile])

  return (
    <>
      <ResumeContainer id='resume'>
        <div className='beSkills skills'>
          <BsTerminal size={60} color='#FF7F11' />
          <div className='skillsTitle'>Back-end proficiencies</div>
          <ul>
            {backEndSkills.map((skill, i) => (
              <li key={skill + i}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className='feSkills skills'>
          <GoBrowser size={60} color='#FF7F11' />
          <div className='skillsTitle'>Front-end proficiencies</div>
          <ul>
            {frontEndSkills.map((skill, i) => (
              <li key={skill + i}>{skill}</li>
            ))}
          </ul>
        </div>
      </ResumeContainer>
      <ResumeLink>
        See my full resume{' '}
        <a
          rel='noreferrer'
          target='_blank'
          href='https://docs.google.com/document/d/1IPc3pfCwKi05HY9mwiKjdBnhO4lMVlLw-D6PNHYssdU/preview'
        >
          here
        </a>
        .
      </ResumeLink>
    </>
  )
}

export default Resume
