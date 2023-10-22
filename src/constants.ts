
export const ageRating = {
    ['all ages']: 'g',
    'children': 'pg',
    ['teens 13 or older']: 'pg13',
    '17+ (violence)': 'r17',
    '18+': 'r'
} as const;

export const status = {
    'finished': 'complete',
    'ongoing': 'airing',
    'announce': 'upcoming'
} as const;

export const animeOrderBy = ['popularity', 'title', 'start_date', 'end_date', 'favorites', 'episodes'] as const;
export const animeType =  ['tv', 'ova', 'movie', 'special', 'music'] as const


export const mangaOrderBy = ['popularity', 'title', 'start_date', 'end_date', 'favorites', 'chapters'] as const;

export const mangaStatus = ["publishing","complete", "hiatus", "discontinued", "upcoming"]  as const;
export const mangaTypes = [ "manga", "novel", "lightnovel", "oneshot", "doujin", "manhwa", "manhua"]  as const;