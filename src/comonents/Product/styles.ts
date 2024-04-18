import styled from 'styled-components'
import { colors } from '../../style/theme/default'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div<{ newRoute?: boolean }>`
  background-color: ${(props) =>
    props.newRoute ? colors.colorSecondary : colors.white};
  color: ${(props) => (props.newRoute ? colors.white : colors.colorSecondary)};
  border: 1px solid ${colors.colorSecondary};
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }

  ${(props) =>
    props.newRoute &&
    `
    display: flex;
    flex-direction: column;
    overflow: hidden;

    img{
      padding: 8px;
    }

  `}
`

export const CardTitle = styled.h3`
  padding: 8px;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
`

export const Infos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex - end;
  position: absolute;
  top: 8px;
  right: 8px;
`

export const Content = styled.div<{ newRoute?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: flex - end;
  align-items: center;
  position: absolute;
  top: 222px;
  right: 8px;

  img {
    margin-right: 8px;
  }

  ${(props) =>
    props.newRoute &&
    `
    margin: 0;
  `}
`

export const CardDescription = styled.p`
  display: flex;
  padding: 0 8px;
  font-size: 14px;
  line-height: 22px;
`
