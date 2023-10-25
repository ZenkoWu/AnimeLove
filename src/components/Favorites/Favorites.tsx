import { useSelector } from "react-redux"
import {useState} from 'react'
import { selectFavoritesModule } from "../../redux/features/favorites/selector"
import {ElementCard} from "../List/ElementCard/ElementCard"
import { TState } from "@/redux/store"

export const Favorites = () => {
    const [active, setActive] = useState('anime')

    const {favorites, favoritesCount} = useSelector((state: TState) => selectFavoritesModule(state))
    return (
        <div  style={{padding: '50px 150px'}}>
           
           
           
                {    
                    favorites.anime ||  favorites.manga ? 
                    <div className="bg-white p-4">
                        <h2>Favorites</h2>
                        <div className=" d-flex justify-content-between">

                       
                        <ul className="nav nav-tabs w-100">
                            <li className="nav-item">
                                <div className={"nav-link " + `${active == 'anime' && 'active'}` } aria-current="page" onClick={()=> setActive('anime')}>Anime</div>
                            </li>
                            <li className="nav-item">
                                <div className={"nav-link " + `${active == 'manga' && 'active'}` } onClick={()=> setActive('manga')}>Manga</div>
                            </li>
                           
                        </ul>
                            <button onClick={()=> localStorage.clear()} className="btn btn-primary" style={{whiteSpace:'nowrap'}}>
                                    delete all 
                                </button>
                        </div>
                    {   
                        <div className="pt-4">
                        { active == 'anime' ? 
                        <div className="d-flex p-2 w-100 d-flex justify-between flex-wrap" >
                           { Object.values(favorites.anime).map(el => (
                            // <div className=' red w-25'>
                                <ElementCard category="anime" data={el}/>
                                // </div>
                            ))}
                        </div>
                            : 
                            'manga'
                        }
                        </div>
                    }
                    
                   
                
                    </div>
            :  <p> Favorites is unknown</p>
        }
        </div>
    )
}