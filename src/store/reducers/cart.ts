import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Menu } from '../../pages/Home'

type CartState = {
  menus: Menu[]
}

const initialState: CartState = {
  menus: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Menu>) => {
      const menu = state.menus.find((menu) => menu.id === action.payload.id)
      if (!menu) {
        state.menus.push(action.payload)
      } else {
        alert('Prato já adicionado')
      }
    }
  }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer
