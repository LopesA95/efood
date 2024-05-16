import styled from 'styled-components'
import { breakpoints } from '../../style/global'
import { colors } from '../../style/theme/default'

type InputGroupProps = {
  maxWidth?: string
}

export const InputGroup = styled.div<InputGroupProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  color: ${colors.ColorPrimary};
  font-weight: 700;

  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input {
    background-color: ${colors.ColorPrimary};
    border: 1px solid ${colors.ColorPrimary};
    height: 32px;
    padding: 0 8px;
    width: 100%;
    font-weight: 700;

    &.error {
      border: 1px solid red;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 16px;
  }
`
export const OverlayCheckout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`
export const CheckoutContainer = styled.div`
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
export const SidebarCheckout = styled.aside`
  background-color: ${colors.colorSecondary};
  z-index: 1;
  max-width: 360px;
`

export const ContentCheckout = styled.div`
  display: flex;
  justify-content: space-between;
`
export const DeliveryStatus = styled.div`
  p {
    color: ${colors.ColorPrimary};
    font-size: 14px;
    margin-bottom: 24px;
  }
`
