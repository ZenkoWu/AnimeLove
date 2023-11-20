import { TAnimeFilterState } from '@/types/types';
import { AGE_RATING, ANIME_ORDER_BY, ANIME_TYPE, ANIME_STATUS } from '../../constants';
import { API_ROUTES } from '../../redux/services/api/apiRoutes';
import { MainContent } from '../MainContent/MainContent';

const initialState: TAnimeFilterState = {
    type: ANIME_TYPE[0].id,
    rating: AGE_RATING[0].id,
    orderBy: ANIME_ORDER_BY[0].id,
    status: ANIME_STATUS[0].id
}

export const Anime = () => {
    return (
        <MainContent 
            initialState={initialState}
            category={API_ROUTES.ANIME}
            types={ANIME_TYPE}
            orderBy={ANIME_ORDER_BY}
            status={ANIME_STATUS}
            rating={AGE_RATING}
            title={'Anime'}
        />
    )
}
