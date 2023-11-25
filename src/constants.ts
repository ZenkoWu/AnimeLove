import { TAnimeFilter } from "./types/anime";
import { TMangaFilter } from "./types/manga";

const COMMON_ORDER_BY = [
    {label: 'Popularity', id: 'popularity'},
    {label: 'Title', id: 'title'},
    {label: 'Start date', id: 'start_date'},
    {label: 'End date', id: 'end_date'},
    {label: 'Favorites', id: 'favorites'},
] as const;

export const animeFilter : TAnimeFilter = {
    types: [
        {label: 'Tv', id: 'tv'},
        {label: 'Ova', id: 'ova'},
        {label: 'Movie', id: 'movie'},
        {label: 'Special', id: 'special'},
        {label: 'Music', id: 'music'},
    ],
    statuses: [
        {label: 'Finished Airing', id: 'complete'},
        {label: 'Currently Airing', id:'airing'},
       { label: 'Not yet aired', id:'upcoming'}
    ],
    ageRatings: [
        {id: 'g', label:  'G - All Ages'},
        {id: 'pg', label:  'PG - Children'},
        {id: 'pg13', label:  'PG-13 - Teens 13 or older'},
        {id: 'r17', label:  'R - 17+ (violence & profanity)'},
        {id: 'r', label:   'R+ - Mild Nudity'},
    ],

    orderBy: [
        ...COMMON_ORDER_BY,
        {label: 'Episodes', id:'episodes'}
    ]
}

export const mangaFilter: TMangaFilter = {
    types: [
        {label: 'Manga', id: 'manga'},
        {label: 'Novel', id: 'novel'},
        {label: 'Lightnovel', id: 'lightnovel'},
        {label: 'Oneshot', id: 'oneshot'},
        {label: 'Doujin', id: 'doujin'},
        {label: 'Manhwa', id: 'manhwa'},
        {label: 'Manhua', id: 'manhua'}
    ],
    statuses: [
        {label: 'Publishing', id: 'publishing'},
        {label: 'Finished', id: 'complete'},
        {label: 'On Hiatus', id: 'hiatus'},
        {label: 'Discontinued', id: 'discontinued'},
        {label: 'Upcoming', id: 'upcoming'}
    ],
    orderBy: [
        ...COMMON_ORDER_BY,
        {label: 'Chapters', id:'chapters'}
    ]
}