import { animeFilter } from "@/constants"
import { TElementInfo, TOrderBy } from "./types"

export interface TAnimeInfo extends TElementInfo {
    type?: typeof animeFilter.types[number]['label'],
    rating?: typeof animeFilter.ageRatings[number]['label'],
    status?: typeof animeFilter.statuses[number]['label'],
    trailer?: {
        embed_url: string,
        url: string
    },
    duration?: string,  
    episodes?: number,
}

export type TAnimeTypeId = 'tv' | 'ova' | 'movie' | 'special' | 'music'
export type TAnimeTypes = {label: string, id: TAnimeTypeId}

export type TAnimeRatingsId = 'g' | 'pg' | 'pg13' | 'r17' | 'r'
export type TAnimeRatings = {label: string, id: TAnimeRatingsId}

export type TAnimeOrderById = TOrderBy | 'episodes'
export type TAnimeOrderBy = {label: string, id: TAnimeOrderById}

export type TAnimeStatusId = 'complete' | 'airing' | 'upcoming' 
export type TAnimeStatus = {label: string, id: TAnimeStatusId}

export type TAnimeFilter = {
    types: TAnimeTypes[],
    statuses: TAnimeStatus[],
    ageRatings: TAnimeRatings[],
    orderBy: TAnimeOrderBy[]
}

export type TAnimeFilterState = {
    type:  TAnimeTypeId,
    rating: TAnimeRatingsId,
    orderBy: TAnimeOrderById,
    status: TAnimeStatusId
}
