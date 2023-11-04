import { NavLink } from 'react-router-dom';
import {FavoriteBtn} from '../../Favorites/FavoriteBtn/FavoriteBtn';
import s from './ElementCard.module.css'
import { TElementCard } from '@/types/mainElementsTypes';


export const ElementCard = ({category, data}: TElementCard) => {

    const title = 'title' in data ? data.title : data.name
    
    return ( 
        <div className='px-3 text-center mb-2' > 
            <div className={`${s.cardContainer} position-relative`}>
                <NavLink to={`${data.mal_id}`}>
                    <img 
                        src={data.images?.jpg.image_url} 
                        alt='poster' 
                        className={s.poster}
                    />
                    <div className={s.background}/>
                </NavLink>
                <div className={s.favBtn}>
                    <FavoriteBtn 
                        category={category} 
                        info={{
                            mal_id: data.mal_id,
                            images: data.images,
                            title
                        }}
                    />
                </div>
            </div>
            <h5 className={s.title}>{title}</h5>
        </div>
    )
}