import { TAnimeFilterState } from '@/types/types';
import { ageRatings, animeOrderBy, animeTypes, animeStatuses } from '../../constants';
import { API_ROUTES } from '../../redux/services/api/apiRoutes';
import { MainContent } from '../MainContent/MainContent';

const initialState: TAnimeFilterState = {
    type: animeTypes[0].id,
    rating: ageRatings[0].id,
    orderBy: animeOrderBy[0].id,
    status: animeStatuses[0].id
}

export const Anime = () => {
    return (
        <MainContent 
            initialState={initialState}
            category={API_ROUTES.ANIME}
            types={animeTypes}
            orderBy={animeOrderBy}
            status={animeStatuses}
            rating={ageRatings}
            title={'Anime'}
        />
    )
}
