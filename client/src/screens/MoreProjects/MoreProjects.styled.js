import styled from 'styled-components'

export const Repo = styled.div`
  margin-top: 1rem;
  border-top: 2px solid ${({ theme }) => theme.colors.accent};

  a {
    text-decoration: none;
    color: inherit;
    font-size: 20px;
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 600;
    margin-top: 10px;
  }

  a:hover {
    text-decoration: underline;
  }
`
