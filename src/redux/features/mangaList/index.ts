import { TState } from '@/redux/store';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    pageSize: 12,
    totalMangaCount: 0,
    currentPage: 1,
}

const mangaListSlice = createSlice({
    name: 'mangaList',
    initialState, 
    reducers: {
        changeCurrentPage: (
            state: TState['mangaList'], 
            {payload} : {payload: number}
        ) => {
            state.currentPage = payload;
        },
        changeTotalMangaCount: (
            state: TState['mangaList'], 
            {payload}: {payload: number}
        ) => {
            state.totalMangaCount = payload;
        }
    }
})

export const mangaListReducer = mangaListSlice.reducer;
export const mangaListActions = mangaListSlice.actions; 
 