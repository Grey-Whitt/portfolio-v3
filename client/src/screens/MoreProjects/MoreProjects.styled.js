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

  .buttons {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  .arrow {
    color: ${({ theme }) => theme.colors.accent};

    &:hover {
      transform: scale(1.1);
    }
  }
`
