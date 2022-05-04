import styled from 'styled-components'

export const Repo = styled.div`
  font-family: 'IBM Plex Mono', monospace;

  .tblHead {
    color: ${({ theme }) => theme.colors.accent};
  }

  th {
    border-bottom: 1px solid #000000;
  }

  table {
    width: 100%;
    text-align: left;
    border-collapse: collapse;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-size: 20px;
    font-weight: 600;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 700px) {
    .date {
      display: none;
    }
  }
`
