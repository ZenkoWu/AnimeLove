import { useSelector } from "react-redux"
import { selectFavoritesModule } from "../../redux/features/favorites/selector"
import {ElementCard} from "../List/ElementCard/ElementCard"
import Preloader from "../Preloader/Preloader"
import { TState } from "@/redux/store"

export const Favorites = () => {
    
    const {favorites, favoritesCount} = useSelector((state: TState) => selectFavoritesModule(state))
    // const data = useGetFavoritesAnimeQuery(favorites)
    const data = Object.keys(favorites).map(el => ({title: 'One Piece', mal_id: el}))
    if(!data && favoritesCount > 0) {
        return <Preloader/>
    }
    return (
        <div>
            {/* {data && favoritesCount > 0 ? 
            <div className='d-flex justify-between row'>
                {data.map((favorite) => <ElementCard element={favorite}  key={favorite.mal_id}/>)}
            </div>
            :
            <p> Favorites is unknown</p>
            
            } */} //todo
        </div>
    )
}