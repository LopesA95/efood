import styled from 'styled-components'
import { breakpoints } from '../../style/global'
import { colors } from '../../style/theme/default'

export const PratoContainer = styled.div`
  display: flex;
  width: 1024px;
  background-color: ${colors.colorSecondary};
  color: ${colors.ColorPrimary};

  @media (max-width: ${breakpoints.desktop}) {
    align-items: center;
    justify-content: center;
    display: flex;
    width: 768px;
    margin: 0 auto;
    max-width: 80%;
  }
`
export const Content = styled.div`
  display: flex;
  column-gap: 24px;

  div {
    max-width: 688px;
  }
`

export const Foto = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: 32px;
`
export const Title = styled.h1`
  padding-top: 32px;
  padding-bottom: 16px;
  font-size: 18px;
  font-weight: bold;
`
export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
`
export const Porcao = styled.p`
  color: ${colors.ColorPrimary};
  margin-top: 16px;
`
export const Button = styled.button`
  background-color: ${colors.ColorPrimary};
  width: 220x;
  border: 1px solid ${colors.ColorPrimary};
  padding: 4px 8px;
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 14px;
  color: ${colors.colorSecondary};
  font-weight: 700;
  cursor: pointer;
  margin-top: 16px;

  @media (max-width: ${breakpoints.desktop}) {
    margin-bottom: 16px;
  }
`
