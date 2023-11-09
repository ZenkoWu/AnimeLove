import { 
    AGE_RATING, 
    ANIME_STATUS, 
    ANIME_TYPE, 
    MANGA_STATUS, 
    MANGA_TYPES 
} from './../constants';
// r - файл достаточно назвать просто types.ts  
interface TElementInfo {
    mal_id: number,// r - неоч нравится что где_то_ты_пишешь_так а гдеТоВотТак
    // r - если это то что приходит с сервера - то можно мапить их названия на твои, это в функции загрузки данных будет спрятано
    // r -  плюс так можешь местами дать более понятные названия / структуру, как видишь тут с картинками говно структура
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
    type?: typeof ANIME_TYPE[number]['label']; // r -  все три от лейбла? не перепутала? 
    rating?: typeof AGE_RATING[number]['label'],
    status?: typeof ANIME_STATUS[number]['label'],
    trailer?: {
        embed_url: string,
        url: string
    },
    duration?: string,  
    episodes?: number,
}
export interface TMangaInfo extends TElementInfo {
    type?: typeof MANGA_TYPES[number]['label'],
    chapters?: number,
    status?: typeof MANGA_STATUS[number]['label']// r - и тут статус от лейбла? чигооо
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
    data: TAnimeInfo | TMangaInfo | TCharactersInfo
}
// r -  в файле есть лишние пустые строки
// r - для понятийности одну ок, но две то зачем
