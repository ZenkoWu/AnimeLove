import { 
    TAnimeFilterState, 
    TAnimeRatingsId, 
    TAnimeTypeId, 
    TAnimeStatusId,
    TAnimeOrderById
} from '../../types/anime';
import { animeFilter } from '../../constants';
import { API_ROUTES } from '../../redux/services/api/apiRoutes';
import { MainContent } from '../MainContent/MainContent';

const initialState: TAnimeFilterState = {
    type: TAnimeTypeId.tv,
    rating: TAnimeRatingsId.pg13,
    orderBy: TAnimeOrderById.popularity,
    status:  TAnimeStatusId.complete
}

export const Anime = () => {
    return (
        <MainContent 
            initialState={initialState}
            category={API_ROUTES.ANIME}
            types={animeFilter.types}
            orderBy={animeFilter.orderBy}
            status={animeFilter.statuses}
            rating={animeFilter.ageRatings}
            title={'Anime'}
        />
    )
}
