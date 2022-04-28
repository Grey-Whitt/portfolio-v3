import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.jet};
  padding: 40px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`

export const NavLink = styled.a`
  font-size: 20px;
  font-family: 'IBM Plex Mono', monospace;
  color: ${({ theme }) => theme.colors.lightGray};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    transition: 0.2s;
    cursor: pointer;
  }
`
export const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  ol {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      margin: 0 5px;
      position: relative;
      a {
        padding: 10px;
      }
    }
  }
`

export const Logo = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  margin-left: 1rem;
  color: ${({ theme }) => theme.colors.lightGray};
  font-weight: 600;
  font-size: 50px;

  h1 {
    margin: 0;
  }
`
