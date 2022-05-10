import styled from 'styled-components'

export const ResumeContainer = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-wrap: wrap;

  border-radius: 5px;
  box-shadow: 0 5px 5px 0 #bdbdbd, 0 0 0 1px #bdbdbd;

  ul {
    padding-inline-start: 0 !important;
    font-family: 'IBM Plex Mono', monospace;
  }

  li {
    list-style: none;
  }

  .skillsTitle {
    font-size: 1.5rem !important;
    font-weight: 600;
  }

  .skills {
    text-align: center;
    min-height: 100%;
    padding: 70px 45px;
    border-right: 1px solid #bdbdbd;
    line-height: 2;
  }

  .beSkills {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .feSkills {
    flex: 0 0 50%;
    max-width: 50%;
  }
`
