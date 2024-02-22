import {createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react'
import { build } from 'vite'

export const ApiService = createApi({
    reducerPath : "products",
    baseQuery : fetchBaseQuery({
        baseUrl: "https://dummyjson.com/"
    }),
    endpoints: () => ({}),

   
})