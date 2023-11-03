export const AGE_RATING = [
    {id: 'g', label:  'G - All Ages'},
    {id: 'pg', label:  'PG - Children'},
    {id: 'pg13', label:  'PG-13 - Teens 13 or older'},
    {id: 'r17', label:  'R - 17+ (violence & profanity)'},
    {id: 'r', label:   'R+ - Mild Nudity'},
] as const;

export const ANIME_STATUS = [
    {label: 'Finished Airing', id: 'complete'},
    {label: 'Currently Airing', id:'airing'},
   { label: 'Not yet aired', id:'upcoming'}
 ] as const;

const COMMON_ORDER_BY = [
    {label: 'Popularity', id: 'popularity'},
    {label: 'Title', id: 'title'},
    {label: 'Start date', id: 'start_date'},
    {label: 'End date', id: 'end_date'},
    {label: 'Favorites', id: 'favorites'},
] as const;

export const ANIME_ORDER_BY = [
    ...COMMON_ORDER_BY,
    {label: 'Episodes', id:'episodes'}
] as const;

export const ANIME_TYPE = [
    {label: 'Tv', id: 'tv'},
    {label: 'Ova', id: 'ova'},
    {label: 'Movie', id: 'movie'},
    {label: 'Special', id: 'special'},
    {label: 'Music', id: 'music'},
] as const;

export const MANGA_ORDER_BY = {
    'popularity': 'popularity',
    'title': 'title',
    'start date': 'start_date',
    'end date': 'end_date',
    'favorites': 'favorites',
    'chapters': 'chapters'
} as const;

export const MANGA_STATUS = {
    'Publishing': 'publishing',
    'Finished': 'complete',
    'On Hiatus': 'hiatus',
    'Discontinued': 'discontinued',
    'upcoming': 'upcoming'
} as const;

export const MANGA_TYPES = {
    'manga': 'manga',
    'novel': 'novel',
    'lightnovel': 'lightnovel',
    'oneshot': 'oneshot',
    'doujin': 'doujin',
    'manhwa': 'manhwa',
    'manhua': 'manhua'
} as const;
