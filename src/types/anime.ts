import { animeFilter } from "@/constants"
import { TElementInfo } from "./types"

export type TAnimeInfo = TElementInfo  & ( {
    type?: typeof animeFilter.types[number]['label'],
    rating?: typeof animeFilter.ageRatings[number]['label'],
    status?: typeof animeFilter.statuses[number]['label'],
    trailer?: {
        embed_url: string,
        url: string
    },
    duration?: string,  
    episodes?: number,
})

export enum TAnimeTypeId {
    tv = 'tv',
    ova = 'ova',
    movie = 'movie',
    special = 'special',
    music = 'music'
} 
export type TAnimeTypes = {label: string, id: keyof typeof TAnimeTypeId}

export enum TAnimeRatingsId {
    g = 'g',
    pg = 'pg',
    pg13 = 'pg13',
    r17 = 'r17',
    r = 'r'
} 

export type TAnimeRatings = {label: string, id: keyof typeof TAnimeRatingsId}

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
    types: TAnimeTypes[],
    statuses: TAnimeStatus[],
    ageRatings: TAnimeRatings[],
    orderBy: TAnimeOrderBy[]
}

export type TAnimeFilterState = {
    type:  keyof typeof TAnimeTypeId,
    rating: keyof typeof TAnimeRatingsId,
    orderBy: keyof typeof TAnimeOrderById,
    status: keyof typeof TAnimeStatusId
}
