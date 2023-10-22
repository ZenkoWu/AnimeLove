import React, { useState } from 'react'

type TPaginator = {
    totalElementCount: number,
    pageSize: number, 
    currentPage: number,
    onPageChange: (p: number) => void
}

export default function Paginator({
    totalElementCount, 
    pageSize, 
    currentPage, 
    onPageChange}: TPaginator
) {
    let pagesCount = Math.ceil(totalElementCount / pageSize)
    const pages: number[] = []

    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    } 
    
    const portionSize = 10;
    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div style={{margin: '5px auto'}}> 
            <nav 
                aria-label="Page navigation example" 
                className='m-auto text-center' 
            >
                <ul className="pagination justify-content-center">
                    {
                        portionNumber > 1 &&
                        <li className="page-item">
                            <a 
                                className="page-link" 
                                href="#" 
                                aria-label="Previous" 
                                onClick={()=> {setPortionNumber(portionNumber - 1) }}
                            >
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                    }   

                    {
                        pages
                            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                            .map(p => 
                                <span 
                                    key={p} 
                                    className={currentPage == p ? 'fw-bold text-decoration-underline' : ''}  
                                    onClick = {()=>{onPageChange(p)}} 
                                >
                                    <a className="page-link" href="#">{p}</a>
                                </span>
                            )
                    }

                    {
                        (portionCount > portionNumber) && 
                        <li className="page-item">
                            <a 
                                className="page-link" 
                                href="#" 
                                aria-label="Next" 
                                onClick={()=> {setPortionNumber(portionNumber + 1)}}
                            >
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    }
                </ul>
            </nav>
        </div> 
    )
}

