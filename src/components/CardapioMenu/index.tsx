import { Menu } from '../../pages/Home'
import { Cardapios } from '../CardapioRest'
import { Container, List } from './styles'

export type Props = {
  title?: string
  menus: Menu[]
}
export const formatPrice = (preco = 0): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const CardapioMenu = ({ menus, title }: Props) => {
  return (
    <Container>
      <div className="container">
        <h2>{title}</h2>
        <List>
          {menus.flatMap((menu) =>
            menu.cardapio.map((menu) => (
              <li key={menu.id}>
                <Cardapios
                  id={menu.id}
                  descricao={menu.descricao}
                  foto={menu.foto}
                  nome={menu.nome}
                  porcao={menu.porcao}
                  preco={menu.preco}
                />
              </li>
            ))
          )}
        </List>
      </div>
    </Container>
  )
}
