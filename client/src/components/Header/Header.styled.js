import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.jet};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  overflow: hidden;

  .g {
    text-decoration: none;
    color: inherit;

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
      transition: 0.2s;
      cursor: pointer;
    }
  }

  @media (max-width: 500px) {
    display: block;
  }
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`

export const NavLink = styled.span`
  font-size: 20px;
  font-family: 'IBM Plex Mono', monospace;
  color: ${({ theme }) => theme.colors.lightGray};
  padding: 10px;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    transition: 0.2s;
    cursor: pointer;
  }
`
export const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;

  ol {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;

    @media (max-width: 500px) {
      display: block;
      text-align: center;
    }

    li {
      margin: 10px 5px;
      position: relative;
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

  @media (max-width: 500px) {
    margin: 0;
  }

  h1 {
    margin: 0;
  }
`
