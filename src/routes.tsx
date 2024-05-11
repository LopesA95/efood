import { Route, Routes } from 'react-router-dom'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { Product } from './pages/RestaurantesMenu'

export const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="restaurantes/:id" element={<Product />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
)
