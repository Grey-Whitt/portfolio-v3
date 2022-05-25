import styled from 'styled-components'

export const LinkSection = styled.div`
  height: 152px;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    padding-left: 10px;
    padding-right: 10px;

    &:hover {
      transform: scale(1.15);
      transition: 0.15s;
    }
  }
`

export const AboutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  justify-content: center !important;
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.34);
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.jet};

  @media (max-width: 1300px) {
    flex-direction: column;
    align-items: center;
    margin: auto;
  }
`

export const AboutLeft = styled.div`
  flex: 0 0 50%;
  background-color: ${({ theme }) => theme.colors.jet};
  color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 30px 0 0 30px;

  @media (max-width: 1300px) {
    border-radius: 30px 30px 0 0;
  }

  .picContainer {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .orangeBox {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid ${({ theme }) => theme.colors.accent};
    border-radius: 20px;
    margin: 20px;
  }
`

export const AboutRight = styled.div`
  flex: 0 0 50%;
  border: 20px solid ${({ theme }) => theme.colors.jet};
  box-shadow: inset 0px 0px 7px 5px rgba(0, 0, 0, 0.34);
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.lightGray};

  .bio {
    padding: 40px;

    @media (max-width: 500px) {
      padding: 20px;
    }
  }

  p {
    color: ${({ theme }) => theme.colors.jet} !important;
    font-size: 1.3rem;

    @media (max-width: 500px) {
      font-size: 16px;
    }
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
