import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {API_ROUTES, BASE_URL} from './api_routes/api_routes'

export const mangaApi = createApi({
    reducerPath: 'manga',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (builder) => ({
        getMangaList: builder.query({query: ({pageLimit, currentPage}) => (
            `${API_ROUTES.manga}?limit=${pageLimit}&page=${currentPage}`
        )}),
        getMangaFullById: builder.query({query: (id) => (
            `${API_ROUTES.manga}/${id}/full`
        )})
    })
})

export const {
    useGetMangaListQuery,
    useGetMangaFullByIdQuery 
} = mangaApi;

