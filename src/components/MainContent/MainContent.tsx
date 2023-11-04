import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useState } from 'react';
import { api } from "../../redux/services/api/api";
import Preloader from "../Preloader/Preloader";
import {List} from '../List/List';
import { Filter} from '../Filter/Filter';
import { ContentContainer } from '../ContentContainer/ContentContainer';
import { TState } from '../../redux/store';
import { paginationActions } from '../../redux/features/pagination';
import { API_ROUTES } from '../../redux/services/apiRoutes/apiRoutes';
import { TCategories } from '@/types/mainElementsTypes';
import { TAnimeFilterState } from '../Anime/Anime';
import { TMangaFilterState } from '../Manga/Manga';
import { AGE_RATING, ANIME_ORDER_BY, ANIME_TYPE, ANIME_STATUS } from '../../constants';
import { MANGA_ORDER_BY, MANGA_STATUS, MANGA_TYPES } from '../../constants';
import { TSelectField } from '../Filter/SelectField/SelectField';

type TMainContent = {
    initialState: TAnimeFilterState | TMangaFilterState, 
    category: TCategories,
    types:  typeof ANIME_TYPE | typeof MANGA_TYPES,
    orderBy: typeof ANIME_ORDER_BY | typeof MANGA_ORDER_BY,
    status: typeof ANIME_STATUS | typeof MANGA_STATUS,
    rating?: typeof AGE_RATING, //only for anime
    title: 'Anime' | 'Manga'
}

export const MainContent = ({
    initialState, 
    category, 
    types,
    orderBy,
    status,
    rating,
    title
}: TMainContent) => {
    const [filter, setFilter] = useState<TAnimeFilterState | TMangaFilterState>(initialState) 
    const isSafeContent = useSelector((state: TState) => state.common.isSafeContent)

    const setValue = (select: any)=> (id: string)=> setFilter(prev => ({...prev, [select]: id})) //todo 

    const selects : TSelectField[] = [
        {
            title: 'Order by', 
            options: [...orderBy],
            value: orderBy.find(el => el.id === filter.orderBy)?.label ?? 'orderby',
            setValue: setValue('orderBy'),
            zIndex: 5
        },
        {
            title: 'Type', 
            options: [...types],
            value: types.find(el => el.id === filter.type)?.label ?? 'type',
            setValue: setValue('type'),
            zIndex: 3
        },
        {
            title: 'Status', 
            options: [...status],
            value: status.find(el => el.id === filter.status)?.label ?? 'status',
            setValue: setValue('status'),
            zIndex: 1
        },
    ]

    if( 'rating' in filter && rating && category == API_ROUTES.ANIME) {
        selects.push(
            {
                title: 'Age rating', 
                options: [...rating],
                value: rating.find(el => el.id === filter.rating)?.label ?? 'rating',
                setValue: setValue('rating'),
                zIndex: 2
            }
        )
    }

    const {
        currentPage, 
        pageSize: pageLimit, 
        totalAmount
    } = useSelector((state: TState ) => state.pagination[category])
    
    const dispatch = useDispatch()

    const {data} = api.getList({
        route: category,
        currentPage, 
        pageLimit, 
        type: filter.type, 
        rating: 'rating' in filter && filter.rating || '',
        orderBy: filter.orderBy,
        status: filter.status,
        sfw: isSafeContent ? 'sfw' : ''
    })
    
    const changeCurrentPage = useCallback((page: number) => {
        dispatch(paginationActions.changeCurrentPage({category, page}))
    }, [currentPage]) 

    if(!data) {
        return <Preloader/>
    }

    dispatch(paginationActions.changeAmount({
        category, 
        count: data.pagination.items.total
    }))
   return (
        <div>
            <ContentContainer>
                <List
                    title={title}
                    elementsList={data.data} 
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