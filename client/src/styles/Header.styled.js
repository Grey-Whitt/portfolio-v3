import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.charlestonGreen};
  padding: 40px 0;
  -webkit-box-shadow: ${({ theme }) => theme.colors.radicalRed} 2px 5px 16px 0px,
    5px 5px 48px 5px rgba(0, 0, 0, 0);
  box-shadow: ${({ theme }) => theme.colors.radicalRed} 2px 5px 16px 0px,
    5px 5px 48px 5px rgba(0, 0, 0, 0);

  h1 {
    color: ${({ theme }) => theme.colors.radicalRed};
    font-weight: 600;
    font-size: 50px;
    letter-spacing: 0.1rem;
    margin-left: 0.5rem;
  }
`
