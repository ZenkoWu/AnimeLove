import { flexPlace } from '../../utils/flexPlace'
import React, {useCallback, useState} from 'react'
import { NavLink } from 'react-router-dom'
import s from './Carousel.module.css'
import { TRecommends } from '../ElementDescription/ElementDescription'
import { scrollToTop } from '../../utils/scrollToTop'

type TCarousel = {
    carouselItems: TRecommends, 
    to: string, 
    title: string,
    itemsCount: number
}

export function Carousel({
    carouselItems, 
    to, 
    title, 
    itemsCount
}: TCarousel) {
    const [offset, setOffset] = useState(0)
    
    const goToPrevious = useCallback(() => setOffset(prev => prev - 1), [])
    const goToNext = useCallback(() => 
        setOffset(prev => 
            prev == carouselItems.length - itemsCount ?  prev = 0 : prev + 1
        ),
    [])
    
    return (
        <div className='pb-5 px-2'>
            <h3 className='fw-bold text-center'>{title}</h3>
            <div className={`${flexPlace('between', 'center')} border px-2`}>
                <button
                    disabled={offset == 0}
                    className={`
                        ${s.arrowBtn} me-2 border cursor-pointer 
                        ${offset != 0 && ' bg-primary text-white'}
                    `}
                    onClick={goToPrevious}
                >
                    {'<'}
                </button>
                <div className={`${flexPlace('start', 'start')} overflow-hidden`} >
                    {
                        carouselItems
                            .map((el, i )=> (
                                offset <= i && i < itemsCount + offset &&
                                <div key={el.mal_id}>
                                    <div className='p-3'>
                                        <NavLink 
                                            to={to + el.mal_id} 
                                            className='text-decoration-none text-muted'
                                            onClick={scrollToTop}
                                        >
                                            <div className='rounded-3 text-center' > 
                                                <img 
                                                    className={`${s.poster} rounded-3`}
                                                    src={el.images.jpg.image_url} 
                                                />
                                                <h6 className='fw-bold'>{el.title}</h6>
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                            ))
                    }
                </div>
                <button
                    className={`${s.arrowBtn} bg-primary text-white border cursor-pointer`}
                    onClick={goToNext}
                >
                    {'>'}
                </button>
            </div>   
        </div>
    )
}
