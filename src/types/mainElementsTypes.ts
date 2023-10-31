import { 
    AGE_RATING, 
    ANIME_STATUS, 
    ANIME_TYPE, 
    MANGA_STATUS, 
    MANGA_TYPES 
} from './../constants';

interface TElementInfo {
    mal_id: number,
    title: string,
    images: {
        jpg: {
            image_url: string,
            small_image_url: string,
            large_image_url: string
        }
    },
    background?: string,
    favorites?: number,
    genres?: {mal_id: number, type: string, name: string}[],
    popularity?: number,
    rank?: number,
    year?: number,
    source?: string,
    score?: number,
    title_japanese?: string,
}

export interface TAnimeInfo extends TElementInfo {
    type?: keyof typeof ANIME_TYPE;
    rating?:  keyof typeof AGE_RATING,
    status?: keyof typeof ANIME_STATUS,
    trailer?: {
        embed_url: string,
        url: string
    },
    duration?: string,  
    episodes?: number,
}

export interface TMangaInfo extends TElementInfo {
    type?: keyof typeof MANGA_TYPES,
    chapters?: number,
    status?: keyof typeof MANGA_STATUS,
}

export type TCharactersInfo = {
    mal_id: number,
    name: string,
    images: {
        jpg: {
            image_url: string,
            small_image_url: string,
            large_image_url: string
        }
    },
    about?: string,
    favorites?: number,
    name_kanji?: string,
    nicknames?: string[]
}

export type TCategories = 'anime' | 'manga' | 'characters'


export type TSmallCardInfo = {  
    mal_id: number,
    title: string,
    images: {
        jpg: {
            image_url: string,
            small_image_url: string,
            large_image_url: string
        }
    }
}


export type TElementCard = {
    category: TCategories,
    data: TAnimeInfo | TMangaInfo | TCharactersInfo
}

