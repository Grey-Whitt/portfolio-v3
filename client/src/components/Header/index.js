import React from 'react'
import { StyledHeader, StyledLinks, Nav, Logo, NavLink } from './Header.styled'
import { Link } from 'react-scroll'
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
  let homeScreen = true

  if (document.location.pathname !== '/') {
    homeScreen = false
  }
  return (
    <StyledHeader>
      <Logo>
        <a className='g' href='/'>
          <h1>G</h1>
        </a>
      </Logo>
      <Nav>
        {homeScreen && (
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
