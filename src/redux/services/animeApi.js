import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {API_ROUTES, BASE_URL} from './api_routes/api_routes'

export const animeApi = createApi({
    reducerPath: 'anime',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (builder) => ({
        getAnimeList: builder.query({query: ({pageLimit, currentPage}) => (
            `${API_ROUTES.anime}?limit=${pageLimit}&page=${currentPage}`
        )}),
        getAnimeFullById: builder.query({query: (id) => (
            `${API_ROUTES.anime}/${id}/full`
        )}),
        getSearchedAnimeList: builder.query({query: ({input, limit}) => (
            `${API_ROUTES.anime}?q=${input}&limit=${limit}`
        )}),
    })
})

export const {
    useGetAnimeListQuery,
    useGetAnimeFullByIdQuery,
    useGetSearchedAnimeListQuery
} = animeApi;

