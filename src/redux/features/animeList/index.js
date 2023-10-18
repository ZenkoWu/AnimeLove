

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    pageSize: 12,
    totalAnimeCount: 0,
    currentPage: 1,
}

const animeListSlice = createSlice({
    name: 'animeList',
    initialState, 
    reducers: {
        changeCurrentPage: (state, {payload}) => {
            state.currentPage = payload
            return;
        },
        changeTotalAnimeCount: (state, {payload}) => {
            state.totalAnimeCount = payload
            return;
        }
    }
})

export const animeListReducer = animeListSlice.reducer;
export const animeListActions = animeListSlice.actions; 

// в слайсе есть и экшены и редьюсеры - удобная форма создания всего и сразу 