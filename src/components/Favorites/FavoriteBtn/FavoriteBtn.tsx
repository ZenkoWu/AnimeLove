import { useDispatch, useSelector } from "react-redux";
import { favoritesActions } from "../../../redux/features/favorites";
import { HeartBtn } from "./HeartBtn";
import { TState } from "@/redux/store";
import { TAnimeInfo, TCategories, TMangaInfo, TSmallCardInfo } from "@/types/mainElementsTypes";

const FavoriteBtn = ({category, info}: {category: TCategories, info: TSmallCardInfo}) => {
    const dispatch = useDispatch()
    const favorites = useSelector((state: TState) => state.favorites.favorites)

    const isFavorite = favorites[category]?.items?.[info.mal_id] ? true : false
    
    const addToFavorites = (info: TAnimeInfo | TMangaInfo) => {
        dispatch(favoritesActions.like({category, info}))
    }

    const deleteFromFavorites = (info: TAnimeInfo | TMangaInfo) => {
        dispatch(favoritesActions.unlike({category, info}))
    }

    return (
        <div onClick={() => isFavorite ? deleteFromFavorites(info) : addToFavorites(info)} className="cursor-pointer">
          <HeartBtn isFavorite={isFavorite}/> 
        </div>    
    )
}

export default FavoriteBtn;