import { TState } from '@/redux/store';
import {createSlice} from '@reduxjs/toolkit';

const initialState: TState['favorites'] = {
    favorites: JSON.parse(localStorage.getItem('favorites')!) || {}, 
    count:  JSON.parse(localStorage.getItem('favoritesCount')!) || 0,
}

const favoritesSlice = createSlice({ //todo  
    name: 'favorites',
    initialState, 
    reducers: {
        like: (state, {payload}) => {
            const favorites = localStorage.getItem('favorites')
            const newFavorites = favorites ?  JSON.parse(favorites) : {}

            if(!newFavorites[payload.category]) {
                newFavorites[payload.category] = {
                    items: {},
                    count: 0
                }
            }

            newFavorites[payload.category].items[payload.info.mal_id]= payload.info
            newFavorites[payload.category].count++
            localStorage.setItem('favorites', JSON.stringify(newFavorites))
            
            state.favorites = JSON.parse(localStorage.getItem('favorites')!)
            let count = JSON.parse(localStorage.getItem('favoritesCount')!) || 0
            count++
            localStorage.setItem('favoritesCount', `${count}`)
            state.count = JSON.parse(localStorage.getItem('favoritesCount')!) 
        },
        unlike: (state, {payload}) => {
            let favorites = localStorage.getItem('favorites')!
            let newFavorites = JSON.parse(favorites)
            delete newFavorites[payload.category].items[payload.info.mal_id]
            newFavorites[payload.category].count--
            localStorage.setItem('favorites', JSON.stringify(newFavorites))

            state.favorites = JSON.parse(localStorage.getItem('favorites')!)
            let count = JSON.parse(localStorage.getItem('favoritesCount')!)
            count--
            localStorage.setItem('favoritesCount', `${count}`)
            state.count = JSON.parse(localStorage.getItem('favoritesCount')!) 
        },
        deleteFavorites: (state, {payload}) => {
            let favorites = JSON.parse(localStorage.getItem('favorites')!)
            let count = favorites[payload].count
            delete favorites[payload]
            localStorage.setItem('favorites', JSON.stringify(favorites))
            const favoritesCount = localStorage.getItem('favoritesCount')!
            localStorage.setItem('favoritesCount', (+favoritesCount - count).toString())
            state.favorites = JSON.parse(localStorage.getItem('favorites')!)
            state.count = JSON.parse(localStorage.getItem('favoritesCount')!)

        }
    }
})

export const favoritesReducer = favoritesSlice.reducer;
export const favoritesActions = favoritesSlice.actions; 
