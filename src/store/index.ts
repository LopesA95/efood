import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'
import cartReducer from './reducers/cart'
import payementReducer from './reducers/payment'
export const store = configureStore({
  reducer: {
    payment: payementReducer,
    cart: cartReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
