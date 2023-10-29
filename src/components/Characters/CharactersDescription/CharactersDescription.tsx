import { useParams } from "react-router-dom"
import Preloader from "../../Preloader/Preloader"
import s from '../../Anime/AnimeDescription/AnimeDescription.module.css' 
import starSymbol from '../../../imges/starScore.svg'
import { TCharactersInfo } from "../../../types/mainElementsTypes"
import { getScoreColor } from "../../../utils/getScoreColor"
import { api } from "../../../redux/services/api/api"
import FavoriteBtn from "../../Favorites/FavoriteBtn/FavoriteBtn"
import { flexPlace } from "../../../utils/flexPlace"

export const CharactersDescription = () => {
    const params = useParams()

    const {data} = api.characters.getById(params.charactersId) // todo api.getById('characters', params.id)

    if(!data) {
        return <Preloader/>
    }

    const anime: TCharactersInfo = data.data


    return (
        <div className={s.container}>
            <div className={s.cardBackground}>
                <div className='p-4 w-100'>
                <img src={anime.images.jpg.image_url} alt="anime-img" className={'pe-4 pb-2'} style={{float:'left'}}/>
                <div className="pb-4" >
                <div className="w-100"> 
                    <div className={`${flexPlace('between', 'center')}`}>
                        
                        
                        
                    
                        <h1 className='fw-bold fs-2' >{anime.name}</h1>
                        
                    <FavoriteBtn category="characters" info={{
                            mal_id: anime.mal_id,
                            images: anime.images,
                            title: anime.name
                        }}/>
                    </div>
                    <p className={s.borderBottomGrey}>{anime.name_kanji}</p> 
                    <p className="p-0 m-0">Nicknames: {anime.nicknames?.map(el => el).join(', ')}</p>
                </div>

                    
                { 
                    anime.about &&
                    <div className="py-3" >
                        <h4>Description</h4>
                        <p className="text-" style={{textAlign: 'justify'}}>{anime.about}</p>
                    </div>
                }
                </div>
                   
                </div>
            </div>
        </div>
    )
}
