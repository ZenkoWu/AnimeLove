import { NavLink } from 'react-router-dom';
import FavoriteBtn from '../FavoriteBtn/FavoriteBtn';
import s from './ElementCard.module.css'

export const ElementCard = ({category, element}) => {
    return ( 
        <div  className='w-25 px-3 text-center mb-2' > 
            <div style={{position:'relative'}} className={s.cardContainer}>
                <NavLink to={`${element.mal_id}`}>
                    <img src={element.images.jpg.image_url} className={s.poster}/>
                    <div className={s.background}/>
                </NavLink>
                <div className={s.favBtn}>
                    <FavoriteBtn category={category} id={element.mal_id}/>
                </div>
            </div>
            <h5>{element.title}</h5>
        </div>
    )
}