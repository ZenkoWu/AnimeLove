import { mangaFilter } from "@/constants";
import { TElementInfo, TOrderBy } from "./types";

export interface TMangaInfo extends TElementInfo {
    type?: typeof mangaFilter.types[number]['label'],
    chapters?: number,
    status?: typeof mangaFilter.statuses[number]['label']
}

export type TMangaTypeId = 'manga' | 'novel' | 'lightnovel' | 'oneshot' | 'doujin' | 'manhwa' | 'manhua'
export type TMangaTypes = {label: string, id: TMangaTypeId}

export type TMangaOrderById = TOrderBy | 'chapters'
export type TMangaOrderBy = {label: string, id: TMangaOrderById}

export type TMangaStatusId = 'complete' | 'publishing' | 'hiatus' | 'discontinued' | 'upcoming'
export type TMangaStatus = {label: string, id: TMangaStatusId}

export type TMangaFilterState = {
    type: TMangaTypeId,
    orderBy: TMangaOrderById,
    status: TMangaStatusId
}

export type TMangaFilter = {
    types: TMangaTypes[],
    statuses: TMangaStatus[],
    orderBy: TMangaOrderBy[]
}