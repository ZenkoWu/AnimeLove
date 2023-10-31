import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useReducer, useState } from 'react';
import Preloader from "../Preloader/Preloader";
import {List} from '../List/List';
import { ContentContainer } from '../ContentContainer/ContentContainer';
import { Filter, statusAC, orderByAC, typeChangeAC, reducer } from '../Filter/Filter';
import { MANGA_ORDER_BY, MANGA_STATUS, MANGA_TYPES } from '../../constants';
import { TState } from '../../redux/store';
import { api } from '../../redux/services/api/api';
import { paginationActions } from '../../redux/features/pagination';
import { API_ROUTES } from '../../redux/services/apiRoutes/apiRoutes';

export type TMangaFilterState = {
    type: keyof typeof MANGA_TYPES,
    orderBy: keyof typeof  MANGA_ORDER_BY,
    status: keyof typeof MANGA_STATUS
}

const initialState = {
    type: 'manga',
    orderBy: 'popularity',
    status: 'Finished'
}

export const Manga = () => {// todo дублирование с аниме and characters убрать
    const [state, dis]: [TMangaFilterState, any] = useReducer(reducer, initialState)
    const isSafeContent = useSelector((state: TState) => state.common.isSafeContent)

    const onChange = useCallback((actionCreator: (payload: string) => ({type: string, payload: string})) => 
        (payload: string) => dis(actionCreator(payload)), 
    []) //todo вынести в отдельный файл  
    const selects = [
        {
            title: 'Order by', 
            placeholder: state.orderBy,
            options:  Object.keys(MANGA_ORDER_BY),
            value: state.orderBy,
            setValue: onChange(orderByAC),
            zIndex: 5
        },
        {
            title: 'Type', 
            placeholder: state.type,
            options:  Object.keys(MANGA_TYPES),
            value: state.type,
            setValue: onChange(typeChangeAC),
            zIndex: 3
        },
        {
            title: 'Status', 
            placeholder: state.status,
            options:  Object.keys(MANGA_STATUS),
            value: state.status,
            setValue: onChange(statusAC),
            zIndex: 1
        },
        
    ]
    const {
        currentPage, 
        pageSize: pageLimit, 
        totalAmount
    } = useSelector((state: TState ) => state.pagination.manga)

    const {data: manga} = api.getList({
        route: API_ROUTES.MANGA,
        currentPage, 
        pageLimit,
        type: MANGA_TYPES[state.type],
        orderBy: MANGA_ORDER_BY[state.orderBy], 
        status: MANGA_STATUS[state.status],
        sfw: isSafeContent ? 'sfw': ''
    })

    const dispatch = useDispatch()

    const changeCurrentPage = useCallback((page: number) => {
        dispatch(paginationActions.changeCurrentPage({category: 'manga', page}))
    }, [currentPage])

    if(!manga) {
        return <Preloader/>
    }

    dispatch(paginationActions.changeAmount({
        category: 'manga', 
        count: manga.pagination.items.total
    }))
    return (
        <div>
            <ContentContainer>
                <List
                    title='Manga'
                    elementsList={manga.data} 
                    changeCurrentPage={changeCurrentPage} 
                    currentPage={currentPage}
                    totalElementCount={totalAmount}
                    pageSize={pageLimit}
                />
                <Filter selects={selects} />
            </ContentContainer>
        </div>
    )
}