import s from './TextFieldWrapper.module.css'

// type TTextFieldWrapper = {
//     children : React.ReactNode,
//     title: string,
//     opened?: boolean
// }

export const TextFieldWrapper = ({children, title, opened}) => {
    return (
        <div className='pb-16 m-0'>
            <p style={{padding: '5px 0'}}  className='m-0 h6'>{title}</p>
            <div className={`d-flex align-center pointer rounded-3 ${s.padding} ` + 
                (opened ? s.border_red : s.border_default) 
            }
            >
                {children}
            </div>
        </div>
    )
}