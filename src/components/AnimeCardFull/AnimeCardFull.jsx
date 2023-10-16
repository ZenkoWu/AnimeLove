import { NavLink } from 'react-router-dom';
import FavoriteBtn from '../FavoriteBtn/FavoriteBtn';
import s from './AnimeCardFull.module.css'

export const AnimeCardFull = ({anime}) => {
    return (
        <div className={`d-flex ${s.animeCard}`}>
            <img src={anime.images?.jpg.image_url} className={s.poster}/>
            <div className={`${s.animeContent}`}>
                <div className={`d-flex align-center justify-content-between`}>
                    <NavLink to={`${anime.mal_id}`} className='text-dark'>
                    <h2>{anime.title}</h2></NavLink>
                    <FavoriteBtn id={anime.mal_id}/>
                </div>
                <div className={`d-flex align-center`} style={{gap: 20}}>
                    <p>
                        <span className='text-underline'>Year:</span> xxxx
                    </p>
                    <p>
                        <span className='text-underline'>Rating:</span> 10/10
                    </p>
                </div>
                <p className={s.animeDescription}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sapiente sunt? 
                    Illum, animi consequatur qui, aperiam amet neque vel quas perferendis culpa harum 
                    recusandae iste assumenda repudiandae, eligendi beatae quaerat explicabo labore 
                    asperiores officia. Voluptatibus adipisci deleniti tempora excepturi unde quo illum 
                    ratione modi amet molestias hic rem quam ipsum, assumenda nihil ipsam atque! Itaque, 
                    repellendus? Laudantium iste mollitia voluptatem molestias labore? Ea, perspiciatis sunt! 
                    Aliquid nobis eligendi voluptatum minima eum harum exercitationem. Dolores deleniti 
                    delectus aliquam, voluptas odit eos.
                </p>
            </div>
       </div>
    )
}