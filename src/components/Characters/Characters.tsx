import { useDispatch, useSelector } from 'react-redux';
import s from './Characters.module.css'
import { useCallback } from 'react';
import { api } from "../../redux/services/api/api";
import Preloader from "../Preloader/Preloader";
import {List} from '../List/List';
import { TState } from '../../redux/store';
import { paginationActions } from '../../redux/features/pagination';
import { API_ROUTES } from '../../redux/services/api/apiRoutes';


export const Characters = () => {
    const {
        currentPage, 
        pageSize: pageLimit, 
        totalAmount
    } = useSelector((state: TState )=> state.pagination.characters)

    const dispatch = useDispatch()

    const {data: characters} = api.getCharacters({
        route: API_ROUTES.CHARACTERS,
        currentPage, 
        pageLimit
    })
    
    const changeCurrentPage = useCallback((page: number) => {
        dispatch(paginationActions.changeCurrentPage({category: API_ROUTES.CHARACTERS, page}))
    }, [currentPage])

    if(!characters) {
        return <Preloader/>
    }

    dispatch(paginationActions.changeAmount({
        category: API_ROUTES.CHARACTERS, 
        count: characters.pagination.items.total
    }))
    
    return (
        <div className={s.container}>
            <List
                title='Characters'
                elementsList={characters.data} 
                changeCurrentPage={changeCurrentPage} 
                currentPage={currentPage}
                totalElementCount={totalAmount}
                pageSize={pageLimit}
            />
        </div>
    )
}