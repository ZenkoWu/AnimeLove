import AnimeList from "../AnimeList/AnimeList";
import s from './Anime.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { animeListActions } from '../redux/features/animeList';
import { useCallback, useEffect } from 'react';
import { useGetAnimeListQuery } from "../redux/services/animeApi";
import Preloader from "../Preloader/Preloader";

const Anime = () => {
    
    const currentPage = useSelector(state => state.animeList.currentPage)
    const pageLimit = useSelector(state => state.animeList.pageSize)
  
    let {data: anime} = useGetAnimeListQuery({currentPage, pageLimit})
    console.log(anime)
    const dispatch = useDispatch()
    
    // useEffect(()=> {
    //     dispatch(animeListActions.changeTotalAnimeCount(totalCount))
    // }, [totalCount])
    const totalAnimeCount = useSelector(state => state.animeList.totalAnimeCount)

    const changeCurrentPage = useCallback((currentPage) => {
        dispatch(animeListActions.changeCurrentPage(currentPage))
    }, [currentPage])

    if(!anime) {
        return <Preloader/>
    }
    const totalCount = anime.pagination.items.total 
    dispatch(animeListActions.changeTotalAnimeCount(totalCount))
    return (
        <div className={`gap-4 ${s.contentContainer}`} style={{padding: '50px 50px'}}>
            <AnimeList 
                animeList={anime} 
                changeCurrentPage={changeCurrentPage} 
                currentPage={currentPage}
                totalAnimeCount={totalAnimeCount}
                />
            <div style={{height:'600px', backgroundColor:'white', border: '1px solid rgb(209, 204, 204)'}}>Filter</div>
        </div>
    )
}
export default Anime;