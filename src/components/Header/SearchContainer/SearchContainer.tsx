import { useState } from "react"
import {Search} from "../SearchModal/Search/Search"
import { TSearchBlock } from "../SearchModal/Search/SearchBlock/SearchBlock"
import { api } from "../../../redux/services/api/api"
import Preloader from "../../../components/Preloader/Preloader"
import { useSelector } from "react-redux"
import { TState } from "@/redux/store"

const searchLimit = 3

const SearchContainer = () => {
    const [input, setInput] = useState('')
    const isSafeContent = useSelector((state: TState) => state.common.isSafeContent)
   
    const {data: anime} =  api.anime.getSearched({input, limit: searchLimit, sfw: isSafeContent ? 'sfw': ''})  // todo сделать один апи метод для получения всех данных чтоб не дергать три
    const {data: manga} = api.manga.getSearched({input, limit: searchLimit,  sfw: isSafeContent ? 'sfw': ''})
    const {data: characters} = api.characters.getSearched({input, limit: searchLimit,  sfw: isSafeContent ? 'sfw': ''})

    if(!anime && !manga && ! characters) {
        return <Preloader/>
    }

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