import styled from 'styled-components'
import { colors } from '../../style/theme/default'
import { Props } from './index'

export const TagContainer = styled.div<Props>`
  background-color: ${(props) =>
    props.comp === 'primary' ? 'transparent' : colors.colorSecondary};
  color: ${(props) =>
    props.comp === 'primary' ? colors.colorSecondary : colors.ColorPrimary};
  font-size: ${(props) => (props.size === 'small' ? '14px' : '18px')};
  font-weight: 700;
  padding: ${(props) => (props.size === 'small' ? '4px 8px' : '0')};
`
