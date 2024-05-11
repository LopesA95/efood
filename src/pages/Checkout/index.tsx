import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../../components/Button'
import { CardCheckout } from '../../components/CheckoutCard'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/payment'
import {
  CheckoutContainer,
  ContentCheckout,
  InputGroup,
  OverlayCheckout,
  SidebarCheckout
} from './styles'

export const Checkout = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.payment)
  const dispatch = useDispatch()

  const handleCloseCart = () => {
    dispatch(close())
  }

  return (
    <CheckoutContainer className={isOpen ? 'is-open' : ''}>
      <OverlayCheckout onClick={handleCloseCart} />
      <SidebarCheckout>
        <CardCheckout title="Entrega">
          <>
            <InputGroup>
              <label htmlFor="fullName">Quem irá receber</label>
              <input name="FullName" id="fullName" type="text" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="adress">Endereço</label>
              <input name="adress" id="adress" type="text" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="adress">Cidade</label>
              <input name="adress" id="adress" type="text" />
            </InputGroup>
            <ContentCheckout>
              <InputGroup maxWidth="155px">
                <label htmlFor="zipCode">CEP</label>
                <input name="zipCode" id="zipCode" type="text" />
              </InputGroup>
              <InputGroup maxWidth="155px">
                <label htmlFor="numberHome">Número</label>
                <input name="numberHome" id="numberHome" type="text" />
              </InputGroup>
            </ContentCheckout>
            <InputGroup>
              <label htmlFor="complement">Complemento</label>
              <input name="complement" id="complement" type="text" />
            </InputGroup>
          </>
        </CardCheckout>

        <CardCheckout title="Pagamento">
          <>
            <InputGroup>
              <label htmlFor="cardName">Nome no cartão</label>
              <input name="cardName" id="cardName" type="text" />
            </InputGroup>
            <ContentCheckout>
              <InputGroup maxWidth="310px">
                <label htmlFor="cardNumber">Número do cartão</label>
                <input name="cardNumber" id="cardNumber" type="text" />
              </InputGroup>
              <InputGroup maxWidth="100px">
                <label htmlFor="cardCVV">CVV</label>
                <input name="cardCVV" id="cardCVV" type="text" />
              </InputGroup>
            </ContentCheckout>
            <ContentCheckout>
              <InputGroup maxWidth="155px">
                <label htmlFor="cardMonthExpiration">Mês de vencimento</label>
                <input
                  name="cardMonthExpiration"
                  id="cardMonthExpiration"
                  type="text"
                />
              </InputGroup>
              <InputGroup maxWidth="155px">
                <label htmlFor="cardYearExpiration">Ano de vencimento</label>
                <input
                  name="cardYearExpiration"
                  id="cardYearExpiration"
                  type="text"
                />
              </InputGroup>
            </ContentCheckout>
          </>
        </CardCheckout>
        <Button type="button" title="Clique para continuar para o pagamento">
          Continuar com o Pagamento
        </Button>
        <Button type="button" title="Clique para voltar ao carinho">
          Voltar para o carinho
        </Button>
      </SidebarCheckout>
    </CheckoutContainer>
  )
}
