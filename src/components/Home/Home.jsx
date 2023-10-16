import img from '../../imges/home.png'
import s from './Home.module.css'
const Home = () => {
    return (
        <div className={`${s.imgContainer} w-100`}>
            <div className='m-auto text-center'>
                <img src={img} alt="luffy" className={`${s.img}`}/>
                <div className='pb-4'>
                    <input type="text" className='w-50 m-auto p-2 rounded-' placeholder='Find anime or manga...'/>
                </div>
            </div>
        </div> 
    )
}

export default Home;