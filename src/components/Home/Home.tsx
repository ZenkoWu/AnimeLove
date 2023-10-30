import img from '../../imges/home.png'
import s from './Home.module.css'

export const Home = () => {
    return (
        <div className={`${s.imgContainer}`}>
            <div className='m-auto text-center'>
                <img src={img} alt="luffy" className={`${s.img}`}/>
            </div>
        </div> 
    )
}
