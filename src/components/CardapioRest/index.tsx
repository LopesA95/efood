import { Button } from '../Button'
import { CardapioContainer, Description, Title } from './styles'

export type Props = {
  foto?: string
  nome?: string
  descricao: string
  id?: number
}

export const Cardapios = ({ foto, nome, descricao }: Props) => {
  const getDesciption = (descricaos: string) => {
    if (descricaos.length > 120) {
      return descricaos.slice(0, 117) + '...'
    }
    return descricaos
  }
  return (
    <CardapioContainer>
      <img src={foto} alt={nome} />
      <Title>{nome}</Title>
      <Description>{getDesciption(descricao)}</Description>
      <Button type="button" title="Adicionar ao carrinho">
        Adicionar ao carrinho
      </Button>
    </CardapioContainer>
  )
}
