import { useState } from "react"
import s from './Search.module.css'
import SearchBlock, { TSearchBlock } from "./SearchBlock/SearchBlock"
import loupe from '../../../../imges/loupeBtn.svg'
import closeBtn from '../../../../imges/closeSearch.svg'

export type TSearch = {
    searchBlocks: TSearchBlock[], 
    setInput: (input: string)=> void, 
    input: string
}

export const Search = ({searchBlocks, setInput, input}: TSearch) => {
    const [searched, setSearched] = useState(false)
    const [searchText, setSearchText] = useState('')
    return (
        <div>
            {
                searched ? 
                <div className='d-flex align-items-center gap-2' >
                    <button 
                        onClick={()=> setInput(searchText)} 
                        type='button' 
                        className={`btn btn-light p-1 ${!searchText && 'disabled'}`}
                    >
                        search
                    </button>
                    <div className={s.searchInput}>
                            <input 
                                type="search" 
                                placeholder='Search anime, manga, characters...' 
                                className='rounded-1 px-3 py-1 w-100 border border-none'
                                onChange={(e)=> setSearchText(e.target.value)}
                                value={searchText}
                            />
                        {
                           input && searchBlocks[0]?.searchResult?.data.length > 0 &&
                            <div className={`bg-white text-dark rounded-1 px-3 py-2 ${s.modalContainer}`}>
                                {
                                    searchBlocks.map(block =>( 
                                        <SearchBlock 
                                            key={block.title}
                                            title={block.title} 
                                            searchResult={block.searchResult}
                                        />
                                    ))
                                }
                            </div>
                        }
                    </div>

                    <div onClick={()=> {
                        setSearched(false)
                        setSearchText('')
                    }}>
                       <img src={closeBtn} alt="closeBtn" />
                    </div>
                </div>
                :
                <div className='' onClick={()=> setSearched(true)}>
                  <img src={loupe} alt="loupe" />
                </div>
            }
        </div>
    )
}
