import { BounceLoader } from 'react-spinners'
import { Container } from './styles'
import { colors } from '../../style/theme/default'

export const Loader = () => {
  return (
    <Container>
      <BounceLoader color={colors.colorSecondary} />
    </Container>
  )
}
