import Paginator from '../../Paginator/Paginator';
import {AnimeCardFull} from '../../AnimeCardFull/AnimeCardFull';
import s from './AnimeList.module.css'
import { useState } from 'react';
import AnimeCard from '../../AnimeCard/AnimeCard';

const AnimeList = ({animeList, changeCurrentPage, currentPage, totalAnimeCount}) => {
    const [isFullCard, setIsFullCard] = useState(false) // todo save this state localy

    return (
        <div className={s.container}>
            <div className={`${s.animeList}`}>
                <div className='d-flex justify-content-between align-items-center pt-2 pb-3'>
                    <span className={s.title}>Anime List</span>
                    <div class="form-check form-switch fs-4">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            role="switch" 
                            id="flexSwitchCheckDefault"
                            onClick={()=> setIsFullCard(prev => !prev)}
                        />
                        {/* <label className="form-check-label" for="flexSwitchCheckDefault">Show full info</label> */}
                    </div>
                </div>
                {
                    isFullCard ? 
                    <div>
                      { animeList.data.map((anime) => <AnimeCardFull anime={anime} key={anime.mal_id}/>) }
                    </div>
                    :
                    <div className='d-flex justify-between row'> 
                        { animeList.data.map((anime) => <AnimeCard anime={anime} key={anime.mal_id}/>) }
                    </div> 
                }
                
                <Paginator 
                    totalAnimeCount={totalAnimeCount} 
                    pageSize={24} 
                    onPageChange={changeCurrentPage} 
                    currentPage={currentPage}
                />
            </div>
        </div> 
    )
}
export default AnimeList; 