import { useDispatch, useSelector } from 'react-redux';
import { animeListActions } from '../../redux/features/animeList';
import { useCallback, useReducer, useState } from 'react';
import { useGetAnimeListQuery } from "../../redux/services/animeApi";
import Preloader from "../../Preloader/Preloader";
import {List} from '../List/List';
import { Filter } from '../Filter/Filter';
import { ContentContainer } from '../ContentContainer/ContentContainer';

export const ageRating = {
    ['all ages']: 'g',
    'children': 'pg',
    ['teens 13 or older']: 'pg13',
    '17+ (violence)': 'r17',
    '18+': 'r'
}

export const status = {
    'finished': 'complete',
    'ongoing': 'airing',
    'announce': 'upcoming'
}
const reducer = (state, {type, payload}) => {
    switch(type) {
        case 'setType': 
        return {
            ...state,
            type: payload
        }
        case 'setRating': 
        return {
            ...state,
            rating: payload
        }
        case 'setOrderBy': 
        return {
            ...state,
            orderBy: payload
        }
        case 'setStatus': 
        return {
            ...state,
            status: payload
        }
        default: return state;
    }
}
const initialState = {
    type: 'tv',
    rating: 'teens 13 or older',
    orderBy: 'popularity',
    status: 'finished'
}

const Anime = () => {
    const [state, dis] = useReducer(reducer, initialState)

    const {currentPage, pageSize: pageLimit, totalAnimeCount} = useSelector(state => state.animeList)
    const dispatch = useDispatch()

    const {data: anime} = useGetAnimeListQuery({
        currentPage, pageLimit, 
        type: state.type, 
        rating: ageRating[state.rating],
        orderBy: state.orderBy,
        status: status[state.status]
    })
    
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
            <ContentContainer>
                <List
                    title='Anime'
                    elementList={anime} 
                    changeCurrentPage={changeCurrentPage} 
                    currentPage={currentPage}
                    totalElementCount={totalAnimeCount}
                    pageSize={pageLimit}
                />
                <Filter state={state} dispatch={dis}/>
            </ContentContainer>
        </div>
    )
}
export default Anime;