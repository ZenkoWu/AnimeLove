import { TState } from '@/redux/store';
import {createSlice} from '@reduxjs/toolkit';

const initialState: TState['favorites'] = {
    favorites:  JSON.parse(localStorage.getItem('favorites') || '{}'),
    count:  JSON.parse(localStorage.getItem('favoritesCount') || '0'),
}

const favoritesSlice = createSlice({ 
    name: 'favorites',
    initialState, 
    reducers: {
        like: (state, {payload}) => {
            const newFavorites = JSON.parse(localStorage.getItem('favorites') || '{}')

            if(!newFavorites[payload.category]) {
                newFavorites[payload.category] = {
                    items: {},
                    count: 0
                }
            }

            newFavorites[payload.category].items[payload.info.mal_id]= payload.info
            newFavorites[payload.category].count++
            localStorage.setItem('favorites', JSON.stringify(newFavorites))
            
            let count = JSON.parse(localStorage.getItem('favoritesCount') || '0')
            count++
            localStorage.setItem('favoritesCount', `${count}`)

            state.favorites = JSON.parse(localStorage.getItem('favorites')!)
            state.count = JSON.parse(localStorage.getItem('favoritesCount')!) 
        },

        unlike: (state, {payload}) => {
            const newFavorites = JSON.parse(localStorage.getItem('favorites') || '{}')

            delete newFavorites[payload.category].items[payload.info.mal_id]
            newFavorites[payload.category].count--
            localStorage.setItem('favorites', JSON.stringify(newFavorites))
            
            let count = JSON.parse(localStorage.getItem('favoritesCount')!)
            count--
            localStorage.setItem('favoritesCount', `${count}`)

            state.favorites = JSON.parse(localStorage.getItem('favorites')!)
            state.count = JSON.parse(localStorage.getItem('favoritesCount')!) 
        },

        deleteFavorites: (state, {payload}) => {
            const favoritesStr = localStorage.getItem('favorites')
            if(favoritesStr){
                const favorites = JSON.parse(favoritesStr || '{}')
                const count = favorites[payload].count

                delete favorites[payload]
                localStorage.setItem('favorites', JSON.stringify(favorites))

                const favoritesCount = localStorage.getItem('favoritesCount') || 1;
                localStorage.setItem('favoritesCount', `${+favoritesCount - count}`)
                
                state.favorites = JSON.parse(localStorage.getItem('favorites') || '{}')
                state.count = JSON.parse(localStorage.getItem('favoritesCount') || '0')
            }
        }
    }
})

export const favoritesReducer = favoritesSlice.reducer;
export const favoritesActions = favoritesSlice.actions; 
