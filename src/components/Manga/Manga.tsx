import { TMangaFilterState } from '@/types/types';
import { mangaOrderBy, mangaStatuses, mangaTypes } from '../../constants';
import { API_ROUTES } from '../../redux/services/api/apiRoutes';
import { MainContent } from '../MainContent/MainContent';

const initialState: TMangaFilterState = {
    type: mangaTypes.find(el => el.id === 'manga')!.id,
    orderBy: mangaOrderBy.find(el => el.id === 'popularity')!.id,
    status: mangaStatuses.find(el => el.id === 'complete')!.id
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