import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { BASE_URL} from './apiRoutes/apiRoutes'
import { TCategories } from '@/types/mainElementsTypes'
import { TAnimeFilterState } from '../../components/Anime/Anime'
import { TMangaFilterState } from '../../components/Manga/Manga'
import { 
    AGE_RATING, 
    ANIME_ORDER_BY, 
    ANIME_STATUS, 
    MANGA_ORDER_BY, 
    MANGA_STATUS 
} from '@/constants'


type TGetListParams = {
    route: TCategories, 
    pageLimit: number, // 1 - 25
    currentPage: number, 
    type: TAnimeFilterState['type'] | TMangaFilterState['type'], 
    rating?: typeof AGE_RATING[keyof typeof AGE_RATING], 
    orderBy:  
        typeof ANIME_ORDER_BY[keyof typeof  ANIME_ORDER_BY] | 
        typeof MANGA_ORDER_BY[keyof typeof MANGA_ORDER_BY], //TODO улучшить и сократить типизацию
    status: 
        typeof ANIME_STATUS[keyof typeof  ANIME_STATUS] | 
        typeof MANGA_STATUS[keyof typeof MANGA_STATUS],
    sfw: 'sfw' | ''
}

type TGetCharactersData = {
    route: TCategories, 
    pageLimit: number,  // 1 - 25
    currentPage: number
}

type TGetSearchedData = {
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
