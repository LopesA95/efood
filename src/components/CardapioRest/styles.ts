import styled from 'styled-components'
import { colors } from '../../style/theme/default'

export const CardapioContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 330px;
  background-color: ${colors.colorSecondary};
  color: ${colors.ColorPrimary};

  img {
    max-width: 320px;
    width: 100%;
    height: 167px;
    object-fit: cover;
    padding: 8px;
  }

  .button {
    max-width: 320px;
  }
`

export const Title = styled.h1`
  padding: 0 8px;
  font-size: 16px;
  font-weight: bold;
`
export const Description = styled.p`
  padding: 8px;
  font-size: 14px;
  line-height: 22px;
`
