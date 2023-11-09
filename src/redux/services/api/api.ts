import {
    useGetElementByIdQuery,
    useGetRecommendationsQuery,
    useGetListQuery,
    useGetSearchedDataQuery,
    useGetCharactersQuery
} from '../apiMethods'
// r - в чем отличие апи и апироутс? криво как-то
export const api = {
    getList: useGetListQuery,// r - юз юз юз юз 
    getById: useGetElementByIdQuery,
    getSearched: useGetSearchedDataQuery,
    getRecommendations: useGetRecommendationsQuery,
    getCharacters: useGetCharactersQuery
}