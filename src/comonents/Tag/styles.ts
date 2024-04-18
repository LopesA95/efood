import styled from 'styled-components'
import { colors } from '../../style/theme/default'
import { TagProps } from './index'

export const TagContainer = styled.div<TagProps>`
  background-color: ${colors.colorSecondary};
  color: ${(props) =>
    props.colortext === 'primary'
      ? colors.ColorPrimary
      : colors.colorSecondary};
  font-size: ${(props) => (props.size === 'small' ? '14px' : '18px')};
  font-weight: 700;
  padding: 6px 4px;
`
