
export const AGE_RATING = {
    'G - All Ages' : 'g',
    'PG - Children': 'pg',
    'PG-13 - Teens 13 or older': 'pg13',
    'R - 17+ (violence & profanity)': 'r17',
    'R+ - Mild Nudity': 'r'
} as const;
 
export const ANIME_STATUS = {
    'Finished Airing': 'complete',
    'Currently Airing': 'airing',
    'Not yet aired': 'upcoming'
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
