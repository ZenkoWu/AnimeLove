import { useDispatch, useSelector } from "react-redux"
import {useState} from 'react'
import { selectFavoritesModule } from "../../redux/features/favorites/selector"
import {ElementCard} from "../List/ElementCard/ElementCard"
import { TState } from "@/redux/store"
import s from './Favorites.module.css'
import { favoritesActions } from "../../redux/features/favorites"
import {Modal} from "../Modal/Modal"
import { TCategories } from "../../types/mainElementsTypes"
import { flexPlace } from "../../utils/flexPlace"

export const Favorites = () => {
    const [active, setActive]= useState<TCategories>('anime')
    const [opened, setOpened] = useState(false)
    const {favorites, count} = useSelector((state: TState) => selectFavoritesModule(state))

    const dispatch = useDispatch()

    const deleteFavorites = (category: TCategories) => {
        dispatch(favoritesActions.deleteFavorites(category))
    }

    const tabs = [
        {title: 'Anime', active: 'anime' },
        {title: 'Manga', active: 'manga' },
        {title: 'Characters', active: 'characters' },
    ] as const;

    return (
        <div className={s.container}>
            {
                opened && 
                <Modal 
                    opened={opened} 
                    setOpened={setOpened}  
                    onAccept={()=> deleteFavorites(active)}
                    question={`Are you sure you want to delete all favorites ${active}?`}
                    title={'Delete favorite'}
                />
            }
            <div className="bg-white p-4">
                <h2>Favorites</h2>
                <div className={`${flexPlace('between')}`}>
                    <ul className="nav nav-tabs w-100">
                        {
                            tabs.map(el => 
                                <li className="nav-item cursor-pointer">
                                    <div 
                                        className={`nav-link ${active == el.active && 'active'}`} 
                                        aria-current="page" 
                                        onClick={()=> setActive(el.active)}
                                    >
                                        {el.title}
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                    <button 
                        onClick={()=> setOpened(true)} 
                        className="btn btn-primary" 
                        style={{whiteSpace:'nowrap'}}
                        disabled={favorites[active]?.count === 0 || !favorites[active]}
                    >
                        delete all {active}
                    </button>
                </div>  
                <div className="pt-4"> 
                    <div className={`${flexPlace('start', 'start')} flex-wrap p-2 w-100`}> 
                        { 
                            favorites[active] && favorites[active]?.count &&
                                Object.values(favorites[active]?.items ?? []).map(el => (
                                <div className={s.elementCard}> 
                                    <ElementCard 
                                        category={active} 
                                        data={el} 
                                        route={active}
                                    />
                                </div>
                                ))  
                            || 
                                <div>No favorite {active} </div>
                            
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
