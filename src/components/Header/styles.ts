import styled from 'styled-components'
import { colors } from '../../style/theme/default'

import logo from '../../assets/images/fundo_header.svg'
import { breakpoints } from '../../style/global'
import { Hero } from '../Hero'

interface Props {
  altura: string
}

export const HeaderBar = styled.header<Props>`
  background-image: url(${logo});
  padding-top: 64px;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: ${(props) => props.altura};
  font-size: 18px;
  font-weight: bold;

  img {
    @media (max-width: ${breakpoints.desktop}) {
      width: 100px;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    padding-top: 40px;
    height: 250px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    padding-top: 40px;
    height: 200px;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
export const Title = styled.h2`
  display: flex;
  color: ${colors.colorSecondary};
  margin-top: 140px;
  font-size: 36px;
  font-weight: bold;
  line-height: 40px;
  width: 590px;
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 18px;
    width: 100%;
    margin-top: 30px;
  }
`

export const StyledBanner = styled(Hero)`
  margin-top: 60px;
`

export const RestaurantTitle = styled.h3`
  color: ${colors.colorSecondary};
  margin-right: 300px;
`

export const CartInfo = styled.p`
  color: ${colors.colorSecondary};
  margin-left: 125px;
  width: 300px;
`

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1024px;
  margin: 0 auto;
`
export const CartButton = styled.a`
  display: flex;
  cursor: pointer;
  color: ${colors.colorSecondary};

  @media (max-width: ${breakpoints.tablet}) {
    align-items: center;
    justify-content: center;
    margin-top: 12px;
    padding-bottom: 6px;
    width: 256px;
  }
`
