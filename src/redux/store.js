import { configureStore } from '@reduxjs/toolkit'
// import { cartReducer } from './features/cart'
import {logger} from './middlewares/logger'
import { animeApi } from './services/animeApi'
import { animeListReducer } from './features/animeList'
import { mangaApi } from './services/mangaApi'

export const store = configureStore({
    reducer: {
        animeList: animeListReducer,
        [animeApi.reducerPath]: animeApi.reducer, 
        [mangaApi.reducerPath]: mangaApi.reducer, 
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        animeApi.middleware, 
        mangaApi.middleware,
        // logger
    ])
})
