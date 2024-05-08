import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CardapioItem } from '../../pages/Home'

type CartState = {
  menus: CardapioItem[]
  isOpen: boolean
}

const initialState: CartState = {
  menus: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CardapioItem>) => {
      const menu = state.menus.find((menu) => menu.id === action.payload.id)
      if (!menu) {
        state.menus.push(action.payload)
      } else {
        alert('Prato já adicionado')
      }
    },
    removeToCart: (state, action: PayloadAction<number>) => {
      state.menus = state.menus.filter((menu) => menu.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { addToCart, close, open, removeToCart } = cartSlice.actions
export default cartSlice.reducer
