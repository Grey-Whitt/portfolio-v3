import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.lightGray};
    color: ${({ theme }) => theme.colors.jet};
    font-size: 1.15em;
    font-family: 'Open Sans', sans-serif;
    margin: 0;
  }

  p {
    opacity: 0.9;
    line-height: 1.5;
  }

  img {
    max-width: 100%;
}
`

export default GlobalStyle
