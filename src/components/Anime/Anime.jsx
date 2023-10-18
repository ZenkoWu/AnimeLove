import { useDispatch, useSelector } from 'react-redux';
import { animeListActions } from '../../redux/features/animeList';
import { useCallback } from 'react';
import { useGetAnimeListQuery } from "../../redux/services/animeApi";
import Preloader from "../../Preloader/Preloader";
import {List} from '../List/List';

const Anime = () => {
    const {currentPage, pageSize: pageLimit, totalAnimeCount} = useSelector(state => state.animeList)
  
    let {data: anime} = useGetAnimeListQuery({currentPage, pageLimit})
    const dispatch = useDispatch()

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
            <List
                title='Anime'
                elementList={anime} 
                changeCurrentPage={changeCurrentPage} 
                currentPage={currentPage}
                totalElementCount={totalAnimeCount}
                pageSize={pageLimit}
            />
        </div>
    )
}
export default Anime;