import { ANIME_TYPE } from '@/constants'
import { flexPlace } from '../../utils/flexPlace'
import s from './Filter.module.css'
import { SelectField, TSelectField } from './SelectField/SelectField'

export type TFilter = {
    selects: TSelectField[]
}

export const Filter = ({selects}: TFilter) => {
   
    return (
        <div className={s.container}>
            <div className={`bgMainRed p-2 ${flexPlace('between', 'center')}`} >
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
                            options={el.options}
                            zIndex={el.zIndex}
                        />
                    )
                }   
            </div>
        </div>
    )
}
