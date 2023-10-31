import { NavLink } from 'react-router-dom';
import FavoriteBtn from '../../Favorites/FavoriteBtn/FavoriteBtn';
import s from './ElementCardFull.module.css'
import { TAnimeInfo, TCategories, TCharactersInfo, TMangaInfo } from '@/types/mainElementsTypes';
import { flexPlace } from '../../../utils/flexPlace';

type TElementCard = { //todo вынести в один тип с другой карточкой 
    category: TCategories,
    data: TAnimeInfo | TMangaInfo | TCharactersInfo
}

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
                            <span className='text-decoration-underline'>Year:</span> {data.year ?? 'unknown'}
                        </p>
                        <p>
                            <span className='text-decoration-underline'>Rating:</span> {(data.score)?.toFixed(0)}/10
                        </p>
                    </div>
                }
                <p className={s.cardDescription}>
                    {
                        description ?? 
                        <>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sapiente sunt? 
                            Illum, animi consequatur qui, aperiam amet neque vel quas perferendis culpa harum 
                            recusandae iste assumenda repudiandae, eligendi beatae quaerat explicabo labore 
                            asperiores officia. Voluptatibus adipisci deleniti tempora excepturi unde quo illum 
                            ratione modi amet molestias hic rem quam ipsum, assumenda nihil ipsam atque! Itaque, 
                            repellendus? Laudantium iste mollitia voluptatem molestias labore? Ea, perspiciatis sunt! 
                            Aliquid nobis eligendi voluptatum minima eum harum exercitationem. Dolores deleniti 
                            delectus aliquam, voluptas odit eos. 
                        </>
                    }
                   
                </p>
            </div>
       </div>
    )
}