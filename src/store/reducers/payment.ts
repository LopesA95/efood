import { createSlice } from '@reduxjs/toolkit'
import { PurchasePayload } from '../../services/api'

type PaymentState = {
  items: PurchasePayload[]
  isOpen: boolean
}

const initialState: PaymentState = {
  items: [],
  isOpen: false
}

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { open, close } = paymentSlice.actions
export default paymentSlice.reducer