import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CardapioMenu } from '../../components/CardapioMenu'
import { Hero } from '../../components/Hero'
import { Menu } from '../Home'

export const Product = () => {
  const { id } = useParams()
  const [menu, setMenu] = useState<Menu>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setMenu(data)
      })
      .catch((error) => console.error('Erro:', error))
  }, [id])

  if (!menu || !menu.cardapio) {
    return <h3>Carregando...</h3>
  }
  return (
    <>
      <Hero menu={menu} />
      <CardapioMenu menus={[menu]} />
    </>
  )
}
