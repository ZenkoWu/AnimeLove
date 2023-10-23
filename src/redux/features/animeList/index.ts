import { TState } from '@/redux/store';
import {createSlice} from '@reduxjs/toolkit';

const initialState: TState['animeList'] = {
    pageSize: 12,
    totalAnimeCount: 0,
    currentPage: 1,
}

const animeSlice = createSlice({
    name: 'anime',
    initialState, 
    reducers: {
        changeCurrentPage: (
            state: TState['animeList'], 
            {payload} :{payload: number}
        ) => {
            state.currentPage = payload;
        },
        changeTotalAnimeCount: (
            state: TState['animeList'], 
            {payload} :{payload: number}
        ) => {
            state.totalAnimeCount = payload;
        }
    }
})

export const animeReducer = animeSlice.reducer;
export const animeActions = animeSlice.actions; 

// в слайсе есть и экшены и редьюсеры - удобная форма создания всего и сразу 