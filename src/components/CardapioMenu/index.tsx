import { Menu } from '../../pages/Home'
import { Cardapios } from '../CardapioRest'
import { Container, List } from './styles'

export type Props = {
  title?: string
  menus: Menu[]
}

export const CardapioMenu = ({ menus, title }: Props) => {
  return (
    <Container>
      <div className="container">
        <h2>{title}</h2>
        <List>
          {menus.flatMap((menu) =>
            menu.cardapio.map((item) => (
              <li key={item.id}>
                <Cardapios
                  id={item.id}
                  descricao={item.descricao}
                  foto={item.foto}
                  nome={item.nome}
                />
              </li>
            ))
          )}
        </List>
      </div>
    </Container>
  )
}
