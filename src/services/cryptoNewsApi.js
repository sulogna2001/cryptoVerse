import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const  cryptoNewsApiHeaders={
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '1cf71076f8msh35b83dd88b4416dp105f70jsn6e8d647aabb0'
}
const baseUrl='https://bing-news-search1.p.rapidapi.com'
const createRequest=(url)=>({url,headers:cryptoNewsApiHeaders})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getCryptoNews: builder.query({
        query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
      }),
    }),
  });
export const {
    useGetCryptoNewsQuery,
}=cryptoNewsApi;

