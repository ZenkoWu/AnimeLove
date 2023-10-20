import s from './SelectModal.module.css'
// type TSelects = {
//     options: {id: string, name: string}[], 
//     zIndex?: number, 
//     setValue: (value: {id: string, name: string}) => void
// }

export const Selects = ({options, setValue, zIndex, active}) => {
    console.log(setValue)
    return (
        <div 
            className={` ${s.container} rounded-3`} 
            style={{ zIndex: `${zIndex}`}}>
            {
                options?.map(el => 
                    <div 
                        key={el.id}
                        className={`${s.py_12} rounded-3`}
                        style={{backgroundColor: active == el.name? '###cecdcd': 'white'}}
                        onClick={() => setValue(el.name)} 
                    >
                        {el.name} 
                    </div>
                )
            }
        </div>
    )
}