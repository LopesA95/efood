import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { Container } from '../../style/global'
import { HeaderBar, Title } from './styles'

export const Header = () => {
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
              <p>0 produto(s) no carrinho</p>
            </Container>
          )}
        </div>
      </div>
    </HeaderBar>
  )
}
