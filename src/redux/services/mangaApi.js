import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {API_ROUTES, BASE_URL} from './apiRoutes/apiRoutes'
//todo typescript
// todo вынести в функцию и передавать другой апиРоут - функции похожи на аниме 
export const mangaApi = createApi({ 
    reducerPath: 'manga',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (builder) => ({
        getManga: builder.query({query: ({pageLimit, currentPage, type, orderBy, status}) => (
            `${API_ROUTES.manga}?limit=${pageLimit}&page=${currentPage}&type=${type}&order_by=${orderBy}&status=${status}`
        )}),
        getMangaById: builder.query({query: (id) => (
            `${API_ROUTES.manga}/${id}/full`
        )}),
        getSearchedManga: builder.query({query: ({input, limit}) => (
            `${API_ROUTES.manga}?q=${input}&limit=${limit}`
        )}),
        getMangaRecommends: builder.query({query: (id) => (
            `${API_ROUTES.manga}/${id}/recommendations`
        )}),
    })
})

export const {
    useGetMangaQuery,
    useGetMangaByIdQuery,
    useGetSearchedMangaQuery,
    useGetMangaRecommendsQuery
} = mangaApi;
