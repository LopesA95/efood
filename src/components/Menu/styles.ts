import styled from 'styled-components'
import { colors } from '../../style/theme/default'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${colors.white};
  color: ${colors.colorSecondary};
  border: 1px solid ${colors.colorSecondary};
  position: relative;

  img {
    display: block;
    width: 100%;
    height: 217px;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const CardTitle = styled.h3`
  padding: 8px;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
`

export const Tipos = styled.div`
  display: flex;
  position: absolute;
  flex-direction: row;
  top: 8px;
  right: 8px;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  top: 222px;
  right: 8px;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    img {
      width: 21px;
      height: 21px;
      margin-right: 8px;
    }
  }
`

export const CardDescription = styled.p`
  display: flex;
  text-align: justify;
  padding: 0 8px;
  font-size: 14px;
  line-height: 22px;
  height: 130px;
`
