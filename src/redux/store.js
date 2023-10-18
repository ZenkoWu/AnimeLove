import { configureStore } from '@reduxjs/toolkit'
import { favoritesReducer } from './features/favorites'
import {logger} from './middlewares/logger'
import { animeApi } from './services/animeApi'
import { animeListReducer } from './features/animeList'
import { mangaApi } from './services/mangaApi'
import { mangaListReducer } from './features/mangaList'

export const store = configureStore({
    reducer: {
        animeList: animeListReducer,
        mangaList: mangaListReducer,
        favorites: favoritesReducer,
        [animeApi.reducerPath]: animeApi.reducer, 
        [mangaApi.reducerPath]: mangaApi.reducer, 
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        animeApi.middleware, 
        mangaApi.middleware,
        // logger
    ])
})
