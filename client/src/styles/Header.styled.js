import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.charlestonGreen};
  padding: 40px 0;
  -webkit-box-shadow: ${({ theme }) => theme.colors.radicalRed} 2px 5px 16px 0px,
    5px 5px 48px 5px rgba(0, 0, 0, 0);
  box-shadow: ${({ theme }) => theme.colors.radicalRed} 2px 5px 16px 0px,
    5px 5px 48px 5px rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: ${({ theme }) => theme.colors.radicalRed};
    font-weight: 600;
    font-size: 50px;
    letter-spacing: 0.1rem;
  }
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
  color: ${({ theme }) => theme.colors.seaGreen};

  &:hover {
    color: #1f876c;
    text-shadow: 4px 3px 15px rgba(255, 29, 100, 1);
    transition: 0.2s;
    cursor: pointer;
  }
`
export const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
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

export const Logo = styled.img`
  height: 6rem;
  margin-left: 1rem;
`
