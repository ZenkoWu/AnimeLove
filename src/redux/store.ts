import { configureStore } from '@reduxjs/toolkit'
import { favoritesReducer } from './features/favorites'
import { commonReducer } from './features/common'
import { TPaginationData, paginationReducer } from './features/pagination'
import { apiMethods } from './services/apiMethods'
import { TAnimeInfo } from '@/types/anime'
import { TMangaInfo } from '@/types/manga'

export interface TState {
    common: {
        isSafeContent: boolean
    },

    pagination: {
        anime: TPaginationData,
        manga: TPaginationData,
        characters: TPaginationData
    },

    favorites:  { 
        favorites: {
            anime?: {
                items: {
                    [key in string]: TAnimeInfo
                },
                count: number
                
            },
            manga?: {
                items: {
                    [key in string]: TMangaInfo
                },
                count: number
            },
            characters?: {
                items: {
                    [key in string]: TMangaInfo
                },
                count: number
            }
        }
        count: number
    }
}

export const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
        common: commonReducer,
        pagination: paginationReducer,
        [apiMethods.reducerPath]: apiMethods.reducer
    },
    middleware: (getMiddleware) => getMiddleware().concat([
        apiMethods.middleware
    ])
})
