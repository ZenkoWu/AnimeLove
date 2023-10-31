import s from './Modal.module.css';
import { flexPlace } from "../../utils/flexPlace";

type TDeleteTicket = {
    opened: boolean,
    setOpened:(open: boolean) => void,
    onAccept:() => void,
    question: string,
    title: string
}

export const Modal = ({
    setOpened, 
    opened, 
    onAccept, 
    question, 
    title
}: TDeleteTicket) => {
    const onAcceptClick = () => {
        onAccept()
        setOpened(false)
    }
    const onCancel = () => {
        setOpened(false)
    }

    const onRejection = (e: any) => {
        opened && e?.target?.className == s.wrapper_modal && onCancel()
    }

    return (
        <div 
            className={`${s.wrapper_modal}`} 
            onClick={onRejection}
        >
            <div className={`bg-white rounded-3 p-4 ${s.modal}`}>
                <div 
                    className={`${flexPlace('between', 'center')} pb-16 btn`} 
                    onClick={()=> setOpened(false)}
                >
                    <p className='fs20 fw-600'>{title}</p>
                   x
                </div>

                <p className='pb-24'>{question}</p>

                <div className='d-flex'>
                    <div 
                        className={`pointer orange-button btn rounded-8 ${s.button} `} 
                        onClick={onAcceptClick}
                    >
                        Yes
                    </div>
                    <div 
                        className={`pointer ${s.button} ${s.orange_border}`}
                        onClick={onCancel} 
                    >
                        No
                    </div>
                </div>

            </div>
        </div>
    )
}