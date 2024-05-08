import styled from 'styled-components'
import { breakpoints } from '../../style/global'
import { colors } from '../../style/theme/default'

export const Container = styled.section`
  background-color: ${colors.backgroundColor};
  margin: 0 auto;
  margin-top: 80px;
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }

  li {
    max-width: 476px;
    display: flex;
    gap: 80px;
    padding: 16px;

    @media (max-width: ${breakpoints.desktop}) {
      display: flex;
      margin: 0 auto;
      padding: 8px;
    }
  }
`
