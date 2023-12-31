import { TAnimeInfo } from './anime';
import { TMangaInfo } from './manga';

export type TElementInfo = {
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
    data: TAnimeInfo | TMangaInfo | TCharactersInfo,
    route?: TCategories
}