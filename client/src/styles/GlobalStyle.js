import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.charlestonGreen};
    color: hsl(192, 100%, 9%);
    font-size: 1.15em;
    font-family: 'Open Sans', sans-serif;
    margin: 0;
  }

  p {
    opacity: 0.6;
    line-height: 1.5;
  }

  img {
    max-width: 100%;
}
`

export default GlobalStyle
