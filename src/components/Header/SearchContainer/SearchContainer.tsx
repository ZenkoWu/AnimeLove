import { useState } from "react"
import {Search} from "../SearchModal/Search/Search"
import { TSearchBlock } from "../SearchModal/Search/SearchBlock/SearchBlock"
import { api } from "../../../redux/services/api/api"

const searchLimit = 3

const SearchContainer = () => {
    const [input, setInput] = useState('')
    const {data: anime} =  api.anime.getSearched({input, limit: searchLimit}) 
    const {data: manga} = api.manga.getSearched({input, limit: searchLimit})
    if(anime) console.log(anime)
    

    const searchBlocks: TSearchBlock[] = [
        {title: 'anime', searchResult: anime},  
        {title: 'manga',  searchResult: manga}, 
        // {title: 'characters',  searchResult: null} //todo add characters info
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