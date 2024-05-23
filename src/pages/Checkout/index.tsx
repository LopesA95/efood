import { useFormik } from 'formik'
import { useState } from 'react'
import InputMask from 'react-input-mask'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { Button } from '../../components/Button'
import { CardCheckout } from '../../components/CheckoutCard'
import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'
import { clear, close } from '../../store/reducers/cart'
import {
  CheckoutContainer,
  ContentCheckout,
  DeliveryStatus,
  InputGroup,
  OverlayCheckout,
  SidebarCheckout
} from './styles'

interface CheckoutProps {
  handleReturnToCart?: () => void
}

export const Checkout: React.FC<CheckoutProps> = ({ handleReturnToCart }) => {
  const [payment, setPayment] = useState(false)
  const [confirmationVisible, setConfirmationVisible] = useState(false)
  const [transactionId, setTransactionId] = useState<string | undefined>()

  const [purchase, { data, isSuccess }] = usePurchaseMutation()

  const { isOpen, menus } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleCloseCart = () => {
    dispatch(close())
  }

  const handleConcluir = () => {
    dispatch(clear())
    navigate('/')
    handleCloseCart()
  }

  const handleSubmit = async () => {
    await form.validateForm().then((errors) => {
      if (Object.keys(errors).length === 0) {
        setConfirmationVisible(true)
      } else {
        alert('Por favor, preencha todos os campos corretamente.')
      }
    })
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
      cardCVV: '',
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
      cardCVV: Yup.string().when((values, schema) =>
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
            code: Number(values.cardCVV),
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

  if (menus.length === 0 && !isSuccess) {
    return <Navigate to="/" />
  }

  return (
    <CheckoutContainer className={isOpen ? 'is-open' : ''}>
      <OverlayCheckout onClick={handleCloseCart} />
      <SidebarCheckout>
        {isSuccess && data ? (
          <CardCheckout title={`Pedido realizado - ${data?.orderId}`}>
            <DeliveryStatus>
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
              <Button
                onClick={handleConcluir}
                type="button"
                title="Clique para continuar para o pagamento"
              >
                Concluir
              </Button>
            </DeliveryStatus>
          </CardCheckout>
        ) : (
          <form onSubmit={form.handleSubmit}>
            {payment ? (
              <>
                <CardCheckout title="Pagamento">
                  <>
                    <InputGroup>
                      <label htmlFor="cardName">Nome no cartão</label>
                      <input
                        name="cardName"
                        id="cardName"
                        type="text"
                        value={form.values.cardName}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkHasInputError('cardName') ? 'has-error' : ''
                        }
                      />
                    </InputGroup>
                    <ContentCheckout>
                      <InputGroup maxWidth="310px">
                        <label htmlFor="cardNumber">Número do cartão</label>
                        <InputMask
                          name="cardNumber"
                          id="cardNumber"
                          type="text"
                          value={form.values.cardNumber}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkHasInputError('cardNumber') ? 'has-error' : ''
                          }
                          mask="9999 9999 9999 9999"
                        />
                      </InputGroup>
                      <InputGroup maxWidth="100px">
                        <label htmlFor="cardCVV">CVV</label>
                        <InputMask
                          name="cardCVV"
                          id="cardCVV"
                          type="text"
                          value={form.values.cardCVV}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkHasInputError('cardCVV') ? 'has-error' : ''
                          }
                          mask="999"
                        />
                      </InputGroup>
                    </ContentCheckout>
                    <ContentCheckout>
                      <InputGroup maxWidth="155px">
                        <label htmlFor="cardMonthExpiration">
                          Mês de vencimento
                        </label>
                        <InputMask
                          name="cardMonthExpiration"
                          id="cardMonthExpiration"
                          type="text"
                          value={form.values.cardMonthExpiration}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkHasInputError('cardMonthExpiration')
                              ? 'has-error'
                              : ''
                          }
                          mask="99"
                        />
                      </InputGroup>
                      <InputGroup maxWidth="155px">
                        <label htmlFor="cardYearExpiration">
                          Ano de vencimento
                        </label>
                        <InputMask
                          name="cardYearExpiration"
                          id="cardYearExpiration"
                          type="text"
                          value={form.values.cardYearExpiration}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkHasInputError('cardYearExpiration')
                              ? 'has-error'
                              : ''
                          }
                          mask="9999"
                        />
                      </InputGroup>
                    </ContentCheckout>
                  </>
                </CardCheckout>
                <Button
                  onClick={handleSubmit}
                  type="submit"
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
                      <input
                        name="fullName"
                        id="fullName"
                        type="text"
                        value={form.values.fullName}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkHasInputError('fullName') ? 'has-error' : ''
                        }
                      />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="adress">Endereço</label>
                      <input
                        name="adress"
                        id="adress"
                        type="text"
                        value={form.values.adress}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkHasInputError('adress') ? 'has-error' : ''
                        }
                      />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="city">Cidade</label>
                      <input
                        name="city"
                        id="city"
                        type="text"
                        value={form.values.city}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkHasInputError('city') ? 'has-error' : ''
                        }
                      />
                    </InputGroup>
                    <ContentCheckout>
                      <InputGroup maxWidth="155px">
                        <label htmlFor="zipCode">CEP</label>
                        <InputMask
                          name="zipCode"
                          id="zipCode"
                          type="text"
                          value={form.values.zipCode}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkHasInputError('zipCode') ? 'has-error' : ''
                          }
                          mask="99999-999"
                        />
                      </InputGroup>
                      <InputGroup maxWidth="155px">
                        <label htmlFor="numberHome">Número</label>
                        <input
                          name="numberHome"
                          id="numberHome"
                          type="text"
                          value={form.values.numberHome}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkHasInputError('numberHome') ? 'has-error' : ''
                          }
                        />
                      </InputGroup>
                    </ContentCheckout>
                    <InputGroup>
                      <label htmlFor="complement">Complemento</label>
                      <input
                        name="complement"
                        id="complement"
                        type="text"
                        value={form.values.complement}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkHasInputError('complement') ? 'has-error' : ''
                        }
                      />
                    </InputGroup>
                  </>
                </CardCheckout>
                <Button
                  onClick={async () => {
                    await form.validateForm().then((errors) => {
                      if (
                        !errors.fullName &&
                        !errors.adress &&
                        !errors.city &&
                        !errors.zipCode &&
                        !errors.numberHome
                      ) {
                        setPayment(true)
                      } else {
                        alert(
                          'Por favor, preencha todos os campos de entrega corretamente.'
                        )
                      }
                    })
                  }}
                  isActive={!payment}
                  type="button"
                  title="Clique para continuar para o pagamento"
                >
                  Continuar com o Pagamento
                </Button>

                <Button
                  onClick={handleReturnToCart}
                  type="button"
                  title="Clique para voltar ao carrinho"
                >
                  Voltar para o carrinho
                </Button>
              </>
            )}
          </form>
        )}
      </SidebarCheckout>
    </CheckoutContainer>
  )
}
