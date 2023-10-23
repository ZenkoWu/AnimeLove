import { useDispatch, useSelector } from "react-redux";
import { favoritesActions } from "../../../redux/features/favorites";
import { selectFavorites } from "../../../redux/features/favorites/selector";
import { HeartBtn } from "./HeartBtn";
import { TState } from "@/redux/store";

const FavoriteBtn = ({category, id}: {category: 'anime' | 'manga', id: number}) => {
    const dispatch = useDispatch()
    const favorites = useSelector((state: TState) => selectFavorites(state))

    const isFavorite = favorites[category][id] 
    
    const addToFavorites = (id: number) => {
        dispatch(favoritesActions.like({category, id}))
    }

    const deleteFromFavorites = (id: number) => {
        dispatch(favoritesActions.unlike({category, id}))
    }

    return (
        <div onClick={() => isFavorite ? deleteFromFavorites(id) : addToFavorites(id)}>
          <HeartBtn isFavorite={isFavorite}/> 
        </div>    
    )
}

export default FavoriteBtn;