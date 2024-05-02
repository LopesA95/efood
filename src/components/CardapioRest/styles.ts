import styled from 'styled-components'
import { colors } from '../../style/theme/default'

export const CardapioContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 330px;
  background-color: ${colors.colorSecondary};
  color: ${colors.ColorPrimary};
  cursor: pointer;

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
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`
export const ModalContent = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  .close {
    width: 16px;
    height: 16px;
    margin-top: 8px;
    margin-right: 8px;
    cursor: pointer;
    position: absolute;
    right: 0;
  }

  header {
    display: flex;
    margin-bottom: 24px;
    justify-content: space-between;

    h4 {
      font-size: 18px;
      font-weight: bold;
    }
  }

  > img {
    width: 100%;
  }
`
