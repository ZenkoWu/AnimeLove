import { flexPlace } from '../../utils/flexPlace'
import notFound from '../../imges/error.png'

//todo можно ли оставлять тег стайл с одним стилем если страница открывается редко и не перерендеривается
export const ErrorPage = () => {
    return (
        <div className={flexPlace('center', 'center')}>
            <div className='text-center' style={{margin: '18vh auto'}}> 
                <img src={notFound} alt="404" className='w-50' />
                <h1 className='text-black p-0 m-0'>404 page not found</h1>
            </div>
        </div>
    )
}
