import { createGlobalStyle } from 'styled-components'
import { colors } from './theme/default'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${colors.backgroundColor};
    -webkit-font-smoothing: antialiased;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
