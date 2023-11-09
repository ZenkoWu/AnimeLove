import s from './ContentContainer.module.css'
// r - файл джсх
export const ContentContainer = ({children}) => {
    return (
        <div className={`gap-4 ${s.contentContainer}`}>
           {children}
        </div> 
    )
}