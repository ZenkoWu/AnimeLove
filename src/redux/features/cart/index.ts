import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    tickets: {},
    ticketsCount: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState, 
    reducers: {
        increment: (state: any, {payload}: {payload: any}) => {
            const count = state.tickets[payload] || 0;
            state.tickets[payload] = count + 1;

            ++state.ticketsCount
            return;
        },
        decrement: (state: any, {payload}: {payload: any}) => {
            const count = state.tickets[payload];
            if(!count) {
                return;
            }
            
            if(count === 1) {
                delete state.tickets[payload]
                --state.ticketsCount
                return;
            }
            state.tickets[payload] = count - 1
            --state.ticketsCount
            return;

        },
        removeTicket: (state: any, {payload}: {payload: any}) => {
            const count = state.tickets[payload];
            delete state.tickets[payload]
            
            if(!state.tickets[payload]) {
                state.ticketsCount-=count
            }
            return;
        }
    }
})

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions; 

// в слайсе есть и экшены и редьюсеры - удобная форма создания всего и сразу 