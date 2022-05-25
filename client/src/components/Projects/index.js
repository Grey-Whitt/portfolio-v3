import React, { useEffect, useState } from 'react'
import { ProjectsContainer, Project, ButtonLink } from './Projects.styled'
import { Center } from '../../styles'
import { BsGithub } from 'react-icons/bs'
import axios from 'axios'

const Projects = () => {
  const [projects, setProjects] = useState([])

  const getImage = async (project) => {
    const { data } = await axios.get(
      `/api/image/image-${project.title.replaceAll(' ', '')}.png`
    )

    const url = data.key

    project.imgUrl = url

    setProjects([...projects, project])
  }

  const getProjects = async () => {
    const { data } = await axios.get('/api/projects')

    data.forEach((project) => {
      getImage(project)
    })
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
              href={project.deployedLink}
              target='_blank'
              rel='noreferrer'
            >
              <div className='picContainerBackground'>
                <div className='picContainer'>
                  {project.imgUrl && (
                    <img src={project.imgUrl} alt={project.title} />
                  )}
                </div>
              </div>
            </a>
            <h2 className='grid2'>
              <a href={project.deployedLink} target='_blank' rel='noreferrer'>
                {project.title}
              </a>
            </h2>
            <a
              className='grid3'
              href={project.repoLink}
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
