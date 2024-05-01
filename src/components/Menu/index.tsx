import star from '../../assets/images/estrela.svg'
import { ButtonLink } from '../Button/styles'
import { Tag } from '../Tag'
import { Card, CardDescription, CardTitle, Content, Tipos } from './styles'

export type Props = {
  id: number
  titulo: string
  tipo: string[]
  avaliacao: string
  descricao: string
  capa: string
}

export const Product = ({
  titulo,
  descricao,
  capa,
  tipo,
  avaliacao,
  id
}: Props) => {
  const tipoInvertido = [...tipo].reverse()

  return (
    <Card>
      <img src={capa} alt={titulo} />
      <Tipos>
        {tipoInvertido.map((tipo) => (
          <Tag comp="secondary" size="small" key={tipo}>
            {tipo}
          </Tag>
        ))}
      </Tipos>
      <Content>
        <CardTitle>{titulo}</CardTitle>
        <div>
          <Tag comp="primary" size="big">
            {avaliacao}
          </Tag>
          <img src={star} alt="" />
        </div>
      </Content>
      <CardDescription>{descricao}</CardDescription>
      <ButtonLink to={`/restaurantes/${id}`} type="link" title="Saiba mais">
        Saiba mais
      </ButtonLink>
    </Card>
  )
}
