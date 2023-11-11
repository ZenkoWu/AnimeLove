import { TSmallCardInfo } from '@/types/mainElementsTypes'
import { flexPlace } from '../../utils/flexPlace'
import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import s from './Carousel.module.css'

type TCarousel = {
    carouselItems: TSmallCardInfo[], 
    to: string, 
    title: string,
    itemsCount: number
}

export function Carousel({carouselItems, to, title, itemsCount}: TCarousel) {
    const [offset, setOffset] = useState(0)
  
    return (
        <div className='pb-5 px-2'>
            <h3 className='fw-bold text-center'>{title}</h3>
            <div className={`${flexPlace('between', 'center')} border px-2`}>
                <button
                    disabled={offset == 0}
                    className={`${s.arrowBtn} me-2  border cursor-pointer ${offset != 0 && ' bg-primary text-white'}`}
                    onClick={() => setOffset(prev => prev - 1)}
                >
                    {'<'}
                </button>
                <div className={`${flexPlace('start', 'start')}`} style={{overflow:'hidden'}}>
                {
                    carouselItems
                        .map((el, i )=> (
                            offset <= i && i < itemsCount + offset &&
                            <div className=''>
                                <div className='p-3'>
                                    <NavLink 
                                        to={to + el.mal_id} 
                                        className='text-decoration-none text-muted'
                                        onClick={()=> window.scrollTo({top: 0})}
                                    >
                                        <div className='rounded-3 text-center' style={{width:'130px'}}> 
                                            <img 
                                                style={{height:'180px'}}
                                                className=' rounded-3'
                                                src={el.images.jpg.image_url} 
                                            />
                                            <h6 className='fw-bold' >{el.title}</h6>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                        ))
                }
                </div>
                <button
                    className={`${s.arrowBtn} bg-primary text-white border cursor-pointer`}
                    onClick={() => setOffset(prev => prev == carouselItems.length - itemsCount ? prev = 0 : prev + 1)}
                >
                    {'>'}
                </button>
            </div>   
        </div>
    )
}
