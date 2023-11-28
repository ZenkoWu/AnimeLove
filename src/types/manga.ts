import { mangaFilter } from "@/constants";
import { TElementInfo } from "./types";

export type TMangaInfo = TElementInfo & {
    type?: typeof mangaFilter.types[number]['label'],
    chapters?: number,
    status?: typeof mangaFilter.statuses[number]['label']
}

export enum TMangaTypeId {
    manga ='manga',
    novel = 'novel',
    lightnovel = 'lightnovel',
    oneshot = 'oneshot',
    doujin = 'doujin',
    manhwa = 'manhwa',
    manhua = 'manhua'
}
export type TMangaTypes = {label: string, id:  keyof typeof TMangaTypeId}

export enum TMangaOrderById {
    popularity = 'popularity',
    title = 'title', 
    start_date =  'start_date',
    end_date = 'end_date',
    favorites = 'favorites', 
    chapters = 'chapters'
}
export type TMangaOrderBy = {label: string, id:  keyof typeof TMangaOrderById}

export enum TMangaStatusId {
    complete = 'complete',
    publishing = 'publishing',
    hiatus = 'hiatus', 
    discontinued = 'discontinued', 
    upcoming = 'upcoming'
}
export type TMangaStatus = {label: string, id:  keyof typeof TMangaStatusId}

export type TMangaFilterState = {
    type:  keyof typeof TMangaTypeId,
    orderBy:  keyof typeof TMangaOrderById,
    status:  keyof typeof TMangaStatusId
}

export type TMangaFilter = {
    types: TMangaTypes[],
    statuses: TMangaStatus[],
    orderBy: TMangaOrderBy[]
}