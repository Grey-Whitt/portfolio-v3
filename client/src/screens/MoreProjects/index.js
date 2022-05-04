import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Repo } from './MoreProjects.styled'
import { format } from 'date-fns'

const MoreProjects = () => {
  const [repos, setRepos] = useState([])

  const getRepos = async () => {
    try {
      const { data } = await axios.get(
        'https://api.github.com/users/grey-whitt/repos?page=1&per_page=10'
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
      <Repo>
        <table>
          <thead className='tblHead'>
            <tr>
              <th>Title</th>
              <th>Language</th>
              <th className='date'>Last Updated</th>
            </tr>
          </thead>

          <tbody>
            {repos.map((repo, i) => (
              <tr key={i}>
                <td>
                  <a href={repo.html_url} target='_blank' rel='noreferrer'>
                    {repo.name}
                  </a>
                </td>
                <td>
                  <p>{repo.language}</p>
                </td>
                <td>
                  <p className='date'>
                    {format(
                      new Date(
                        repo.updated_at.split('T')[0].replaceAll('-', ', ')
                      ),
                      'EEEE LLL do yyyy'
                    )}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Repo>
    </>
  )
}

export default MoreProjects
