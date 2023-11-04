import { MANGA_ORDER_BY, MANGA_STATUS, MANGA_TYPES } from '../../constants';
import { API_ROUTES } from '../../redux/services/apiRoutes/apiRoutes';
import { MainContent } from '../MainContent/MainContent';


export type TMangaFilterState = {
    type:  typeof MANGA_TYPES[number]['id'],
    orderBy: typeof MANGA_ORDER_BY[number]['id'],
    status: typeof MANGA_STATUS[number]['id']
}

const initialState: TMangaFilterState = {
    type: MANGA_TYPES[0].id,
    orderBy: MANGA_ORDER_BY[0].id,
    status: MANGA_STATUS[0].id
}

export const Manga = () => {
    return (
        <MainContent
            initialState={initialState}
            category={API_ROUTES.MANGA}
            types={MANGA_TYPES}
            orderBy={MANGA_ORDER_BY}
            status={MANGA_STATUS}
            title={'Manga'}
        />
    )
}