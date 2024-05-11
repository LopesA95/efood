import styled from 'styled-components'
import { colors } from '../../style/theme/default'

export const Container = styled.div`
  padding: 32px 8px 0 8px;
  width: 360px;
  margin-bottom: 24px;

  h2 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
    color: ${colors.ColorPrimary};
  }
`
