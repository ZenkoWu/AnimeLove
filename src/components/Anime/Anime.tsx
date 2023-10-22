import { useDispatch, useSelector } from 'react-redux';
import { animeListActions } from '../../redux/features/animeList';
import { useCallback, useReducer } from 'react';
import { useGetAnimeListQuery } from "../../redux/services/animeApi";
import Preloader from "../../Preloader/Preloader";
import {List} from '../List/List';
import { Filter, statusAC, ratingAC, orderByAC, typeChangeAC, reducer} from '../Filter/Filter';
import { ContentContainer } from '../ContentContainer/ContentContainer';
import { ageRating, animeOrderBy, animeType, status } from '../../constants';
import { TState } from '../../redux/store';

export type TAnimeFilterState = {
    type: typeof animeType[number],
    rating: keyof typeof ageRating,
    orderBy:  typeof animeOrderBy[number],
    status: keyof typeof status
}

const initialState = {
    type: 'tv',
    rating: 'teens 13 or older',
    orderBy: 'popularity',
    status: 'finished'
}

const Anime = () => {
    const [state, dis]: [TAnimeFilterState, any] = useReducer(reducer, initialState)// todo type for dispatch

    const onChange = useCallback((actionCreator: (payload: string) => ({type: string, payload: string})) => 
        (payload: string) => dis(actionCreator(payload)), 
    [])

    const selects = [
        {
            title: 'Order by', 
            placeholder: state.orderBy,
            options: animeOrderBy,
            value: state.orderBy,
            setValue: onChange(orderByAC),
            zIndex: 5
        },
        {
            title: 'Type', 
            placeholder: state.type,
            options: animeType,
            value: state.type,
            setValue: onChange(typeChangeAC),
            zIndex: 3
        },
        {
            title: 'Age rating', 
            placeholder: state.rating,
            options: [...Object.keys(ageRating)],
            value: state.rating,
            setValue: onChange(ratingAC),
            zIndex: 2
        },
        {
            title: 'Status', 
            placeholder: state.status,
            options: [...Object.keys(status)],
            value: state.status,
            setValue: onChange(statusAC),
            zIndex: 1
        },
        
    ]

    const {currentPage, pageSize: pageLimit, totalAnimeCount} = useSelector((state: TState )=> state.animeList)
    const dispatch = useDispatch()

    const {data: anime} = useGetAnimeListQuery({
        currentPage, pageLimit, 
        type: state.type, 
        rating: ageRating[state.rating],
        orderBy: state.orderBy,
        status: status[state.status]
    })
    
    const changeCurrentPage = useCallback((currentPage: number) => {
        dispatch(animeListActions.changeCurrentPage(currentPage))
    }, [currentPage])

    if(!anime) {
        return <Preloader/>
    }
    const totalCount = anime.pagination.items.total 
    dispatch(animeListActions.changeTotalAnimeCount(totalCount))
    
    return (
        <div>
            <ContentContainer>
                <List
                    title='Anime'
                    elementsList={anime.data} 
                    changeCurrentPage={changeCurrentPage} 
                    currentPage={currentPage}
                    totalElementCount={totalAnimeCount}
                    pageSize={pageLimit}
                />
                <Filter selects={selects}/>
            </ContentContainer>
        </div>
    )
}
export default Anime;