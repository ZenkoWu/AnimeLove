
export const animeRatings = [
    'G - All Ages',
    'PG - Children',
    'PG-13 - Teens 13 or older',
    'R - 17+ (violence & profanity)',
    'R+ - Mild Nudity'
] as const;

const animeStatus =  ['Finished Airing', 'Currently Airing', 'Not yet aired'] as const;
const mangaStatus =  ['Finished', 'Publishing', 'On Hiatus', 'Discontinued'] as const;

interface TElementInfo {
    background: string,
    duration: string,
    type: 'TV' | 'ova' | 'movie' | 'special' | 'music',
    episodes: number,
    favorites: number,
    genres: {mal_id: number, type: string, name: string}[],
    images: {
        jpg: {
            image_url: string,
            small_image_url: string,
            large_image_url: string
        }
    },
    mal_id: number,
    popularity: number,
    rank: number,
    year: number,
    source: string,
    score: number,
    title: string,
    title_japanese: string,
}

export interface TAnimeInfo extends TElementInfo {
    rating:  typeof animeRatings[number],
    status: typeof animeStatus[number],
    trailer: {
        embed_url: string,
        url: string
    }
}


export interface TMangaInfo extends TElementInfo {
    chapters: number,
    status: typeof mangaStatus[number]
}