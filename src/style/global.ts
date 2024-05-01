import styled, { createGlobalStyle } from 'styled-components'
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

export const Container = styled.div`
  display: flex;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  align-items: center;

  h2 {
    display: flex;
    max-width: 109px;
    font-size: 18px;
    color: ${colors.colorSecondary};
  }

  p {
    display: flex;
    max-width: 256px;
    width: 100%;
    font-size: 18px;
    color: ${colors.colorSecondary};
  }
  img {
    display: flex;
    max-width: 125px;
    margin-right: 240px;
    margin-left: 350px;
  }
`
