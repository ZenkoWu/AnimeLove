
export const selectFavoritesModule = (state) => state.favorites

export const selectFavorites = (state) => selectFavoritesModule(state)?.favorites;
export const selectFavoritesAmount = (state) => selectFavoritesModule(state)?.favoritesCount;