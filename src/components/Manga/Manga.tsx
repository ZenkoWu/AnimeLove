import { useDispatch, useSelector } from 'react-redux';
import { mangaActions } from '../../redux/features/mangaList';
import { useCallback, useReducer, useState } from 'react';
import Preloader from "../Preloader/Preloader";
import {List} from '../List/List';
import { ContentContainer } from '../ContentContainer/ContentContainer';
import { Filter, statusAC, orderByAC, typeChangeAC, reducer } from '../Filter/Filter';
import { MANGA_ORDER_BY, MANGA_STATUS, MANGA_TYPES } from '../../constants';
import { TState } from '../../redux/store';
import { api } from '../../redux/services/api/api';
import {Modal} from '../Modal/Modal';

export type TMangaFilterState = {
    type: keyof typeof MANGA_TYPES,
    orderBy: keyof typeof  MANGA_ORDER_BY,
    status: keyof typeof MANGA_STATUS
}

const initialState = {
    type: 'manga',
    orderBy: 'popularity',
    status: 'complete'
}

export const Manga = () => {
    const [state, dis]: [TMangaFilterState, any] = useReducer(reducer, initialState)
    const {currentPage, pageSize: pageLimit, totalMangaCount} = useSelector((state :TState) => state.mangaList)
    const [safeContent, setSafeContent] = useState(true)
    const [opened, setOpened] = useState(false)

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
    const {data: manga} = api.manga.getList({
        currentPage, 
        pageLimit,
        type: MANGA_TYPES[state.type],
        orderBy: MANGA_ORDER_BY[state.orderBy], 
        status: MANGA_STATUS[state.status],
        sfw: safeContent ? 'sfw': ''
    })

    const dispatch = useDispatch()

    const changeCurrentPage = useCallback((currentPage: number) => {
        dispatch(mangaActions.changeCurrentPage(currentPage))
    }, [currentPage])

    if(!manga) {
        return <Preloader/>
    }
    const totalCount = manga.pagination.items.total 
    dispatch(mangaActions.changeTotalMangaCount(totalCount))

    const changeContentMode = () => safeContent ? setOpened(true) : setSafeContent(true)
    return (
        <div>
            {
                opened &&  
                <Modal
                    opened={opened} 
                    setOpened={setOpened}  
                    onAccept={()=> setSafeContent(false)}
                    question={`Are you sure you want to allow adult content 
                    and confirm that you are 18+?`}
                    title={'Сonfirmation'}
                />
            }
            <ContentContainer>
                <List
                    title='Manga'
                    elementsList={manga.data} 
                    changeCurrentPage={changeCurrentPage} 
                    currentPage={currentPage}
                    totalElementCount={totalMangaCount}
                    pageSize={pageLimit}
                />
                <Filter 
                    selects={selects} 
                    switchToggle={changeContentMode} 
                    checked={!safeContent}
                />
            </ContentContainer>
        </div>
    )
}