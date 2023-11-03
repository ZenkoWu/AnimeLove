import { MANGA_ORDER_BY, MANGA_STATUS, MANGA_TYPES } from '../../constants';
import { API_ROUTES } from '../../redux/services/apiRoutes/apiRoutes';
import { MainContent } from '../MainContent/MainContent';

export type TMangaFilterState = {
    type: keyof typeof MANGA_TYPES,
    orderBy: keyof typeof  MANGA_ORDER_BY,
    status: keyof typeof MANGA_STATUS
}

const initialState: TMangaFilterState = {
    type: 'manga',
    orderBy: 'popularity',
    status: 'Finished'
}

export const Manga = () => {
    return (
        <div></div>
        // <MainContent
        //     initialState={initialState}
        //     category={API_ROUTES.MANGA}
        //     type={MANGA_TYPES}
        //     orderBy={MANGA_ORDER_BY}
        //     status={MANGA_STATUS}
        //     title={'Manga'}
        // />
    )
}