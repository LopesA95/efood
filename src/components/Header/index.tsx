import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'
import { Container } from '../../style/global'
import { CartButton, HeaderBar, Title } from './styles'

export const Header = () => {
  const dispatch = useDispatch()

  const { menus } = useSelector((state: RootReducer) => state.cart)

  const handleOpenCart = () => {
    dispatch(open())
  }
  const location = useLocation()
  const [altura, setAltura] = useState('384px')

  useEffect(() => {
    if (location.pathname !== '/') {
      setAltura('186px')
    } else {
      setAltura('384px')
    }
  }, [location])
  return (
    <HeaderBar altura={altura}>
      <div>
        <div>
          {location.pathname === '/' ? (
            <div className="container">
              <Link to="/">
                <img src={logo} alt="Efood" />
              </Link>
              <Title>
                Viva experiências gastronômicas no conforto da sua casa
              </Title>
            </div>
          ) : (
            <Container>
              <h2>Restaurantes</h2>
              <Link to="/">
                <img src={logo} alt="Efood" />
              </Link>
              <CartButton onClick={handleOpenCart}>
                {menus.length} produto(s) no carrinho
              </CartButton>
            </Container>
          )}
        </div>
      </div>
    </HeaderBar>
  )
}
