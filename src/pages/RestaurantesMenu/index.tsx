import { useParams } from 'react-router-dom'
import { CardapioMenu } from '../../components/CardapioMenu'
import { Hero } from '../../components/Hero'
import { useGetPratosQuery } from '../../services/api'
import { Loader } from '../../components/Loader'

export const Product = () => {
  const { id } = useParams()
  const { data: menu } = useGetPratosQuery(id!)

  if (!menu || !menu.cardapio) {
    return <Loader />
  }
  return (
    <>
      <Hero menu={menu} />
      <CardapioMenu menus={[menu]} />
    </>
  )
}
