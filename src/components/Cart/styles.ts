import styled from 'styled-components'
import { colors } from '../../style/theme/default'
import { ButtonContainer } from '../Button/styles'

import lixeira from '../../assets/images/lixeira.svg'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: ${colors.colorSecondary};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;

  ${ButtonContainer} {
    max-width: 344px;
    width: 100%;
    padding: 8px 60px;
    margin: 8px auto;
  }

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.white};
    text-align: center;
  }
`
export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.white};
  margin-top: 40px;
  margin-bottom: 16x;

  span {
    font-size: 14px;
    margin-left: 190px;
    color: ${colors.ColorPrimary};
  }
`
export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.ColorPrimary};
  padding: 8px 8px 12px;
  position: relative;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    width: 360px;
    color: ${colors.colorSecondary};
    font-weight: bold;
    font-size: 18px;
    padding-right: 108px;
  }
  span {
    display: block;
    font-size: 14px;
    color: ${colors.colorSecondary};
    margin-top: 16px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const Button = styled.button``
