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
        changeCurrentPage: (state, {payload}) => {
            state.currentPage = payload
            return;
        },
        changeTotalMangaCount: (state, {payload}) => {
            state.totalMangaCount = payload
            return;
        }
    }
})

export const mangaListReducer = mangaListSlice.reducer;
export const mangaListActions = mangaListSlice.actions; 
 