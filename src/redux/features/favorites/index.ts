import { TState } from '@/redux/store';
import {createSlice} from '@reduxjs/toolkit';

const initialState: TState['favorites'] = {
    favorites: JSON.parse(localStorage.getItem('favorites')!) || {}, 
    favoritesCount:  JSON.parse(localStorage.getItem('favoritesCount')!) || 0,
}

const favoritesSlice = createSlice({ //todo 
    name: 'favorites',
    initialState, 
    reducers: {
        like: (state, {payload}) => {
            let newFavorites;
            let favorites = localStorage.getItem('favorites')
            if(!favorites) {
                newFavorites = {
                [payload.category]: {
                    [payload.info.mal_id]: payload.info
                }
               } 
                
            }else {
                
                newFavorites = JSON.parse(favorites)
                newFavorites[payload.category][payload.info.mal_id]= payload.info
                
            }
            localStorage.setItem('favorites', JSON.stringify(newFavorites))
            
            state.favorites = JSON.parse(localStorage.getItem('favorites')!)
            let count = JSON.parse(localStorage.getItem('favoritesCount')!) || 0
            count++
            localStorage.setItem('favoritesCount', `${count}`)
            state.favoritesCount = JSON.parse(localStorage.getItem('favoritesCount')!) 
        },
        unlike: (state, {payload}) => {
            let favorites = localStorage.getItem('favorites')!
            let newFavorites = JSON.parse(favorites)
            delete  newFavorites[payload.category][payload.info.mal_id]
            localStorage.setItem('favorites', JSON.stringify(newFavorites))

            state.favorites = JSON.parse(localStorage.getItem('favorites')!)
            let count = JSON.parse(localStorage.getItem('favoritesCount')!)
            count--
            localStorage.setItem('favoritesCount', `${count}`)
            state.favoritesCount = JSON.parse(localStorage.getItem('favoritesCount')!) 
        },
    }
})

export const favoritesReducer = favoritesSlice.reducer;
export const favoritesActions = favoritesSlice.actions; 

// в слайсе есть и экшены и редьюсеры - удобная форма создания всего и сразу 