import { flexPlace } from '../../utils/flexPlace'
import s from './Filter.module.css'
import { SelectField, TSelectField } from './SelectField/SelectField'

export type TFilter = {
    selects: TSelectField[],
    smallSize?: true,
    setIsFilterClicked?: (clicked: boolean) => void
}

export const Filter = ({selects, smallSize, setIsFilterClicked}: TFilter) => {
   
    return (
        <div className={(smallSize ? s.filterModal: s.container )}> 
            {
                smallSize &&
                <div className='p-3'>
                    <button 
                        onClick={()=> setIsFilterClicked?.(false)} 
                        className='btn btn-primary py-2 w-100'
                    >
                        Close filter
                    </button>
                </div>
                ||
                <div className={`bgMainRed p-2 ${flexPlace('between', 'center')}`} >
                    <h4 className='p-0 m-0 text-white'>Filter</h4>
                </div>
            }
            <div className='px-3'>
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