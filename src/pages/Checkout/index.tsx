import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../../components/Button'
import { CardCheckout } from '../../components/CheckoutCard'
import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'
import { close, open } from '../../store/reducers/cart'
import {
  CheckoutContainer,
  ContentCheckout,
  InputGroup,
  OverlayCheckout,
  SidebarCheckout
} from './styles'

import * as Yup from 'yup'

export const Checkout = () => {
  const [payment, setPayment] = useState(false)

  const [purchase, { isSuccess, data }] = usePurchaseMutation()
  const { isOpen, menus } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const handleReturnCart = () => {
    dispatch(open())
  }

  const handleCloseCart = () => {
    dispatch(close())
  }

  const form = useFormik({
    initialValues: {
      fullName: '',
      adress: '',
      city: '',
      zipCode: '',
      numberHome: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cvv: '',
      cardMonthExpiration: '',
      cardYearExpiration: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .required('O nome é obrigatório')
        .min(5, 'O nome deve ter no mínimo 5 caracteres'),
      adress: Yup.string()
        .required('O endereço é obrigatório')
        .min(5, 'O endereço deve ter no mínimo 5 caracteres'),
      city: Yup.string()
        .required('A cidade é obrigatória')
        .min(5, 'A cidade deve ter no mínimo 5 caracteres'),
      zipCode: Yup.string()
        .required('O CEP é obrigatório')
        .min(8, 'O CEP deve ter no mínimo 9 caracteres'),
      numberHome: Yup.string().required('O número é obrigatório'),

      cardName: Yup.string().when((values, schema) =>
        payment ? schema.required('O nome no cartão é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        payment ? schema.required('O número do cartão é obrigatório') : schema
      ),
      cvv: Yup.string().when((values, schema) =>
        payment ? schema.required('O CVV é obrigatório') : schema
      ),
      cardMonthExpiration: Yup.string().when((values, schema) =>
        payment ? schema.required('O mês é obrigatório') : schema
      ),
      cardYearExpiration: Yup.string().when((values, schema) =>
        payment ? schema.required('O ano é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.adress,
            city: values.city,
            zipcode: values.zipCode,
            number: Number(values.numberHome),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.cardMonthExpiration),
              year: Number(values.cardYearExpiration)
            }
          }
        },
        products: menus.map((menus) => ({
          id: menus.id,
          price: menus.preco
        }))
      })
    }
  })

  const checkHasInputError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(close())
    }
  }, [isSuccess, dispatch])

  // if (menus.length === 0 && !isSuccess) {
  //   return <Navigate to="/" />
  // }

  return (
    <CheckoutContainer className={isOpen ? 'is-open' : ''}>
      <OverlayCheckout onClick={handleCloseCart} />
      <SidebarCheckout>
        {isSuccess && data ? (
          <CardCheckout title="Pedido realizado - {ORDER_ID}">
            <>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </p>

              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras
              </p>
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
            </>
          </CardCheckout>
        ) : (
          <form onSubmit={form.handleSubmit}>
            {payment ? (
              <>
                <CardCheckout title="Pagamento">
                  <>
                    <InputGroup>
                      <label htmlFor="cardName">Nome no cartão</label>
                      <input name="cardName" id="cardName" type="text" />
                    </InputGroup>
                    <ContentCheckout>
                      <InputGroup maxWidth="310px">
                        <label htmlFor="cardNumber">Número do cartão</label>
                        <input name="cardNumber" id="cardNumber" type="text" />
                      </InputGroup>
                      <InputGroup maxWidth="100px">
                        <label htmlFor="cardCVV">CVV</label>
                        <input name="cardCVV" id="cardCVV" type="text" />
                      </InputGroup>
                    </ContentCheckout>
                    <ContentCheckout>
                      <InputGroup maxWidth="155px">
                        <label htmlFor="cardMonthExpiration">
                          Mês de vencimento
                        </label>
                        <input
                          name="cardMonthExpiration"
                          id="cardMonthExpiration"
                          type="text"
                        />
                      </InputGroup>
                      <InputGroup maxWidth="155px">
                        <label htmlFor="cardYearExpiration">
                          Ano de vencimento
                        </label>
                        <input
                          name="cardYearExpiration"
                          id="cardYearExpiration"
                          type="text"
                        />
                      </InputGroup>
                    </ContentCheckout>
                  </>
                </CardCheckout>
                <Button
                  type="button"
                  title="Clique para continuar para o pagamento"
                >
                  Finalizar pagamento
                </Button>
                <Button
                  onClick={() => setPayment(false)}
                  isActive={payment}
                  type="button"
                  title="Clique para voltar ao pagamento"
                >
                  Voltar para a edição de endereço
                </Button>
              </>
            ) : (
              <>
                <CardCheckout title="Entrega">
                  <>
                    <InputGroup>
                      <label htmlFor="fullName">Quem irá receber</label>
                      <input name="FullName" id="fullName" type="text" />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="adress">Endereço</label>
                      <input name="adress" id="adress" type="text" />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="city">Cidade</label>
                      <input name="city" id="city" type="text" />
                    </InputGroup>
                    <ContentCheckout>
                      <InputGroup maxWidth="155px">
                        <label htmlFor="zipCode">CEP</label>
                        <input name="zipCode" id="zipCode" type="text" />
                      </InputGroup>
                      <InputGroup maxWidth="155px">
                        <label htmlFor="numberHome">Número</label>
                        <input name="numberHome" id="numberHome" type="text" />
                      </InputGroup>
                    </ContentCheckout>
                    <InputGroup>
                      <label htmlFor="complement">Complemento</label>
                      <input name="complement" id="complement" type="text" />
                    </InputGroup>
                  </>
                </CardCheckout>
                <Button
                  onClick={() => setPayment(true)}
                  isActive={!payment}
                  type="button"
                  title="Clique para continuar para o pagamento"
                >
                  Continuar com o Pagamento
                </Button>
                <Button
                  onClick={() => handleReturnCart()}
                  type="button"
                  title="Clique para voltar ao carinho"
                >
                  Voltar para o carinho
                </Button>
              </>
            )}
          </form>
        )}
      </SidebarCheckout>
    </CheckoutContainer>
  )
}
