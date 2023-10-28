import { 
    useGetAnimeByIdQuery, 
    useGetAnimeQuery, 
    useGetSearchedAnimeQuery 
} from "../animeApi";
import { 
    useGetMangaByIdQuery, 
    useGetMangaQuery, 
    useGetSearchedMangaQuery 
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
        getSearched: useGetSearchedAnimeQuery
    },
    manga: {
        getList: useGetMangaQuery,
        getById: useGetMangaByIdQuery,
        getSearched: useGetSearchedMangaQuery
    },
    characters: {
        getList: useGetCharactersQuery,
        getById: useGetCharacterByIdQuery,
        getSearched: useGetSearchedCharactersQuery
    }
}