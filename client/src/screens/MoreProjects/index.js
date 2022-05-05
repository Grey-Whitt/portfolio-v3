import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Repo } from './MoreProjects.styled'
import { format } from 'date-fns'
import parse from 'parse-link-header'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const MoreProjects = () => {
  const [repos, setRepos] = useState([])

  const [next, setNext] = useState('')

  const [prev, setPrev] = useState('')

  const [page, setPage] = useState(1)

  const getRepos = async (link) => {
    try {
      setPage(link.split('s?page=')[1].substr(0, 1))

      const { data, headers } = await axios.get(link)

      const links = parse(headers.link)

      if (links.next === undefined) {
        setNext(links.first.url)
        console.log(next)
      } else {
        setNext(links.next.url)
      }

      if (links.prev === undefined) {
        setPrev(links.last.url)
      } else {
        setPrev(links.prev.url)
      }

      setRepos(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getRepos('https://api.github.com/users/grey-whitt/repos?page=1&per_page=10')
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

        <div className='buttons'>
          <button onClick={() => getRepos(prev)}>
            <BsChevronLeft size={30} className='arrow' />
          </button>
          {page}
          <button onClick={() => getRepos(next)}>
            <BsChevronRight size={30} className='arrow' />
          </button>
        </div>
      </Repo>
    </>
  )
}

export default MoreProjects
