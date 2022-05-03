import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding-right: 40px;
  padding-left: 40px;
  margin-top: 5rem;
  margin-bottom: 5rem;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 576px) {
    padding-right: 10px !important;
    padding-left: 10px !important;
    max-width: 550px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1500px;
  }
`

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
