import { useEffect, useState } from 'react'
import { Menu } from '../../pages/Home'
import { Image } from './styles'

export function Banner() {
  const [menu, setMenu] = useState<Menu>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}')
      .then((res) => res.json())
      .then((res) => {
        setMenu(res)
      })
  }, [])
  if (!menu) {
    return <h3>Carregando ...</h3>
  }

  return <Image style={{ backgroundImage: `url(${menu.capa})` }} />
}
