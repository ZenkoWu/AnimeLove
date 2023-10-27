import { useDispatch, useSelector } from "react-redux"
import {useState} from 'react'
import { selectFavoritesModule } from "../../redux/features/favorites/selector"
import {ElementCard} from "../List/ElementCard/ElementCard"
import { TState } from "@/redux/store"
import s from './Favorites.module.css'
import { favoritesActions } from "../../redux/features/favorites"
import DeleteFavorites from "./DeleteFavorites/DeleteFavorites"

export const Favorites = () => {
    const [active, setActive]= useState<'anime' | 'manga'>('anime')
    const [opened, setOpened] = useState(false)
    const {favorites, favoritesCount} = useSelector((state: TState) => selectFavoritesModule(state))
    const dispatch = useDispatch()

    const deleteFavorites = (category: 'anime' | 'manga') => {
        dispatch(favoritesActions.deleteFavorites(category))
    }

    return (
        <div className={s.container}>
            {
                opened && 
                <DeleteFavorites 
                    opened={opened} 
                    setOpened={setOpened}  
                    onAccept={()=> deleteFavorites(active)}
                    question={`Are you sure you want to delete all favorites ${active}?`}
                />
            }
                <div className="bg-white p-4">
                    <h2>Favorites</h2>
                    <div className=" d-flex justify-content-between">
                        <ul className="nav nav-tabs w-100">
                            <li className="nav-item cursor-pointer">
                                <div 
                                    className={`nav-link ${active == 'anime' && 'active'}`} 
                                    aria-current="page" 
                                    onClick={()=> setActive('anime')}
                                >
                                    Anime
                                </div>
                            </li>
                            <li className="nav-item cursor-pointer">
                                <div 
                                    className={`nav-link ${active == 'manga' && 'active'}`} 
                                    onClick={()=> setActive('manga')}
                                >
                                    Manga
                                </div>
                            </li>
                        </ul>
                        <button 
                            onClick={()=> setOpened(true)} 
                            className="btn btn-primary" 
                            style={{whiteSpace:'nowrap'}}
                            disabled={favoritesCount === 0}
                        >
                            delete all {active}
                        </button>
                    </div>  
                    <div className="pt-4">
                        <div className="d-flex p-2 w-100 d-flex justify-between flex-wrap">
                        { 
                            active == 'manga' && favorites.manga?.count ?
                                Object.values(favorites.manga.items).map(el => (
                                // <div className=' red w-25'>
                                    <ElementCard category={active} data={el}/>
                                    // </div>
                                ))  
                            : 
                            active == 'anime' && favorites.anime?.count ?
                            Object.values(favorites.anime.items).map(el => (
                            // <div className=' red w-25'>
                                <ElementCard category={active} data={el}/>
                                // </div>
                            ))  
                            : 
                            <div>No favorite {active} </div>
                            
                        }
                        </div>
                    </div>
                
            
                </div>
            
        </div>
    )
}