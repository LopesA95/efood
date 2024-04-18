import { useEffect, useState } from 'react'
import { ButtonContainer, ButtonLink } from './styles'
import { useLocation } from 'react-router-dom'

export type Props = {
  title: string
  to?: string
  onClick?: () => void
  children: string
}

export const Button = ({ title, to, onClick, children }: Props) => {
  const location = useLocation()
  const [buttonType, setButtonType] = useState<'button' | 'link'>('link')

  useEffect(() => {
    if (
      location.pathname === '/italiana' ||
      location.pathname === '/japonesa'
    ) {
      setButtonType('button')
    } else {
      setButtonType('link')
    }
  }, [location])

  return buttonType === 'button' ? (
    <ButtonContainer onClick={onClick} title={title}>
      {children}
    </ButtonContainer>
  ) : (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}
