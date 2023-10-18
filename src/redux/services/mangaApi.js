import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {API_ROUTES, BASE_URL} from './apiRoutes/apiRoutes'

export const mangaApi = createApi({
    reducerPath: 'manga',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (builder) => ({
        getMangaList: builder.query({query: ({pageLimit, currentPage}) => (
            `${API_ROUTES.manga}?limit=${pageLimit}&page=${currentPage}`
        )}),
        getMangaFullById: builder.query({query: (id) => (
            `${API_ROUTES.manga}/${id}/full`
        )}),
        getSearchedMangaList: builder.query({query: ({input, limit}) => (
            `${API_ROUTES.manga}?q=${input}&limit=${limit}`
        )}),
    })
})

export const {
    useGetMangaListQuery,
    useGetMangaFullByIdQuery,
    useGetSearchedMangaListQuery
} = mangaApi;

