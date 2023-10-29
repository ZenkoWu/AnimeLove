import { flexPlace } from '../../utils/flexPlace'
import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

type TRecommendation = { // todo вынести - похоже на типизацию фаворитов 
    mal_id: number,
    title: string,
    images: {
        jpg: {
            image_url: string,
            small_image_url: string,
            large_image_url: string
        }
    }
}

type TCarousel = {
    carouselItems: TRecommendation[], 
    to: string, 
    title: string,
    itemsCount: number
}

export function Carousel({carouselItems, to, title, itemsCount}: TCarousel) {
    const [offset, setOffset] = useState(0)
  
    return (
        <div className='pb-5'>
            <h3 className='fw-bold text-center'>{title}</h3>
            <div className={`${flexPlace('between', 'center')}`}>
                <button
                    disabled={offset == 0}
                    className={' me-2 p-1 border cursor-pointer ' + (offset != 0 && ' bg-primary text-white')}
                    onClick={() => setOffset(prev => prev - 1)}
                >
                    {'<'}
                </button>
                <div className={`${flexPlace('center', 'start')} w-100 border`}>
                {
                    carouselItems
                        .filter((el, i, arr) =>  offset <= i && i < itemsCount + offset)
                        .map(el => (
                            <div >
                                <div className='p-3'>
                                    <NavLink 
                                        to={to + el.mal_id} 
                                        className='text-decoration-none text-muted'
                                        onClick={()=> window.scrollTo({top: 0})}
                                    >
                                        <div className=' rounded-3 text-center'> 
                                            <img 
                                                style={{height:'180px', objectFit:'cover'}}
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
                    className='ms-2 p-1 bg-primary text-white border cursor-pointer'
                    onClick={() => setOffset(prev => prev == carouselItems.length - itemsCount ? prev = 0 : prev + 1)}
                >
                    {'>'}
                </button>
            </div>   
        </div>
    )
}
