import React, { useState } from 'react'
import close from '../../assets/images/close.svg'
import { Button } from '../Button'
import { Prato } from '../Pratos'
import {
  CardapioContainer,
  Description,
  Modal,
  ModalContent,
  Title
} from './styles'

export type Props = {
  foto: string
  nome: string
  descricao: string
  id: number
  porcao: string
  preco: number
}

export const Cardapios: React.FC<Props> = ({
  foto,
  nome,
  descricao,
  porcao,
  preco,
  id
}: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const getDesciption = (descricaos: string) => {
    if (descricaos.length > 120) {
      return descricaos.slice(0, 117) + '...'
    }
    return descricaos
  }
  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <CardapioContainer onClick={handleOpenModal}>
        <img src={foto} alt={nome} />
        <Title>{nome}</Title>
        <Description>{getDesciption(descricao)}</Description>
        <Button type="button" title="Adicionar ao carrinho">
          Adicionar ao carrinho
        </Button>
      </CardapioContainer>
      <Modal className={isOpen ? 'visible' : ''}>
        <ModalContent>
          <img
            className="close"
            src={close}
            alt="Close"
            onClick={() => {
              handleCloseModal()
            }}
          />
          <Prato
            menu={{ id, preco, nome, descricao, porcao, foto }}
            foto={foto}
            nome={nome}
            descricao={descricao}
            porcao={porcao ? porcao : ''}
            preco={preco ? preco : 0}
          />{' '}
        </ModalContent>
        <div className="overlay" onClick={handleCloseModal}></div>
      </Modal>
    </>
  )
}
