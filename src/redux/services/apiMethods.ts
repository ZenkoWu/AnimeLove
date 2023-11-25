import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { BASE_URL} from './api/apiRoutes'
import { TCategories } from '@/types/types'
import { TAnimeFilterState } from '@/types/anime'
import { TMangaFilterState } from '@/types/manga'

type TGetListParams = {
    route: TCategories, 
    pageLimit: number, // 1 - 25
    currentPage: number, 
    type: TAnimeFilterState['type'] | TMangaFilterState['type'], 
    rating?: TAnimeFilterState['rating'] | '', 
    orderBy: TAnimeFilterState['orderBy'] | TMangaFilterState['orderBy'],
    status: TAnimeFilterState['status'] | TMangaFilterState['status'],
    sfw: 'sfw' | ''
}

type TGetCharactersData = {
    route: TCategories, 
    pageLimit: number,  // 1 - 25
    currentPage: number
}

export type TGetSearchedData = {
    route: TCategories, 
    input: string, 
    limit: number, // 1 - 25
    sfw: 'sfw' | ''
}

type TFuncData = {
    route: TCategories,
    id: string
}

export const apiMethods = createApi({ 
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (builder) => ({
        getList: builder.query({query: ({
            route, 
            pageLimit, 
            currentPage, 
            type, 
            rating, 
            orderBy, 
            status, 
            sfw
        }: TGetListParams) => (
            `${route}?limit=${pageLimit}&page=${currentPage}&type=${type}&rating=${rating}&order_by=${orderBy}&status=${status}&${sfw}`
        )}),

        getElementById: builder.query({query: ({route, id}: TFuncData) => (
            `${route}/${id}/full`
        )}),
        
        getSearchedData: builder.query({query: ({route, input, limit, sfw}: TGetSearchedData) => (
            `${route}?q=${input}&limit=${limit}&${sfw}`
        )}),
        getRecommendations: builder.query({query: ({route, id}: TFuncData) => ( // only anime and manga
            `${route}/${id}/recommendations`
        )}),
        getCharacters: builder.query({query: ({route, pageLimit, currentPage}: TGetCharactersData) => (
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
