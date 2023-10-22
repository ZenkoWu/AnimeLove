import { useDispatch, useSelector } from 'react-redux';
import { animeListActions } from '../../redux/features/animeList';
import { useCallback, useReducer } from 'react';
import { useGetAnimeListQuery } from "../../redux/services/animeApi";
import Preloader from "../../Preloader/Preloader";
import {List} from '../List/List';
import { Filter, statusAC, ratingAC, orderByAC, typeChangeAC} from '../Filter/Filter';
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
export const reducer = (state, {type, payload}) => {
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
      const onChange = useCallback(actionCreator => 
        (payload) => dis(actionCreator(payload)), 
    [])

    const selects = [
        {
            title: 'Order by', 
            placeholder: state.orderBy,
            options: ['popularity', 'title', 'start_date', 'end_date', 'favorites', 'episodes']?.map((el) => ({id: el, name: el})),
            value: state.orderBy,
            setValue: onChange(orderByAC),
            zIndex: 5
        },
        {
            title: 'Type', 
            placeholder: state.type,
            options: ['tv', 'ova', 'movie', 'special', 'music']?.map((el) => ({id: el, name: el})),
            value: state.type,
            setValue: onChange(typeChangeAC),
            zIndex: 3
        },
        {
            title: 'Age rating', 
            placeholder: state.rating,
            options: [...Object.keys(ageRating)]?.map((el) => ({id: el, name: el})),
            value: state.rating,
            setValue: onChange(ratingAC),
            zIndex: 2
        },
        {
            title: 'Status', 
            placeholder: state.status,
            options: [...Object.keys(status)]?.map((el) => ({id: el, name: el})),
            value: state.status,
            setValue: onChange(statusAC),
            zIndex: 1
        },
        
    ]
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
                <Filter state={state} dispatch={dis} selects={selects}/>
            </ContentContainer>
        </div>
    )
}
export default Anime;