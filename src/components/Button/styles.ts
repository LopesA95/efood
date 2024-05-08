import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Props } from '.'
import { colors } from '../../style/theme/default'

export const ButtonContainer = styled(Link)<Props>`
  background-color: ${(props) =>
    props.backgroundColor ? colors.colorSecondary : colors.ColorPrimary};
  width: ${(props) => (props.variant ? '306px' : '344px')};
  height: 24px;
  border: 1px solid ${colors.ColorPrimary};
  padding: ${(props) => (props.variant ? '8px 84px' : '8px 60px')};
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 14px;
  color: ${colors.colorSecondary};
  font-weight: 700;
  cursor: pointer;
  margin: 8px;

  a {
    width: 100%;
  }
`

export const ButtonLink = styled(Link)`
  border: 2px solid ${colors.colorSecondary};
  background-color: ${colors.colorSecondary};
  color: ${colors.ColorPrimary};
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  padding: 4px 6px;
  display: inline-flex;
  margin-left: 8px;
  margin-bottom: 8px;
  margin-top: 16px;
`
