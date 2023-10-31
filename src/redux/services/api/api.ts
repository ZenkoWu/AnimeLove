import {
    useGetElementByIdQuery,
    useGetRecommendationsQuery,
    useGetListQuery,
    useGetSearchedDataQuery,
    useGetCharactersQuery
} from '../apiMethods'

export const api = {
    getList: useGetListQuery,
    getById: useGetElementByIdQuery,
    getSearched: useGetSearchedDataQuery,
    getRecommendations: useGetRecommendationsQuery,
    getCharacters: useGetCharactersQuery
}