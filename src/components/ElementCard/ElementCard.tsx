import { NavLink } from 'react-router-dom';
import FavoriteBtn from '../FavoriteBtn/FavoriteBtn';
import s from './ElementCard.module.css'
import { TAnimeInfo, TMangaInfo } from '@/types/mainElementsTypes';

type TElementCard = {
    category: 'anime' | 'manga',
    data: TAnimeInfo | TMangaInfo
}

export const ElementCard = ({category, data}: TElementCard) => {
    return ( 
        <div  className='w-25 px-3 text-center mb-2' > 
            <div style={{position:'relative'}} className={s.cardContainer}>
                <NavLink to={`${data.mal_id}`}>
                    <img src={data.images.jpg.image_url} className={s.poster}/>
                    <div className={s.background}/>
                </NavLink>
                <div className={s.favBtn}>
                    <FavoriteBtn category={category} id={data.mal_id}/>
                </div>
            </div>
            <h5>{data.title}</h5>
        </div>
    )
}