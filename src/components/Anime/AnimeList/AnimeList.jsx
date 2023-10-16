import Paginator from '../../Paginator/Paginator';
import AnimeCard from '../../AnimeCardFull/AnimeCardFull';
import s from './AnimeList.module.css'
const AnimeList = ({animeList, changeCurrentPage, currentPage, totalAnimeCount}) => {
    return (
        <div className={s.container}>
            <div className={`${s.animeList}`}>
                <p className={s.title}>Anime List</p>
                {/* <div className='d-flex justify-between row'> */}
                    
                { animeList.data.map((anime) => <AnimeCard anime={anime} key={anime.mal_id}/>) }
                {/* </div> */}
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