import { NavLink } from 'react-router-dom';
import FavoriteBtn from '../../Favorites/FavoriteBtn/FavoriteBtn';
import s from './ElementCardFull.module.css'
import { TElementCard } from '@/types/mainElementsTypes';
import { flexPlace } from '../../../utils/flexPlace';

export const ElementCardFull = ({category, data}: TElementCard) => {
    const title = 'title' in data ? data.title : data.name
    const description = 'background' in data ? data.background : 'about' in data ? data.about : null

    return (
        <div className={`d-flex ${s.cardContainer}`}>
            <img src={data.images?.jpg.image_url} alt='poster' className={s.poster}/>
            <div className={`${s.content} w-100`}>
                <div className={`${flexPlace('between', 'center')}`}>
                    <NavLink to={`${data.mal_id}`} className='text-dark'>
                    <h2>{title}</h2></NavLink>
                    <FavoriteBtn 
                        category={category} 
                        info={{
                            mal_id: data.mal_id,
                            images: data.images,
                            title
                        }}
                    />
                </div>
               { 
                    'title' in data  &&
                    <div className={`d-flex align-center gap-4`}>
                        <p> 
                            <span className='text-decoration-underline'>Year:</span> 
                            {data.year ?? 'unknown'}
                        </p>
                        <p>
                            <span className='text-decoration-underline'>Rating:</span> 
                            {(data.score)?.toFixed(0)}/10
                        </p>
                    </div>
                }
                <p className={s.cardDescription}>
                    {
                        description ?? 
                        <>
                           Very soon we will add a description to this card, 
                           but for now check out the others
                        </>
                    }
                   
                </p>
            </div>
       </div>
    )
}