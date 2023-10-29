import { 
    useGetAnimeByIdQuery, 
    useGetAnimeQuery, 
    useGetSearchedAnimeQuery,
    useGetRecommendationsQuery
} from "../animeApi";
import { 
    useGetMangaByIdQuery, 
    useGetMangaQuery, 
    useGetSearchedMangaQuery,
    useGetMangaRecommendsQuery
} from "../mangaApi";
import { 
    useGetCharactersQuery, 
    useGetCharacterByIdQuery,
    useGetSearchedCharactersQuery
} from "../charactersApi";


export const api = {
    anime: { 
        getList: useGetAnimeQuery,
        getById: useGetAnimeByIdQuery,
        getSearched: useGetSearchedAnimeQuery,
        getRecommendations: useGetRecommendationsQuery
    },
    manga: {
        getList: useGetMangaQuery,
        getById: useGetMangaByIdQuery,
        getSearched: useGetSearchedMangaQuery,
        getRecommendations: useGetMangaRecommendsQuery
    },
    characters: {
        getList: useGetCharactersQuery,
        getById: useGetCharacterByIdQuery,
        getSearched: useGetSearchedCharactersQuery
    }
}