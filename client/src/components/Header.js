import React from 'react'
import { StyledHeader, StyledLinks, Nav, Logo, NavLink } from '../styles'

const navLinks = [
  {
    name: 'About',
    url: '/about',
  },
  {
    name: 'Projects',
    url: '/jobs',
  },
  {
    name: 'Contact',
    url: '/contact',
  },
]

const Header = () => {
  return (
    <StyledHeader>
      <Logo src='./images/glogo.svg' />
      <Nav>
        <StyledLinks>
          <ol>
            {navLinks &&
              navLinks.map(({ url, name }, i) => (
                <li key={i}>
                  <NavLink to={url}>{name}</NavLink>
                </li>
              ))}
          </ol>
        </StyledLinks>
      </Nav>
    </StyledHeader>
  )
}

export default Header
