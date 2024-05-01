import styled from 'styled-components'
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

    img {
      object-fit: cover;
    }
  }
`
