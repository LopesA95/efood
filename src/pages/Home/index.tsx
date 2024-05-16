import { Loader } from '../../components/Loader'
import { MenuList } from '../../components/MenuRestaurantes'

import { useGetRestaurantsQuery } from '../../services/api'

export interface CardapioItem {
  id: number
  preco: number
  nome: string
  descricao: string
  porcao: string
  foto: string
}

export type Menu = {
  id: number
  titulo: string
  tipo?: string
  destacado: boolean
  avaliacao: string
  descricao: string
  capa: string
  cardapio: CardapioItem[]
}

export const Home = () => {
  const { data: getRestaurants } = useGetRestaurantsQuery()

  if (getRestaurants) {
    return (
      <>
        <MenuList menus={getRestaurants} />
      </>
    )
  }
  return <Loader />
}
