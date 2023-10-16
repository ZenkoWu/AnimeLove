import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    favorites: {}, //??
    favoritesCount: 0
}

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState, 
    reducers: {
        like: (state, {payload}) => {
            // state.favorites.push(payload)
            state.favorites[payload] = true
            ++state.favoritesCount;
            return;
        },
        unlike: (state, {payload}) => {
            // state.favorites = state.favorites.filter(payload)
            delete state.favorites[payload]
            --state.ticketsCount
            return;
        },
    }
})

export const favoritesReducer = favoritesSlice.reducer;
export const favoritesActions = favoritesSlice.actions; 

// в слайсе есть и экшены и редьюсеры - удобная форма создания всего и сразу 