import { TState } from '@/redux/store';
import { TCategories } from '../../../types/types';
import {createSlice} from '@reduxjs/toolkit';

export type TPaginationData = {
    pageSize: number,
    totalAmount: number,
    currentPage: number,
}

const paginationData: TPaginationData = {
    pageSize: 12,
    totalAmount: 0,
    currentPage: 1,
}

const initialState: TState['pagination'] = {
    anime: {
        ...paginationData
    },
    manga: {
        ...paginationData
    },
    characters: {
        ...paginationData
    }
}

const paginationSlice = createSlice({
    name: 'pagination',
    initialState, 
    reducers: {
        changeCurrentPage: (
            state: TState['pagination'], 
            {payload} :{payload: {category: TCategories, page: number}}
        ) => {
            state[payload.category].currentPage = payload.page;
        },
        changeAmount: (
            state: TState['pagination'], 
            {payload} :{payload: {category: TCategories, count: number}}
        ) => {
            state[payload.category].totalAmount = payload.count;
        }
    }
})

export const paginationReducer = paginationSlice.reducer;
export const paginationActions = paginationSlice.actions; 

// в слайсе есть и экшены и редьюсеры - удобная форма создания всего и сразу 