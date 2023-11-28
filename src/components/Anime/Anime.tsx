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
    type: animeFilter.types.find(el => el.id === TAnimeTypeId.tv)!.id,
    rating: animeFilter.ageRatings.find(el => el.id === TAnimeRatingsId.pg13)!.id,
    orderBy: animeFilter.orderBy.find(el => el.id === TAnimeOrderById.popularity)!.id,
    status: animeFilter.statuses.find(el => el.id === TAnimeStatusId.complete)!.id
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
