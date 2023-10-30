import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {API_ROUTES, BASE_URL} from './apiRoutes/apiRoutes'

export const animeApi = createApi({ //todo вынести в отдельные функции и вынести в независимые фунции т к идет дублкация апи
    reducerPath: 'anime',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (builder) => ({
        getAnime: builder.query({query: ({pageLimit, currentPage, type, rating, orderBy, status, sfw}) => (
            `${API_ROUTES.anime}?limit=${pageLimit}&page=${currentPage}&type=${type}&rating=${rating}&order_by=${orderBy}&status=${status}&${sfw}`
        )}),

        getAnimeById: builder.query({query: (id) => (
            `${API_ROUTES.anime}/${id}/full`
        )}),
        
        getSearchedAnime: builder.query({query: ({input, limit, sfw}) => (
            `${API_ROUTES.anime}?q=${input}&limit=${limit}&${sfw}`
        )}),
        getRecommendations: builder.query({query: (id) => (
            `${API_ROUTES.anime}/${id}/recommendations`
        )}),
    })
})

export const {
    useGetAnimeQuery,
    useGetAnimeByIdQuery,
    useGetSearchedAnimeQuery,
    useGetRecommendationsQuery
} = animeApi;


