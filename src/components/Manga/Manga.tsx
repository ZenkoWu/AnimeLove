import { TMangaFilterState, TMangaOrderById, TMangaStatusId, TMangaTypeId } from '../../types/manga';
import { mangaFilter} from '../../constants';
import { API_ROUTES } from '../../redux/services/api/apiRoutes';
import { MainContent } from '../MainContent/MainContent';

const initialState: TMangaFilterState = {
    type: mangaFilter.types.find(el => el.id === TMangaTypeId.manga)!.id,
    orderBy: mangaFilter.orderBy.find(el => el.id === TMangaOrderById.popularity)!.id,
    status: mangaFilter.statuses.find(el => el.id === TMangaStatusId.complete)!.id
}

export const Manga = () => {
    return (
        <MainContent
            initialState={initialState}
            category={API_ROUTES.MANGA}
            types={mangaFilter.types}
            orderBy={mangaFilter.orderBy}
            status={mangaFilter.statuses}
            title={'Manga'}
        />
    )
}