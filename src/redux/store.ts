import { configureStore } from '@reduxjs/toolkit'
import { favoritesReducer } from './features/favorites'
import {logger} from './middlewares/logger'
import { animeApi } from './services/animeApi'
import { mangaApi } from './services/mangaApi'
import { TAnimeInfo, TMangaInfo } from '@/types/mainElementsTypes'
import { charactersApi } from './services/charactersApi'
import { commonReducer } from './features/common'
import { TPaginationData, paginationReducer } from './features/pagination'

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
}

export const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
        common: commonReducer,
        pagination: paginationReducer,
        [animeApi.reducerPath]: animeApi.reducer, 
        [mangaApi.reducerPath]: mangaApi.reducer, 
        [charactersApi.reducerPath]: charactersApi.reducer
    },
    middleware: (getMiddleware) => getMiddleware().concat([
        animeApi.middleware, 
        mangaApi.middleware,
        charactersApi.middleware
        // logger
    ])
})
