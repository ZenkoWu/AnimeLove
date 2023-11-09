import { useState } from "react"
import {Search} from "../SearchModal/Search/Search"
import { TSearchBlock } from "../SearchModal/Search/SearchBlock/SearchBlock"
import { api } from "../../../redux/services/api/api"
import { useSelector } from "react-redux"
import { TState } from "@/redux/store"
import { useDebounce } from "use-debounce"
import { skipToken } from "@reduxjs/toolkit/query"
import { API_ROUTES } from "../../../redux/services/apiRoutes/apiRoutes"
import { TCategories } from "@/types/mainElementsTypes"
import { TGetSearchedData } from "@/redux/services/apiMethods"

const searchLimit = 3;

const SearchContainer = ({searched, setSearched}: {
    searched: boolean, 
    setSearched: (searched: boolean)=> void
}) => {
    const [input, setInput] = useState('')
    const [searchTerm] = useDebounce(input, 1500)

    const isSafeContent = useSelector((state: TState) => state.common.isSafeContent)

   const getParams = (route: TCategories): TGetSearchedData => ({
        route, 
        input, 
        limit: searchLimit, 
        sfw: isSafeContent ? 'sfw': ''
    })
    
    const {data: anime} =  api.getSearched(searchTerm ? getParams(API_ROUTES.ANIME) : skipToken)
    const {data: manga} = api.getSearched(searchTerm ? getParams(API_ROUTES.MANGA) :  skipToken)
    const {data: characters} = api.getSearched(searchTerm ? getParams(API_ROUTES.CHARACTERS) : skipToken)

    const searchBlocks: TSearchBlock[] = [
        {title: API_ROUTES.ANIME, searchResult: anime},  
        {title: API_ROUTES.MANGA,  searchResult: manga}, 
        {title: API_ROUTES.CHARACTERS,  searchResult: characters} 
    ]
    return (
        <Search 
            searchBlocks={searchBlocks} 
            setInput={setInput} 
            input={input}
            searched={searched} 
            setSearched={setSearched}
        />
    )
}

export default SearchContainer;