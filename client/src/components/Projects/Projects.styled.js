import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  margin-top: 10rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5em 2em;
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

  .grid1 {
    grid-area: image;
  }
  .grid2 {
    grid-area: title;
    align-self: center;
  }
  .grid3 {
    grid-area: icon;
    -ms-flex-item-align: center;
    align-self: center;
  }
  .grid4 {
    grid-area: desc;
    margin-bottom: 0;
  }
`
