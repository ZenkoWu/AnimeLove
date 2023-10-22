import s from './SelectModal.module.css'

type TSelectModal = {
    options: string[], 
    zIndex?: number, 
    setValue: (payload: string) => void,
    active: string
}

export const SelectModal = ({options, setValue, zIndex, active}: TSelectModal) => {
    console.log(setValue)
    return (
        <div 
            className={` ${s.container} rounded-3`} 
            style={{ zIndex: `${zIndex}`}}>
            {
                options?.map(el => 
                    <div 
                        key={el}
                        className={`${s.py_12} rounded-3`}
                        style={{backgroundColor: active == el ? '#bdb7b7': 'white'}}
                        onClick={() => setValue(el)} 
                    >
                        {el} 
                    </div>
                )
            }
        </div>
    )
}