import React from 'react'
import { ResumeContainer, ResumeLink } from './resume.styled'
import { GoBrowser } from 'react-icons/go'
import { BsTerminal } from 'react-icons/bs'

const Resume = () => {
  const frontEndSkills = [
    'HTML',
    'CSS',
    'JavaScript',
    'JQuery',
    'React',
    'Bootstrap',
    'Handlebars',
  ]

  const backEndSkills = [
    'APIs',
    'Node',
    'Express',
    'MySQL, Sequelize',
    'MongoDB, Mongoose',
    'PWAs',
    'OOP',
    'MVC paradigm',
  ]

  return (
    <>
      <ResumeContainer>
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
