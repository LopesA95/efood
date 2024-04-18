import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

import {
  CartInfo,
  ContentHeader,
  HeaderBar,
  RestaurantTitle,
  StyledBanner,
  Title
} from './styles'
import logo from '../../assets/images/logo.svg'
export const Header = () => {
  const location = useLocation()
  const [isRestaurantRoute, setIsRestaurantRoute] = useState(
    location.pathname.startsWith('/italiana') ||
      location.pathname.startsWith('/japonesa')
  )

  useEffect(() => {
    setIsRestaurantRoute(
      location.pathname.startsWith('/italiana') ||
        location.pathname.startsWith('/japonesa')
    )
  }, [location])

  return (
    <HeaderBar>
      <div>
        {isRestaurantRoute ? (
          <>
            <ContentHeader>
              <RestaurantTitle>Restaurantes</RestaurantTitle>{' '}
              <Link to="/">
                <img src={logo} alt="Efood" />
              </Link>
              <CartInfo>0 produtos adicionados no carrinho</CartInfo>{' '}
            </ContentHeader>
            <StyledBanner />
          </>
        ) : (
          <div className="container">
            <Link to="/">
              <img src={logo} alt="Efood" />
            </Link>
            <Title>
              Viva experiências gastronômicas no conforto da sua casa
            </Title>
          </div>
        )}
      </div>
    </HeaderBar>
  )
}
