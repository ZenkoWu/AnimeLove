import { useDispatch, useSelector } from 'react-redux';
import { mangaListActions } from '../../redux/features/mangaList';
import { useCallback, useReducer } from 'react';
import { useGetMangaListQuery } from "../../redux/services/mangaApi";
import Preloader from "../../Preloader/Preloader";
import {List} from '../List/List';
import { ContentContainer } from '../ContentContainer/ContentContainer';
import { reducer } from '../Anime/Anime';
import { Filter, statusAC, orderByAC, typeChangeAC } from '../Filter/Filter';

const status = ["publishing","complete", "hiatus", "discontinued", "upcoming"] //todo rewrite to more readeble types
const initialState = {
    type: 'manga',
    orderBy: 'popularity',
    status: 'complete'
}

export const Manga = () => {
    const [state, dis] = useReducer(reducer, initialState)
    const {currentPage, pageSize: pageLimit, totalMangaCount} = useSelector(state => state.mangaList)

    const onChange = useCallback(actionCreator => 
        (payload) => dis(actionCreator(payload)), 
    [])

    const selects = [
        {
            title: 'Order by', 
            placeholder: state.orderBy,
            options: ['popularity', 'title', 'start_date', 'end_date', 'favorites', 'episodes']?.map((el) => ({id: el, name: el})), //todo вынести в отдельный экспорт массив
            value: state.orderBy,
            setValue: onChange(orderByAC),
            zIndex: 5
        },
        {
            title: 'Type', 
            placeholder: state.type,
            options: [ "manga", "novel", "lightnovel", "oneshot", "doujin", "manhwa", "manhua"]?.map((el) => ({id: el, name: el})),
            value: state.type,
            setValue: onChange(typeChangeAC),
            zIndex: 3
        },
        {
            title: 'Status', 
            placeholder: state.status,
            options: status?.map((el) => ({id: el, name: el})),
            value: state.status,
            setValue: onChange(statusAC),
            zIndex: 1
        },
        
    ]
    const {data: manga} = useGetMangaListQuery({
        currentPage, 
        pageLimit,
        type: state.type,
        orderBy: state.orderBy, 
        status: state.status
    })
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
            <ContentContainer>
                <List
                    title='Manga'
                    elementList={manga} 
                    changeCurrentPage={changeCurrentPage} 
                    currentPage={currentPage}
                    totalElementCount={totalMangaCount}
                    pageSize={pageLimit}
                />
                <Filter state={state} dispatch={dis} selects={selects}/>
            </ContentContainer>
        </div>
    )
}