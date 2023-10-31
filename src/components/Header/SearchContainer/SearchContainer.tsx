import { useState } from "react"
import {Search} from "../SearchModal/Search/Search"
import { TSearchBlock } from "../SearchModal/Search/SearchBlock/SearchBlock"
import { api } from "../../../redux/services/api/api"
import { useSelector } from "react-redux"
import { TState } from "@/redux/store"
import { useDebounce } from "use-debounce"
import { skipToken } from "@reduxjs/toolkit/query"
import { API_ROUTES } from "../../../redux/services/apiRoutes/apiRoutes"

const searchLimit = 3

const SearchContainer = () => {
    const [input, setInput] = useState('')
    const [searchTerm] = useDebounce(input, 1500)

    const isSafeContent = useSelector((state: TState) => state.common.isSafeContent)
   
    const {data: anime} =  api.getSearched(searchTerm ? {route: API_ROUTES.ANIME, input, limit: searchLimit, sfw: isSafeContent ? 'sfw': ''} : skipToken)  // todo сделать один апи метод для получения всех данных чтоб не дергать три
    const {data: manga} = api.getSearched(searchTerm ? {route: API_ROUTES.MANGA, input, limit: searchLimit,  sfw: isSafeContent ? 'sfw': ''} :  skipToken)
    const {data: characters} = api.getSearched(searchTerm ? {route: API_ROUTES.CHARACTERS, input, limit: searchLimit,  sfw: isSafeContent ? 'sfw': ''}: skipToken)

    // if(!anime && !manga && ! characters) { //todo перенести в блоки поиска а не здесь
    //     return <Preloader/>
    // }

    const searchBlocks: TSearchBlock[] = [
        {title: 'anime', searchResult: anime},  
        {title: 'manga',  searchResult: manga}, 
        {title: 'characters',  searchResult: characters} 
    ]
    return (
        <Search 
            searchBlocks={searchBlocks} 
            setInput={setInput} 
            input={input}
        />
    )
}

export default SearchContainer;