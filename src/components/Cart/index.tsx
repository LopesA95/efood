import { Button } from '../Button'
import { CartContainer, CartItem, Overlay, Prices, Sidebar } from './styles'

export const Cart = () => {
  return (
    <CartContainer>
      <Overlay />
      <Sidebar>
        <ul>
          <CartItem>
            <img src="" alt="" />
            <div>
              <h3>Nome do prato</h3>
              <span>R$ 60,00</span>
            </div>
            <button type="button" />
          </CartItem>
        </ul>
        <Prices>
          Valor total <span>R$ 120,00</span>
        </Prices>
        <Button
          variant="secondary"
          type="button"
          title="Clique para continuar a compra "
        >
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}
