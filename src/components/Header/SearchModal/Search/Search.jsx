import { useState } from "react"
import s from './Search.module.css'
import SearchBlock from "./SearchBlock/SearchBlock"

const Search = ({searchBlocks, setInput, input}) => {
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
                    <div className='' style={{width: '360px'}}>
                        {/* <form action="/search/all" method="GET" id="search"> */}
                            <input 
                                type="search" 
                                placeholder='Search anime, manga, characters...' 
                                className='rounded-1 px-3 py-1 w-100 border border-none'
                                onChange={(e)=> setSearchText(e.target.value)}
                                value={searchText}
                            />
                        {/* </form> */}
                        {
                           input && searchBlocks[0]?.searchResult?.data.length > 0 &&
                            <div className={`bg-white text-dark rounded-1 px-3 py-2 ${s.modalContainer}`}>
                                {
                                    searchBlocks.map(block =>( 
                                        <SearchBlock 
                                            key={block.title}
                                            block={block.title} 
                                            searchResult={block.searchResult
                                        }/>
                                    ))
                                }
                            </div>
                        }
                    </div>

                    <div onClick={()=> {
                        setSearched(false)
                        setSearchText()
                    }}>
                        <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Menu / Close_SM">
                            <path id="Vector" d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </g>
                        </svg>
                    </div>
                </div>
                :
                <div className='' onClick={()=> setSearched(true)}>
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            }
        </div>
    )
}

export default Search;