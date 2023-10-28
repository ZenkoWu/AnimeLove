import { ANIME_TYPE, MANGA_TYPES } from './../constants';

export const ANIME_RATING = [
    'G - All Ages',
    'PG - Children',
    'PG-13 - Teens 13 or older',
    'R - 17+ (violence & profanity)',
    'R+ - Mild Nudity'
] as const;

const ANIME_STATUS =  ['Finished Airing', 'Currently Airing', 'Not yet aired'] as const;
const MANGA_STATUS =  ['Finished', 'Publishing', 'On Hiatus', 'Discontinued'] as const;

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
    duration?: string,  
    episodes?: number,
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
    rating?:  typeof ANIME_RATING[number],
    status?: typeof ANIME_STATUS[number],
    trailer?: {
        embed_url: string,
        url: string
    }
}

export interface TMangaInfo extends TElementInfo {
    type?: keyof typeof MANGA_TYPES,
    chapters?: number,
    status?: typeof MANGA_STATUS[number],
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