import { NavLink } from 'react-router-dom';
import FavoriteBtn from '../../Favorites/FavoriteBtn/FavoriteBtn';
import s from './ElementCard.module.css'
import { TAnimeInfo, TMangaInfo, TCharactersInfo } from '@/types/mainElementsTypes';

type TElementCard = {
    category: 'anime' | 'manga' | 'characters',
    data: TAnimeInfo | TMangaInfo | TCharactersInfo
}

export const ElementCard = ({category, data}: TElementCard) => {

    const title = 'title' in data ? data.title : data.name
    
    return ( 
        //todo w-100
        <div  className='w-25 px-3 text-center mb-2' > 
            <div className={`${s.cardContainer} position-relative`}>
                <NavLink to={`${data.mal_id}`}>
                    <img src={data.images?.jpg.image_url} alt='poster' className={s.poster}/>
                    <div className={s.background}/>
                </NavLink>
                <div className={s.favBtn}>
                    <FavoriteBtn category={category} info={{
                        mal_id: data.mal_id,
                        images: data.images,
                        title
                    }}/>
                </div>
            </div>
            <h5>{title}</h5>
        </div>
    )
}