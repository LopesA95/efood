import { useParams } from 'react-router-dom'
import { CardapioMenu } from '../../components/CardapioMenu'
import { Hero } from '../../components/Hero'
import { useGetPratosQuery } from '../../services/api'

export const Product = () => {
  const { id } = useParams()
  const { data: menu } = useGetPratosQuery(id!)

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
