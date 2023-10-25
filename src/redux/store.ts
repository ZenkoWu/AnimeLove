import { configureStore } from '@reduxjs/toolkit'
import { favoritesReducer } from './features/favorites'
import {logger} from './middlewares/logger'
import { animeApi } from './services/animeApi'
import { animeReducer } from './features/animeList'
import { mangaApi } from './services/mangaApi'
import { mangaReducer } from './features/mangaList'
import { TAnimeInfo, TMangaInfo } from '@/types/mainElementsTypes'

export interface TState {
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
            anime: {
              [key in string]: TAnimeInfo
            },
            manga: {
                [key in string]: TMangaInfo
            },
        }
        favoritesCount: number
    }, 
}

export const store = configureStore({
    reducer: {
        animeList: animeReducer,
        mangaList: mangaReducer,
        favorites: favoritesReducer,
        [animeApi.reducerPath]: animeApi.reducer, 
        [mangaApi.reducerPath]: mangaApi.reducer, 
    },
    middleware: (getMiddleware) => getMiddleware().concat([
        animeApi.middleware, 
        mangaApi.middleware,
        // logger
    ])
})
