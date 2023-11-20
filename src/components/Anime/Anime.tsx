import { TAnimeFilterState } from '@/types/types';
import { ageRatings, animeOrderBy, animeTypes, animeStatuses } from '../../constants';
import { API_ROUTES } from '../../redux/services/api/apiRoutes';
import { MainContent } from '../MainContent/MainContent';

const initialState: TAnimeFilterState = {
    type: animeTypes.find(el => el.id === 'tv')!.id,
    rating: ageRatings.find(el => el.id === 'pg13')!.id,
    orderBy: animeOrderBy.find(el => el.id === 'popularity')!.id,
    status: animeStatuses.find(el => el.id === 'complete')!.id
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
