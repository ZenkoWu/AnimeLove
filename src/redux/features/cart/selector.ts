import { TState, TMovieId } from "../../store";

export const selectCartModule = (state: TState) => state.cart

export const selectTicketCount = (state: TState, id: TMovieId) => selectCartModule(state)?.tickets[id];
export const selectTicketsAmount = (state: TState) => selectCartModule(state)?.ticketsCount;