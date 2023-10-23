import { 
    useGetAnimeByIdQuery, 
    useGetAnimeQuery, 
    useGetFavoritesAnimeQuery, 
    useGetSearchedAnimeQuery 
} from "../animeApi";
import { 
    useGetMangaByIdQuery, 
    useGetMangaQuery, 
    useGetSearchedMangaQuery 
} from "../mangaApi";


export const api = {
    anime: { 
        getList: useGetAnimeQuery,
        getById: useGetAnimeByIdQuery,
        getFavorites: useGetFavoritesAnimeQuery,
        getSearched: useGetSearchedAnimeQuery
    },
    manga: {
        getList: useGetMangaQuery,
        getById: useGetMangaByIdQuery,
        getSearched: useGetSearchedMangaQuery
    }
}