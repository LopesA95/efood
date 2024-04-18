import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../style/theme/default'

export const ButtonContainer = styled.button`
  background-color: ${colors.ColorPrimary};
  width: 298px;
  border: 1px solid ${colors.ColorPrimary};
  align-items: center;
  position: relative;
  display: flex;
  justify-content: center;
  font-size: 18px;
  color: ${colors.colorSecondary};
  font-weight: bold;
  cursor: pointer;
  margin: 8px;
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
