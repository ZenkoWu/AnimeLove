import { 
    ageRatings,
    animeStatuses,
    animeTypes,
    mangaStatuses,
    mangaTypes,
} from '../constants';

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
    type?: typeof animeTypes[number]['label']; 
    rating?: typeof ageRatings[number]['label'],
    status?: typeof animeStatuses[number]['label'],
    trailer?: {
        embed_url: string,
        url: string
    },
    duration?: string,  
    episodes?: number,
}
export interface TMangaInfo extends TElementInfo {
    type?: typeof mangaTypes[number]['label'],
    chapters?: number,
    status?: typeof mangaStatuses[number]['label']
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
type TOrderBy = 'popularity' | 'title' | 'start_date' | 'end_date' | 'favorites' 

export type TAnimeTypeId = 'tv' | 'ova' | 'movie' | 'special' | 'music'
export type TAnimeTypes = {label: string, id: TAnimeTypeId}

export type TAnimeRatingsId = 'g' | 'pg' | 'pg13' | 'r17' | 'r'
export type TAnimeRatings = {label: string, id: TAnimeRatingsId}

export type TAnimeOrderById = TOrderBy | 'episodes'
export type TAnimeOrderBy = {label: string, id: TAnimeOrderById}

export type TAnimeStatusId = 'complete' | 'airing' | 'upcoming' 
export type TAnimeStatus = {label: string, id: TAnimeStatusId}


export type TAnimeFilterState = {
    type:  TAnimeTypeId,
    rating: TAnimeRatingsId,
    orderBy: TAnimeOrderById,
    status: TAnimeStatusId
}

export type TMangaTypeId = 'manga' | 'novel' | 'lightnovel' | 'oneshot' | 'doujin' | 'manhwa' | 'manhua'
export type TMangaType = {label: string, id: TMangaTypeId}

export type TMangaOrderById = TOrderBy | 'chapters'
export type TMangaOrderBy = {label: string, id: TMangaOrderById}

export type TMangaStatusId = 'complete' | 'publishing' | 'hiatus' | 'discontinued' | 'upcoming'
export type TMangaStatus = {label: string, id: TMangaStatusId}

export type TMangaFilterState = {
    type: TMangaTypeId,
    orderBy: TMangaOrderById,
    status: TMangaStatusId
}
