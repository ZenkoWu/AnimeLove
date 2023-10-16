import { useSelector } from "react-redux"
import {  selectFavoritesModule } from "../../redux/features/favorites/selector"
import { useGetFavoritesAnimeQuery } from "../../redux/services/animeApi"
import AnimeCard from "../AnimeCard/AnimeCard"
import Preloader from "../../Preloader/Preloader"

export const Favorites = () => {
    
    const {favorites, favoritesCount} = useSelector((state) => selectFavoritesModule(state))
    // const data = useGetFavoritesAnimeQuery(favorites)
    const data = Object.keys(favorites).map(el => ({title: 'One Piece', mal_id: el}))
    if(!data && favoritesCount > 0) {
        return <Preloader/>
    }
    return (
        <div>
            {data && favoritesCount > 0 ? 
            <div className='d-flex justify-between row'>
                {data.map((favorite) => <AnimeCard anime={favorite}  key={favorite.mal_id}/>)}
            </div>
            :
            <p> Favorites is unknown</p>
            
            }
        </div>
    )
}