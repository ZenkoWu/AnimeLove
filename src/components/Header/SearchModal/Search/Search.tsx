import { useState } from "react"
import s from './Search.module.css'
import { SearchBlock, TSearchBlock } from "./SearchBlock/SearchBlock"
import loupe from '../../../../imges/loupeBtn.svg'
import closeBtn from '../../../../imges/closeSearch.svg'

export type TSearch = {
    searchBlocks: TSearchBlock[], 
    setInput: (input: string)=> void, 
    input: string
}

export const Search = ({searchBlocks, setInput, input}: TSearch) => {
    const [searched, setSearched] = useState(false)
    return (
        <div>
            {
                searched ? 
                <div className='d-flex align-items-center gap-2' >
                    <div className={s.searchInput}>
                            <input 
                                type="search" 
                                placeholder='Search anime, manga, characters...' 
                                className='rounded-1 px-3 py-1 w-100 border border-none'
                                onChange={(e)=> setInput(e.target.value)}
                                value={input}
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
                    }}>
                       <img src={closeBtn} alt="closeBtn" />
                    </div>
                </div>
                :
                <div className='cursor-pointer' onClick={()=> setSearched(true)}>
                  <img src={loupe} alt="loupe" />
                </div>
            }
        </div>
    )
}
