import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, removeToCart } from '../../store/reducers/cart'
import { Button } from '../Button'
import { formatPrice } from '../CardapioMenu'
import { CartContainer, CartItem, Overlay, Prices, Sidebar } from './styles'

export const Cart = () => {
  const { isOpen, menus } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const handleCloseCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return menus.reduce((total, menu) => total + menu.preco!, 0)
  }

  const handleRemoveItem = (id: number) => {
    dispatch(removeToCart(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={handleCloseCart} />
      <Sidebar>
        <ul>
          {menus.map((menu) => (
            <CartItem key={menu.id}>
              <img src={menu.foto} alt={menu.nome} />
              <div>
                <h3>{menu.nome}</h3>
                <span>{formatPrice(menu.preco)}</span>
              </div>
              <button type="button" onClick={() => handleRemoveItem(menu.id)} />
            </CartItem>
          ))}
        </ul>
        <Prices>
          Valor total <span>{formatPrice(getTotalPrice())}</span>
        </Prices>
        <Button type="button" title="Clique para continuar a compra ">
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}
