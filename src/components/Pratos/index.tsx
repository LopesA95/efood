import { Button } from '../Button'
import { CardapioContainer, Description, Title } from './styles'

export type Props = {
  foto?: string
  nome?: string
  descricao: string
  id?: number
}

return (
  <CardapioContainer>
    <img src={foto} alt={nome} />
    <Title>{nome}</Title>
    <Description>{descricao}</Description>
    <Button type="button" title="Adicionar ao carrinho">
      Adicionar ao carrinho
    </Button>
  </CardapioContainer>
)
}


