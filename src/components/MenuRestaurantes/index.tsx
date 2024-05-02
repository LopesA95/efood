import { Menu } from '../../pages/Home'
import { Product } from '../Menu'
import { Container, List } from './styles'

export type Props = {
  title?: string
  menus: Menu[]
}

export const MenuList = ({ menus, title }: Props) => {
  const getMenuTags = (menus: Menu) => {
    const tags = []
    if (menus.tipo) {
      tags.push(menus.tipo)
    }

    if (menus.destacado) {
      tags.push('Destaque do dia')
    }

    return tags
  }

  return (
    <Container>
      <div className="container">
        <h2>{title}</h2>
        <List>
          {menus.map((menu) => (
            <li key={menu.id}>
              <Product
                id={menu.id}
                descricao={menu.descricao}
                capa={menu.capa}
                titulo={menu.titulo}
                tipo={getMenuTags(menu)}
                avaliacao={menu.avaliacao}
              />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}
