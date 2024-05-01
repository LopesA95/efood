// Tag/index.tsx
import { TagContainer } from './styles'

export type Props = {
  size?: 'small' | 'big'
  children: string
  comp?: 'primary' | 'secondary'
}

export const Tag = ({ children, size = 'small', comp }: Props) => (
  <TagContainer size={size} comp={comp}>
    {children}
  </TagContainer>
)
