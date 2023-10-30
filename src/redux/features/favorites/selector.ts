import { TState } from "@/redux/store";

export const selectFavoritesModule = (state: TState) => state.favorites

export const selectFavorites = (state: TState) => selectFavoritesModule(state)?.favorites;
export const selectFavoritesAmount = (state: TState) => selectFavoritesModule(state)?.count;