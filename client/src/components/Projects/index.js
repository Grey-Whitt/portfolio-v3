import React from 'react'
import { ProjectsContainer, Project, ButtonLink } from './Projects.styled'
import { Center } from '../../styles'
import { BsGithub } from 'react-icons/bs'

const projects = [
  {
    title: 'Project 1',
    description: 'lorem ipsum delor sit amet',
    repo_link: 'https://github.com/Grey-Whitt/portfolio-v3',
    deployed_link: 'https://github.com/Grey-Whitt',
  },
  {
    title: 'Project 2',
    description: 'lorem ipsum delor sit amet',
    repo_link: 'https://github.com/Grey-Whitt/portfolio-v3',
    deployed_link: 'https://github.com/Grey-Whitt',
  },
  {
    title: 'Project 3',
    description: 'lorem ipsum delor sit amet',
    repo_link: 'https://github.com/Grey-Whitt/portfolio-v3',
    deployed_link: 'https://github.com/Grey-Whitt',
  },
  {
    title: 'Project 4',
    description: 'lorem ipsum delor sit amet',
    repo_link: 'https://github.com/Grey-Whitt/portfolio-v3',
    deployed_link: 'https://github.com/Grey-Whitt',
  },
  {
    title: 'Project 5',
    description: 'lorem ipsum delor sit amet',
    repo_link: 'https://github.com/Grey-Whitt/portfolio-v3',
    deployed_link: 'https://github.com/Grey-Whitt',
  },
  {
    title: 'Project 6',
    description: 'lorem ipsum delor sit amet',
    repo_link: 'https://github.com/Grey-Whitt/portfolio-v3',
    deployed_link: 'https://github.com/Grey-Whitt',
  },
]

const Projects = () => {
  return (
    <>
      <ProjectsContainer>
        {projects.map((project) => (
          <Project>
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
        <ButtonLink
          href='https://github.com/Grey-Whitt?tab=repositories'
          target='_blank'
          rel='noreferrer'
        >
          <button class='button'>More Projects</button>
        </ButtonLink>
      </Center>
    </>
  )
}

export default Projects
