import { TElementInfo } from "./types";

export type TMangaInfo = TElementInfo & {
    type?: TMangaType['label'],
    chapters?: number,
    status?: TMangaStatus['label']
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
export type TMangaType = {label: string, id:  keyof typeof TMangaTypeId}

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
    types: TMangaType[],
    statuses: TMangaStatus[],
    orderBy: TMangaOrderBy[]
}