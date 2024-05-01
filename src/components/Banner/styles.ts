import styled from 'styled-components'
import { colors } from '../../style/theme/default'

export const Image = styled.div`
  width: 100vw;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 80px;
  color: ${colors.white};
  position: relative;
`

export const RestName = styled.h3`
  font-size: 32px;
  font-weight: bold;
  padding-top: 90px;
`

export const Content = styled.div`
  width: 1024px;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: flex-start;
  margin-left: 420px;
`
