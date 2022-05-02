import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  margin-top: 10rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5em 2em;

  @media (max-width: 1000px) {
    grid-template-columns: auto;
  }
`

export const Project = styled.div`
  display: grid;
  grid-template-columns: 1fr 20px;
  grid-template-rows: auto;
  grid-gap: 10px;
  grid-template-areas:
    'image image'
    'title icon'
    'desc .';
  -ms-flex-line-pack: start;
  align-content: start;

  a {
    text-decoration: none;
    color: inherit;
  }

  h2 {
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 600;
  }

  a:hover {
    text-decoration: underline;
  }

  .ghIcon:hover {
    color: ${({ theme }) => theme.colors.accent};
    transition: 0.15s;
  }

  .picContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid ${({ theme }) => theme.colors.davysGrey};
    border-radius: 20px;
  }

  .picContainer:hover {
    border: 5px solid ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme }) => theme.colors.davysGrey};
    transform: scale(1.02);
    box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.34);
    transition: 0.2s;
  }

  img {
    padding: 10px;
    border-radius: 20px;
  }

  .grid1 {
    grid-area: image;
  }

  .grid2 {
    margin: 0;
    grid-area: title;
    align-self: center;
  }
  .grid3 {
    margin: 0;
    grid-area: icon;
    -ms-flex-item-align: center;
    align-self: center;
  }
  .grid4 {
    margin: 0;
    grid-area: desc;
    margin-bottom: 0;
  }
`
