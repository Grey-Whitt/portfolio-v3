import React from 'react'
import { StyledHeader, StyledLinks, Nav, Logo, NavLink } from './Header.styled'
import { Link } from 'react-scroll'
import { Link as DomLink, useLocation } from 'react-router-dom'

const navLinks = [
  {
    name: 'About',
    url: 'about',
  },
  {
    name: 'Projects',
    url: 'projects',
  },
  {
    name: 'Resume',
    url: 'resume',
  },
  {
    name: 'Contact',
    url: 'contact',
  },
]

const Header = () => {
  const location = useLocation()

  return (
    <StyledHeader>
      <Logo>
        <DomLink className='g' to='/'>
          <h1>G</h1>
        </DomLink>
      </Logo>
      <Nav>
        {location.pathname === '/' && (
          <StyledLinks>
            <ol>
              {navLinks &&
                navLinks.map(({ url, name }, i) => (
                  <li key={i}>
                    <NavLink>
                      <Link to={url} spy={true} smooth={true}>
                        {name}
                      </Link>
                    </NavLink>
                  </li>
                ))}
            </ol>
          </StyledLinks>
        )}
      </Nav>
    </StyledHeader>
  )
}

export default Header
