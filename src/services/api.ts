import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Menu } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Menu[], void>({
      query: () => '/restaurantes'
    }),
    getPratos: builder.query<Menu, string>({
      query: (id) => `/restaurantes/${id}`
    })
  })
})
export const { useGetRestaurantsQuery, useGetPratosQuery } = api
export default api
