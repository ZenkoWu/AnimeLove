
export const AGE_RATING = {
    ['all ages']: 'g',
    'children': 'pg',
    ['teens 13 or older']: 'pg13',
    '17+ (violence)': 'r17',
    '18+': 'r'
} as const;

export const ANIME_STATUS = {
    'finished': 'complete',
    'ongoing': 'airing',
    'announce': 'upcoming'
} as const;

export const ANIME_ORDER_BY = {
    'popularity': 'popularity',
    'title': 'title',
    'start date': 'start_date',
    'end date': 'end_date',
    'favorites': 'favorites',
    'episodes': 'episodes'
} as const;

export const ANIME_TYPE =  {
    'tv': 'tv',
    'ova': 'ova',
    'movie': 'movie',
    'special': 'special',
    'music':  'music'
} as const;


export const MANGA_ORDER_BY = {
    'popularity': 'popularity',
    'title': 'title',
    'start date': 'start_date',
    'end date': 'end_date',
    'favorites': 'favorites',
    'chapters': 'chapters'
} as const;

export const MANGA_STATUS = {
    'publishing': 'publishing',
    'complete': 'complete',
    'hiatus': 'hiatus',
    'discontinued': 'discontinued',
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
