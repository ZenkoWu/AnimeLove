
import s from './MainContent.module.css'
import { Outlet } from 'react-router-dom';

export const MainContent = () => {

    return (
        <div className={`gap-4 ${s.contentContainer}`} style={{padding: '50px 50px'}}>
           <Outlet/>
           <div style={{height:'600px', backgroundColor:'white', border: '1px solid rgb(209, 204, 204)'}}>Filter</div>
        </div> 
    )
}