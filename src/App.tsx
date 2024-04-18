import { Footer } from './comonents/Footer'
import { Header } from './comonents/Header'
import { GlobalStyle } from './style/global'
import { Rotas } from './routes'
import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}
