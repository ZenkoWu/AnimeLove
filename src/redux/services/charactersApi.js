import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {API_ROUTES, BASE_URL} from './apiRoutes/apiRoutes'

export const charactersApi = createApi({ //todo вынести в отдельные функции 
    reducerPath: 'characters',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (builder) => ({
        getCharacters: builder.query({query: ({pageLimit, currentPage}) => (
            `${API_ROUTES.characters}?limit=${pageLimit}&page=${currentPage}`
        )}),

        getCharacterById: builder.query({query: (id) => (
            `${API_ROUTES.characters}/${id}/full`
        )}),
        getSearchedCharacters: builder.query({query: ({input, limit, sfw}) => (
            `${API_ROUTES.characters}?q=${input}&limit=${limit}&${sfw}`
        )}),
    })
})

export const {
    useGetCharactersQuery,
    useGetCharacterByIdQuery,
    useGetSearchedCharactersQuery
} = charactersApi;


