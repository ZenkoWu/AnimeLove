import { useParams } from "react-router-dom"
import Preloader from "../../Preloader/Preloader"
import s from './CharactersDescription.module.css'
import { TCharactersInfo } from "../../../types/mainElementsTypes"
import { api } from "../../../redux/services/api/api"
import {FavoriteBtn} from "../../Favorites/FavoriteBtn/FavoriteBtn"
import { flexPlace } from "../../../utils/flexPlace"
import { API_ROUTES } from "../../../redux/services/apiRoutes/apiRoutes"
import { ErrorPage } from "../../../components/ErrorPage/ErrorPage"

export const CharactersDescription = () => {
    const params = useParams()

    if(!params.charactersId) {
        return <ErrorPage/>;
    }
    const {data} = api.getById({route: API_ROUTES.CHARACTERS, id: params.charactersId}) 

    if(!data) {
        return <Preloader/>
    }

    const characters: TCharactersInfo = data.data 


    return (
        <div className={s.container}>
            <div className={s.cardBackground}>
                <div className='p-4 w-100'>
                    <img 
                        src={characters.images.jpg.image_url} 
                        alt="character-poster" 
                        className={'pe-4 pb-2 float-start'} 
                    />
                    <div className="pb-4" >
                    <div className="w-100"> 
                        <div className={`${flexPlace('between', 'center')}`}>
                            <h1 className='fw-bold fs-2' >{characters.name}</h1>
                            <FavoriteBtn 
                                category={API_ROUTES.CHARACTERS}
                                info={{
                                    mal_id: characters.mal_id,
                                    images: characters.images,
                                    title: characters.name
                                }}
                            />
                        </div>
                        <p className={s.borderBottomGrey}>{characters.name_kanji}</p> 
                        <p className="p-0 m-0">Nicknames: {characters.nicknames?.map(el => el).join(', ')}</p>
                    </div>

                        
                    { 
                        characters.about &&
                        <div className="py-3">
                            <h4>Description</h4>
                            <p>{characters.about}</p>
                        </div>
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}
