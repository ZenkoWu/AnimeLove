import { TState } from '@/redux/store';
import {createSlice} from '@reduxjs/toolkit';

const initialState: TState['favorites'] = {
    favorites: { //??
        anime: {},
        manga: {},
    }, 
    favoritesCount: 0
}

const favoritesSlice = createSlice({ //todo 
    name: 'favorites',
    initialState, 
    reducers: {
        like: (state, {payload}) => {
            // state.favorites.push(payload)
            state.favorites[payload.category][payload.id] = true
            ++state.favoritesCount;
            return;
        },
        unlike: (state, {payload}) => {
            // state.favorites = state.favorites.filter(payload)
            delete state.favorites[payload.category][payload.id]
            --state.favoritesCount
            return;
        },
    }
})

export const favoritesReducer = favoritesSlice.reducer;
export const favoritesActions = favoritesSlice.actions; 

// в слайсе есть и экшены и редьюсеры - удобная форма создания всего и сразу 