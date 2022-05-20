import React, { useEffect, useState } from 'react'
import { ProjectsContainer, Project, ButtonLink } from './Projects.styled'
import { Center } from '../../styles'
import { BsGithub } from 'react-icons/bs'
import axios from 'axios'

// const projects = [
//   {
//     title: 'Project 1',
//     description: 'lorem ipsum delor sit amet',
//     repo_link: 'https://github.com/Grey-Whitt/portfolio-v3',
//     deployed_link: 'https://github.com/Grey-Whitt',
//   },
//   {
//     title: 'Project 2',
//     description: 'lorem ipsum delor sit amet',
//     repo_link: 'https://github.com/Grey-Whitt/portfolio-v3',
//     deployed_link: 'https://github.com/Grey-Whitt',
//   },
//   {
//     title: 'Project 3',
//     description: 'lorem ipsum delor sit amet',
//     repo_link: 'https://github.com/Grey-Whitt/portfolio-v3',
//     deployed_link: 'https://github.com/Grey-Whitt',
//   },
//   {
//     title: 'Project 4',
//     description: 'lorem ipsum delor sit amet',
//     repo_link: 'https://github.com/Grey-Whitt/portfolio-v3',
//     deployed_link: 'https://github.com/Grey-Whitt',
//   },
//   {
//     title: 'Project 5',
//     description: 'lorem ipsum delor sit amet',
//     repo_link: 'https://github.com/Grey-Whitt/portfolio-v3',
//     deployed_link: 'https://github.com/Grey-Whitt',
//   },
//   {
//     title: 'Project 6',
//     description: 'lorem ipsum delor sit amet',
//     repo_link: 'https://github.com/Grey-Whitt/portfolio-v3',
//     deployed_link: 'https://github.com/Grey-Whitt',
//   },
// ]

const Projects = () => {
  const [projects, setProjects] = useState([])
  const getProjects = async () => {
    const { data } = await axios.get('/api/projects')
    setProjects(data)
    console.log(projects)
  }

  useEffect(() => {
    getProjects()
  }, [])

  return (
    <>
      <ProjectsContainer id='projects'>
        {projects.map((project, i) => (
          <Project key={i}>
            <a
              className='grid1'
              href={project.deployed_link}
              target='_blank'
              rel='noreferrer'
            >
              <div className='picContainerBackground'>
                <div className='picContainer'>
                  <img src='/images/sampleproject.png' alt={project.title} />
                </div>
              </div>
            </a>
            <h2 className='grid2'>
              <a href={project.deployed_link} target='_blank' rel='noreferrer'>
                {project.title}
              </a>
            </h2>
            <a
              className='grid3'
              href={project.repo_link}
              target='_blank'
              rel='noreferrer'
            >
              <BsGithub className='ghIcon' size={25} />
            </a>
            <p className='grid4'>{project.description}</p>
          </Project>
        ))}
      </ProjectsContainer>
      <Center>
        <ButtonLink href='/moreprojects' target='_blank' rel='noreferrer'>
          <button className='button'>More Projects</button>
        </ButtonLink>
      </Center>
    </>
  )
}

export default Projects
