import { TMangaFilterState } from '@/types/types';
import { mangaOrderBy, mangaStatuses, mangaTypes } from '../../constants';
import { API_ROUTES } from '../../redux/services/api/apiRoutes';
import { MainContent } from '../MainContent/MainContent';

const initialState: TMangaFilterState = {
    type: mangaTypes[0].id,
    orderBy: mangaOrderBy[0].id,
    status: mangaStatuses[0].id
}

export const Manga = () => {
    return (
        <MainContent
            initialState={initialState}
            category={API_ROUTES.MANGA}
            types={mangaTypes}
            orderBy={mangaOrderBy}
            status={mangaStatuses}
            title={'Manga'}
        />
    )
}