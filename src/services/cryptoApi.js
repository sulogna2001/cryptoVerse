 
import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders={
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
     'x-rapidapi-key': '1cf71076f8msh35b83dd88b4416dp105f70jsn6e8d647aabb0'
}

const baseUrl='https://coinranking1.p.rapidapi.com'
const createRequest=(url) =>({url,headers:cryptoApiHeaders})

export const cryptoApi=createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder) =>({
        getCryptos:builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        })
    }) 
})

export const {
    useGetCryptosQuery,
}=cryptoApi;
