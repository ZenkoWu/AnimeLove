import { TElementInfo } from "./types"

export type TAnimeInfo = TElementInfo & {
    type?: TAnimeType['label'],
    rating?: TAnimeRating['label'],
    status?: TAnimeStatus['label'],
    trailer?: {
        embed_url: string,
        url: string
    },
    duration?: string,  
    episodes?: number,
}

export enum TAnimeTypeId {
    tv = 'tv',
    ova = 'ova',
    movie = 'movie',
    special = 'special',
    music = 'music'
} 
export type TAnimeType = {label: string, id: keyof typeof TAnimeTypeId}

export enum TAnimeRatingsId {
    g = 'g',
    pg = 'pg',
    pg13 = 'pg13',
    r17 = 'r17',
    r = 'r'
} 

export type TAnimeRating = {label: string, id: keyof typeof TAnimeRatingsId}

export enum TAnimeOrderById {
    popularity = 'popularity',
    title = 'title', 
    start_date =  'start_date',
    end_date = 'end_date',
    favorites = 'favorites', 
    episodes = 'episodes'
}

export type TAnimeOrderBy = {label: string, id: keyof typeof TAnimeOrderById}

export enum TAnimeStatusId {
    complete = 'complete',
    airing = 'airing',
    upcoming = 'upcoming' 
}

export type TAnimeStatus = {label: string, id: keyof typeof TAnimeStatusId}

export type TAnimeFilter = {
    types: TAnimeType[],
    statuses: TAnimeStatus[],
    ageRatings: TAnimeRating[],
    orderBy: TAnimeOrderBy[]
}

export type TAnimeFilterState = {
    type:  keyof typeof TAnimeTypeId,
    rating: keyof typeof TAnimeRatingsId,
    orderBy: keyof typeof TAnimeOrderById,
    status: keyof typeof TAnimeStatusId
}
