import { useDispatch, useSelector } from 'react-redux';
import { mangaListActions } from '../../redux/features/mangaList';
import { useCallback, useReducer } from 'react';
import { useGetMangaListQuery } from "../../redux/services/mangaApi";
import Preloader from "../../Preloader/Preloader";
import {List} from '../List/List';
import { ContentContainer } from '../ContentContainer/ContentContainer';
import { Filter, statusAC, orderByAC, typeChangeAC, reducer } from '../Filter/Filter';
import { mangaOrderBy, mangaStatus, mangaTypes } from '../../constants';
import { TState } from '../../redux/store';


const initialState = {
    type: 'manga',
    orderBy: 'popularity',
    status: 'complete'
}

export const Manga = () => {
    const [state, dis] = useReducer(reducer, initialState)
    const {currentPage, pageSize: pageLimit, totalMangaCount} = useSelector((state :TState) => state.mangaList)

    const onChange = useCallback((actionCreator: (payload: string) => ({type: string, payload: string})) => 
        (payload: string) => dis(actionCreator(payload)), 
    []) //todo вынести в отдельный файл  
    const selects = [
        {
            title: 'Order by', 
            placeholder: state.orderBy,
            options: mangaOrderBy,
            value: state.orderBy,
            setValue: onChange(orderByAC),
            zIndex: 5
        },
        {
            title: 'Type', 
            placeholder: state.type,
            options: mangaTypes,
            value: state.type,
            setValue: onChange(typeChangeAC),
            zIndex: 3
        },
        {
            title: 'Status', 
            placeholder: state.status,
            options: mangaStatus,
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

    const dispatch = useDispatch()

    const changeCurrentPage = useCallback((currentPage: number) => {
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
                    elementsList={manga.data} 
                    changeCurrentPage={changeCurrentPage} 
                    currentPage={currentPage}
                    totalElementCount={totalMangaCount}
                    pageSize={pageLimit}
                />
                <Filter selects={selects}/>
            </ContentContainer>
        </div>
    )
}