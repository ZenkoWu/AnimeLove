import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useReducer } from 'react';
import { api } from "../../redux/services/api/api";
import Preloader from "../Preloader/Preloader";
import {List} from '../List/List';
import { Filter, statusAC, ratingAC, orderByAC, typeChangeAC, reducer} from '../Filter/Filter';
import { ContentContainer } from '../ContentContainer/ContentContainer';
import { AGE_RATING, ANIME_ORDER_BY, ANIME_TYPE, ANIME_STATUS } from '../../constants';
import { TState } from '../../redux/store';
import { paginationActions } from '../../redux/features/pagination';
import { API_ROUTES } from '../../redux/services/apiRoutes/apiRoutes';

export type TAnimeFilterState = {
    type: keyof typeof ANIME_TYPE,
    rating: keyof typeof AGE_RATING,
    orderBy: keyof typeof  ANIME_ORDER_BY,
    status: keyof typeof ANIME_STATUS
}

const initialState = {
    type: 'tv',
    rating: 'PG-13 - Teens 13 or older',
    orderBy: 'popularity',
    status: 'Finished Airing'
}

const Anime = () => {
    const [state, dis]: [TAnimeFilterState, any] = useReducer(reducer, initialState)// todo type for dispatch
    const isSafeContent = useSelector((state: TState) => state.common.isSafeContent)

    const onChange = useCallback((actionCreator: (payload: string) => ({type: string, payload: string})) => 
        (payload: string) => dis(actionCreator(payload)), 
    [])

    const selects = [
        {
            title: 'Order by', 
            placeholder: state.orderBy,
            options: Object.keys(ANIME_ORDER_BY),
            value: state.orderBy,
            setValue: onChange(orderByAC),
            zIndex: 5
        },
        {
            title: 'Type', 
            placeholder: state.type,
            options: Object.keys(ANIME_TYPE),
            value: state.type,
            setValue: onChange(typeChangeAC),
            zIndex: 3
        },
        {
            title: 'Age rating', 
            placeholder: state.rating,
            options: Object.keys(AGE_RATING),
            value: state.rating,
            setValue: onChange(ratingAC),
            zIndex: 2
        },
        {
            title: 'Status', 
            placeholder: state.status,
            options: Object.keys(ANIME_STATUS),
            value: state.status,
            setValue: onChange(statusAC),
            zIndex: 1
        },
        
    ]
    const {
        currentPage, 
        pageSize: pageLimit, 
        totalAmount
    } = useSelector((state: TState ) => state.pagination.anime)
    
    const dispatch = useDispatch()

    const {data: anime} = api.getList({
        route: API_ROUTES.ANIME,
        currentPage, 
        pageLimit, 
        type: ANIME_TYPE[state.type], 
        rating: AGE_RATING[state.rating],
        orderBy: ANIME_ORDER_BY[state.orderBy],
        status: ANIME_STATUS[state.status],
        sfw: isSafeContent ? 'sfw' : ''
    })
    
    const changeCurrentPage = useCallback((page: number) => {
        dispatch(paginationActions.changeCurrentPage({category: 'anime', page}))
    }, [currentPage]) // todo вынести - повторяется

    if(!anime) {
        return <Preloader/>
    }

    dispatch(paginationActions.changeAmount({
        category: 'anime',  //todo category constants anime .manga .char API_ROUTES.ANIME
        count: anime.pagination.items.total
    }))
   return (
        <div>
            <ContentContainer>
                <List
                    title='Anime'
                    elementsList={anime.data} 
                    changeCurrentPage={changeCurrentPage} 
                    currentPage={currentPage}
                    totalElementCount={totalAmount}
                    pageSize={pageLimit}
                />
                <Filter selects={selects}/>
            </ContentContainer>
        </div>
    )
}
export default Anime;