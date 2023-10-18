import { NavLink } from 'react-router-dom';
import FavoriteBtn from '../FavoriteBtn/FavoriteBtn';
import s from './AnimeCard.module.css'

const AnimeCard = ({anime}) => {
    return ( 
        <div  className='w-25 px-3 text-center mb-2' > 
            <div style={{position:'relative'}} className={s.cardContainer}>
                <NavLink to={`${anime.mal_id}`}>
                    <img src={anime.images.jpg.image_url} className={s.poster}/>
                    <div className={s.background}/>
                </NavLink>
                <div className={s.favBtn}>
                    <FavoriteBtn id={anime.mal_id}/>
                </div>
            </div>
            <h5>{anime.title}</h5>
        </div>
    )
}
export default AnimeCard;