import styled from 'styled-components'
import { colors } from '../../style/theme/default'

export const Container = styled.div`
  background-color: ${colors.ColorPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 120px;

  img {
    display: flex;
    margin-top: 40px;
    align-items: center;
    margin-right: 8px;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-top: 24px;
  margin-bottom: 80px;
  align-items: center;
  justify-content: center;
`

export const Link = styled.a`
  margin-right: 8px;
`
export const FooterSection = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FooterDescription = styled.p`
  max-width: 480px;
  width: 100%;
  height: 24px;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  color: ${colors.colorSecondary};
`
