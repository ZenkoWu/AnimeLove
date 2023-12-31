import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { favoritesActions } from "../../../redux/features/favorites";
import { HeartBtn } from "./HeartBtn";
import { TState } from "@/redux/store";
import {  TCategories, TSmallCardInfo } from "@/types/types";
import { TAnimeInfo } from "@/types/anime";
import { TMangaInfo } from "@/types/manga";

export const FavoriteBtn = ({category, info}: {category: TCategories, info: TSmallCardInfo}) => {
    const dispatch = useDispatch()
    const favorites = useSelector((state: TState) => state.favorites.favorites)

    const isFavorite = favorites[category]?.items?.[info.mal_id] ? true : false
    
    const addToFavorites = (info: TAnimeInfo | TMangaInfo) => {
        dispatch(favoritesActions.like({category, info}))
    }

    const deleteFromFavorites = (info: TAnimeInfo | TMangaInfo) => {
        dispatch(favoritesActions.unlike({category, info}))
    }

    const onBtnClick = useCallback(()=> {
        isFavorite ? deleteFromFavorites(info) : addToFavorites(info)
    }, [isFavorite])
    
    return (
        <div 
            onClick={onBtnClick} 
            className="cursor-pointer"
        >
            <HeartBtn isFavorite={isFavorite}/> 
        </div>    
    )
}
