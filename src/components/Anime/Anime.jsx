
import s from './Anime.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { animeListActions } from '../../redux/features/animeList';
import { useCallback, useEffect } from 'react';
import { useGetAnimeListQuery } from "../../redux/services/animeApi";
import Preloader from "../../Preloader/Preloader";
import AnimeList from './AnimeList/AnimeList';

const Anime = () => {
    
    const currentPage = useSelector(state => state.animeList.currentPage)
    const pageLimit = useSelector(state => state.animeList.pageSize)
  
    // let {data: anime} = useGetAnimeListQuery({currentPage, pageLimit})
    let anime = {data: [{title: 'One piece', mal_id: 1}], pagination: {items: {total: 250}}}
    // console.log(anime)
    const dispatch = useDispatch()

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
        <div className=''>
            <AnimeList
                animeList={anime} 
                changeCurrentPage={changeCurrentPage} 
                currentPage={currentPage}
                totalAnimeCount={totalAnimeCount}
            />
        </div>
    )
}
export default Anime;