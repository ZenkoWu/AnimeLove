import { configureStore } from '@reduxjs/toolkit'
import { favoritesReducer } from './features/favorites'
import {logger} from './middlewares/logger'
import { animeApi } from './services/animeApi'
import { animeReducer } from './features/animeList'
import { mangaApi } from './services/mangaApi'
import { mangaReducer } from './features/mangaList'
import { TAnimeInfo, TMangaInfo } from '@/types/mainElementsTypes'
import { charactersApi } from './services/charactersApi'
import { commonReducer } from './features/common'

export interface TState {
    common: {
        isSafeContent: boolean
    },
    animeList: {
        pageSize: number,
        totalAnimeCount: number,
        currentPage: number,
    },
    mangaList: {
        pageSize: number,
        totalMangaCount: number,
        currentPage: number,
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
        animeList: animeReducer,
        mangaList: mangaReducer,
        favorites: favoritesReducer,
        common: commonReducer,
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
