import { TState } from '@/redux/store';
import {createSlice} from '@reduxjs/toolkit';
// r -  коммент к папке фич - поработай над читаемостью и названиями файлов и всего, ничего непонятно
const initialState: TState['common'] = {
    isSafeContent: true
}

const commonSlice = createSlice({
    name: 'common',
    initialState, 
    reducers: {
        setSafeContent: (
            state: TState['common'], 
            {payload} :{payload: boolean}
        ) => {
            state.isSafeContent = payload;
        },
        
    }
})

export const commonReducer = commonSlice.reducer;
export const commonActions = commonSlice.actions; 
