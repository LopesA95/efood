import styled from 'styled-components'
import { breakpoints } from '../../style/global'
import { colors } from '../../style/theme/default'

export const Container = styled.section`
  background-color: ${colors.backgroundColor};
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  width: 100%;
  margin-top: 56px;

  li {
    display: flex;

    @media (max-width: ${breakpoints.tablet}) {
      margin: 0 auto;
    }
    @media (max-width: 568px) {
      display: flex;
      margin: 0 auto;
      padding: 8px;
    }

    img {
      object-fit: cover;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 568px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
