import styled from 'styled-components'
import { colors } from '../../style/theme/default'

export const Container = styled.section`
  background-color: ${colors.backgroundColor};
  margin-top: 80px;
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;

  li {
    max-width: 476px;
    display: flex;
    gap: 80px;
    padding: 16px;
  }
`
