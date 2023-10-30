import { flexPlace } from '../../utils/flexPlace'
import s from './Filter.module.css'
import { SelectField } from './SelectField/SelectField'

// todo где лучше хранить 
// const actionCreator =  (payload: string, type: string) => ({type, payload}) //todo 

export const typeChangeAC = (payload: string) => ({type: 'setType', payload}) 
export const orderByAC = (payload: string) => ({type: 'setOrderBy', payload})
export const ratingAC = (payload: string) => ({type: 'setRating', payload})
export const statusAC = (payload: string) => ({type: 'setStatus', payload})

type TFilterReducer = {
    state: any, //todo 
    action: {type: string, payload: string}
}

export const reducer = (
    state: TFilterReducer['state'],
    {type, payload}: TFilterReducer['action']
) => {
    switch(type) {
        case 'setType': 
        return {
            ...state,
            type: payload
        }
        case 'setRating': 
        return {
            ...state,
            rating: payload
        }
        case 'setOrderBy': 
        return {
            ...state,
            orderBy: payload
        }
        case 'setStatus': 
        return {
            ...state,
            status: payload
        }
        default: return state;
    }
}

export type TFilter = {
    selects: 
        // title: string, 
        // placeholder: string
        // options: string[],
        // value: string,
        // setValue: (payload: string) => void,
        // zIndex: number,
        any[], // todo typescript
}
export const Filter = ({selects}: TFilter) => {
   
    return (
        <div className={s.container}>
            <div className={'bgMainRed p-2' + flexPlace('between', 'center')} >
                <h4 className='p-0 m-0 text-white'>Filter</h4>
            </div>
            <div  className='px-3'>
                {
                    selects.map((el) => 
                        <SelectField
                            value={el.value}
                            setValue={el.setValue}
                            key={el.title}
                            title={el.title}
                            placeholder={el.placeholder}
                            options={el.options}
                            zIndex={el.zIndex}
                        />
                    )
                }   
            </div>
        </div>
    )
}
