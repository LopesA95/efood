import { MenuList } from '../../components/MenuRestaurantes'

import { useEffect, useState } from 'react'

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
  const [menu, setMenu] = useState<Menu[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => {
        setMenu(res)
      })
  })

  return (
    <>
      <MenuList menus={menu} title="" />
    </>
  )
}
