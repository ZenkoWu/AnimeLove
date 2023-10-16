import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {API_ROUTES, BASE_URL} from './apiRoutes/apiRoutes'

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
        getFavoritesAnime: builder.query({
            async queryFn(ids, _queryApi, _extraOptions, fetchWithBQ) {
                ids = Object.keys(ids) //???
                const response = await Promise.all(
                    ids.map((animeId) => fetchWithBQ( `${API_ROUTES.anime}/${animeId}/full`))
                );
                
                return response[0].data
                    ? { data: response.map((anime) => anime.data)}
                    : { error: response[0].error};
            },
          })
    })
})

export const {
    useGetAnimeListQuery,
    useGetAnimeFullByIdQuery,
    useGetFavoritesAnimeQuery
} = animeApi;

