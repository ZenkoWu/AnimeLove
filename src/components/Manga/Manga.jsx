import { useDispatch, useSelector } from 'react-redux';
import { mangaListActions } from '../../redux/features/mangaList';
import { useCallback } from 'react';
import { useGetMangaListQuery } from "../../redux/services/mangaApi";
import Preloader from "../../Preloader/Preloader";
import {List} from '../List/List';

export const Manga = () => {
    
    const {currentPage, pageSize: pageLimit, totalMangaCount} = useSelector(state => state.mangaList)
  
    const {data: manga} = useGetMangaListQuery({currentPage, pageLimit})
    console.log(manga)
    const dispatch = useDispatch()

    const changeCurrentPage = useCallback((currentPage) => {
        dispatch(mangaListActions.changeCurrentPage(currentPage))
    }, [currentPage])

    if(!manga) {
        return <Preloader/>
    }
    const totalCount = manga.pagination.items.total 
    dispatch(mangaListActions.changeTotalMangaCount(totalCount))

    return (
        <div>
            <List
                title='Manga'
                elementList={manga} 
                changeCurrentPage={changeCurrentPage} 
                currentPage={currentPage}
                totalElementCount={totalMangaCount}
                pageSize={pageLimit}
            />
        </div>
    )
}