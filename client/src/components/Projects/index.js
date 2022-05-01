import React from 'react'
import { ProjectsContainer, Project } from './Projects.styled'

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
    <ProjectsContainer>
      {projects.map((project) => (
        <Project>
          <a
            className='grid1'
            href={project.deployed_link}
            target='_blank'
            rel='noreferrer'
          >
            <img src='/images/sampleproject.png' alt={project.title} />
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
            G
          </a>
          <p className='grid4'>{project.description}</p>
        </Project>
      ))}
    </ProjectsContainer>
  )
}

export default Projects
