import { useDispatch } from 'react-redux'
import { CardapioItem } from '../../pages/Home'
import { addToCart, open } from '../../store/reducers/cart'
import { formatPrice } from '../CardapioMenu'
import {
  Button,
  Content,
  Description,
  Foto,
  Porcao,
  PratoContainer,
  Title
} from './styles'

type Props = {
  menu: CardapioItem
  foto: string
  nome: string
  descricao: string
  porcao: string
  preco: number
}

export const Prato = ({ menu }: Props) => {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart(menu))
    dispatch(open())
  }
  return (
    <PratoContainer>
      <Content>
        <Foto src={menu?.foto} alt={menu?.nome} />
        <div>
          <Title>{menu?.nome}</Title>
          <Description>{menu?.descricao}</Description>
          <Porcao>{menu?.porcao}</Porcao>
          <Button onClick={handleAddToCart}>
            Adicionar ao carrinho -{' '}
            {menu?.preco && <>{formatPrice(menu?.preco)}</>}
          </Button>
        </div>
      </Content>
    </PratoContainer>
  )
}
