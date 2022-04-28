import styled from 'styled-components'

export const AboutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  justify-content: center !important;
  /* box-shadow: 0 5px 5px 0 rgb(181 181 181 / 50%), 0 0 0 1px #b5b5b5; */
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.34);
`

export const AboutLeft = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  background-color: ${({ theme }) => theme.colors.jet};
  color: ${({ theme }) => theme.colors.lightGray};

  .picContainer {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .orangeBox {
    border: 5px solid ${({ theme }) => theme.colors.accent};
    height: 80%;
  }

  h2 {
    transform: translateY(100%) rotate(-180deg);
    writing-mode: vertical-lr;
    margin: 0;
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 400;
  }
`

export const AboutRight = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  border: 20px solid ${({ theme }) => theme.colors.jet};
  box-shadow: inset 0px 0px 7px 5px rgba(0, 0, 0, 0.34);

  p {
    padding: 50px;
    color: ${({ theme }) => theme.colors.jet} !important;
    font-size: 1.2rem;
  }
`

export const Picture = styled.img`
  max-height: 100%;
  padding: 10px;
`
