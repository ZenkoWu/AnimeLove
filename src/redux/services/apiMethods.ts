import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {API_ROUTES, BASE_URL} from './apiRoutes/apiRoutes'
//todo типизировать
export const apiMethods = createApi({ 
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (builder) => ({
        getList: builder.query({query: ({route, pageLimit, currentPage, type, rating, orderBy, status, sfw}) => (
            `${route}?limit=${pageLimit}&page=${currentPage}&type=${type}&rating=${rating}&order_by=${orderBy}&status=${status}&${sfw}`
        )}),

        getElementById: builder.query({query: ({route, id}) => (
            `${route}/${id}/full`
        )}),
        
        getSearchedData: builder.query({query: ({route, input, limit, sfw}) => (
            `${route}?q=${input}&limit=${limit}&${sfw}`
        )}),
        getRecommendations: builder.query({query: ({route, id}) => ( // only anime and manga
            `${route}/${id}/recommendations`
        )}),
        getCharacters: builder.query({query: ({route, pageLimit, currentPage}) => (
            `${route}?limit=${pageLimit}&page=${currentPage}`
        )}),
    })
})

export const {
    useGetElementByIdQuery,
    useGetRecommendationsQuery,
    useGetListQuery,
    useGetSearchedDataQuery,
    useGetCharactersQuery
} = apiMethods;
