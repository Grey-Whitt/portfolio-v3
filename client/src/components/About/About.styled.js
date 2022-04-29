import styled from 'styled-components'

export const AboutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  justify-content: center !important;
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.34);
  height: 50rem;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.jet};
`

export const AboutLeft = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  background-color: ${({ theme }) => theme.colors.jet};
  color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 30px 0 0 30px;

  .picContainer {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .orangeBox {
    border: 5px solid ${({ theme }) => theme.colors.accent};
    border-radius: 20px;
    height: 80%;
    margin: auto;
  }
`

export const AboutRight = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  border: 20px solid ${({ theme }) => theme.colors.jet};
  box-shadow: inset 0px 0px 7px 5px rgba(0, 0, 0, 0.34);
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.lightGray};

  .bio {
    padding: 40px;
  }

  p {
    color: ${({ theme }) => theme.colors.jet} !important;
    font-size: 1.3rem;
  }

  h2 {
    margin: 0;
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 600;
    font-size: 2.5rem;
  }
`

export const Picture = styled.img`
  max-height: 100%;
  padding: 10px;
  border-radius: 20px;
`
