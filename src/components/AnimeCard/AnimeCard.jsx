import { NavLink } from 'react-router-dom';
import FavoriteBtn from '../FavoriteBtn/FavoriteBtn';
import s from './AnimeCard.module.css'

const AnimeCard = ({anime}) => {
    return (
        <div style={{ marginBottom: '10px', textAlign:'center', }} className='col p-0'>
           
                <div>
                    {/* <img src={anime.images.jpg.image_url} className={s.poster}/> */}
                </div>
                
        </div>
    )
}
export default AnimeCard;