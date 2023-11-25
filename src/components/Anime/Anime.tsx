import { TAnimeFilterState } from '@/types/anime';
import { animeFilter } from '../../constants';
import { API_ROUTES } from '../../redux/services/api/apiRoutes';
import { MainContent } from '../MainContent/MainContent';

const initialState: TAnimeFilterState = {
    type: animeFilter.types.find(el => el.id === 'tv')!.id,
    rating: animeFilter.ageRatings.find(el => el.id === 'pg13')!.id,
    orderBy: animeFilter.orderBy.find(el => el.id === 'popularity')!.id,
    status: animeFilter.statuses.find(el => el.id === 'complete')!.id
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
