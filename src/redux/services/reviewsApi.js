import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {API_ROUTES, BASE_URL} from './api_routes/api_routes'
 
export const reviewsApi = createApi({
    reducerPath: 'reviews',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (builder) => ({
        getReviews: builder.query({query: () => API_ROUTES.reviews}),
        getReview: builder.query({query: (movieId) => `${API_ROUTES.reviewsByMovieId}${movieId}`})
    }) 
})

export const {useGetReviewsQuery, useGetReviewQuery} = reviewsApi;
