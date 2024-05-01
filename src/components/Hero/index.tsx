import { Menu } from '../../pages/Home'
import { Banner, Infos, Title } from './styles'

type Props = {
  menu: Menu
}

export const Hero = ({ menu }: Props) => {
  return (
    <Banner style={{ backgroundImage: `url(${menu.capa})` }}>
      <div className="container">
        <Infos>
          <Title>{menu.tipo}</Title>
          <p>{menu.titulo}</p>
        </Infos>
      </div>
    </Banner>
  )
}
