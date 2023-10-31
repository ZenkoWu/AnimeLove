import { configureStore } from '@reduxjs/toolkit'
import { favoritesReducer } from './features/favorites'
import {logger} from './middlewares/logger'
import { TAnimeInfo, TMangaInfo } from '@/types/mainElementsTypes'
import { commonReducer } from './features/common'
import { TPaginationData, paginationReducer } from './features/pagination'
import { apiMethods } from './services/apiMethods'

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
    }, 
    apiMethods: any // todo 
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
        // logger
    ])
})
