import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    margin: 0 auto;
    background: ${(props) => props.theme.background};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, h1, h2, p, span {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 130%;
  }
`
