import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {API_ROUTES, BASE_URL} from './api_routes/api_routes'

export const cinemaApi = createApi({
    reducerPath: 'cinema',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (builder) => ({
        getCinemas: builder.query({query: () => API_ROUTES.cinemas})
    })
})

export const {useGetCinemasQuery} = cinemaApi;
