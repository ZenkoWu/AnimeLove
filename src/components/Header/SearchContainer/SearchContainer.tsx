import { useState } from "react"
import { useGetSearchedAnimeListQuery } from "../../../redux/services/animeApi"
import {Search} from "../SearchModal/Search/Search"
import { useGetSearchedMangaListQuery } from "../../../redux/services/mangaApi"
import { TSearchBlock } from "../SearchModal/Search/SearchBlock/SearchBlock"

const searchLimit = 3

const SearchContainer = () => {
    const [input, setInput] = useState('')
    const {data: anime} =  useGetSearchedAnimeListQuery({input, limit: searchLimit}) 
    const {data: manga} = useGetSearchedMangaListQuery({input, limit: searchLimit})
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