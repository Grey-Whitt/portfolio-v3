import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Repo } from './MoreProjects.styled'
import { format } from 'date-fns'

const MoreProjects = () => {
  const [repos, setRepos] = useState([])
  const getRepos = async () => {
    try {
      const { data } = await axios.get(
        'https://api.github.com/users/grey-whitt/repos'
      )
      setRepos(data)
    } catch (error) {
      window.alert(error)
    }
  }

  useEffect(() => {
    getRepos()
  }, [])

  return (
    <>
      {repos.map((repo, i) => (
        <Repo key={i}>
          <a href={repo.html_url} target='_blank' rel='noreferrer'>
            {repo.name}
          </a>
          <p>{repo.language}</p>
          <p>
            Updated{' '}
            {format(
              new Date(repo.updated_at.split('T')[0].replaceAll('-', ', ')),
              'EEEE LLL do yyyy'
            )}
          </p>
        </Repo>
      ))}
    </>
  )
}

export default MoreProjects
