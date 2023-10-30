import img from '../../imges/home.png'
import s from './Home.module.css'

export const Home = () => {
    return (
        <div className={`${s.imgContainer}`}>
            <div className='m-auto text-center pt-5'>
                <img src={img} alt="luffy" className={`${s.img}`}/>
            </div>
        </div> 
    )
}
