import { TMangaFilterState, TMangaOrderById, TMangaStatusId, TMangaTypeId } from '../../types/manga';
import { mangaFilter} from '../../constants';
import { API_ROUTES } from '../../redux/services/api/apiRoutes';
import { MainContent } from '../MainContent/MainContent';

const initialState: TMangaFilterState = {
    type: TMangaTypeId.manga,
    orderBy: TMangaOrderById.popularity,
    status: TMangaStatusId.complete
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