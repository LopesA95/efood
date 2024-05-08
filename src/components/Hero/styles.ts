import styled from 'styled-components'
import { breakpoints } from '../../style/global'
import { colors } from '../../style/theme/default'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  display: block;
  width: 100%;
  height: 280px;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  position: relative;

  padding-top: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    background-size: cover;
  }

  &::after {
    position: absolute;
    background-color: #000;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
  }
`

export const Title = styled.h3`
  font-weight: 100;
  font-size: 32px;
  line-height: 38px;
  margin-bottom: 156px;
`

export const Infos = styled.div`
  padding: 16px;
  color: ${colors.white};
  height: 280px;
  justify-content: space-between;

  h2 {
    font-size: 32px;
  }

  p {
    max-width: 676px;
    width: 100%;
    font-size: 32px;
    margin: 16px 0;
    font-weight: bold;

    span {
      display: block;
      text-decoration: line-through;
    }
  }
`
