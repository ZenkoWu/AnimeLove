import { useCallback, useState } from 'react'
import s from './Filter.module.css'
import { SelectField } from './SelectField/SelectField'
import { ageRating, status } from '../Anime/Anime'

const typeChangeAC = (payload) => ({type: 'setType', payload})
const orderByAC = (payload) => ({type: 'setOrderBy', payload})
const ratingAC = (payload) => ({type: 'setRating', payload})
const statusAC = (payload) => ({type: 'setStatus', payload})

export const Filter = ({state, dispatch}) => {
    const onChange = useCallback(actionCreator => 
        (payload) => dispatch(actionCreator(payload)), 
    [])

    const selects = [
        {
            title: 'Order by', 
            placeholder: state.orderBy,
            options: ['popularity', 'title', 'start_date', 'end_date', 'favorites', 'episodes']?.map((el) => ({id: el, name: el})),
            value: state.orderBy,
            setValue: onChange(orderByAC),
            zIndex: 5
        },
        {
            title: 'Type', 
            placeholder: state.type,
            options: ['tv', 'ova', 'movie', 'special', 'music']?.map((el) => ({id: el, name: el})),
            value: state.type,
            setValue: onChange(typeChangeAC),
            zIndex: 3
        },
        {
            title: 'Age rating', 
            placeholder: state.rating,
            options: [...Object.keys(ageRating)]?.map((el) => ({id: el, name: el})),
            value: state.rating,
            setValue: onChange(ratingAC),
            zIndex: 2
        },
        {
            title: 'Status', 
            placeholder: state.status,
            options: [...Object.keys(status)]?.map((el) => ({id: el, name: el})),
            value: state.status,
            setValue: onChange(statusAC),
            zIndex: 1
        },
        
    ]
    return (
        <div className={s.container} style={{border: '1px solid rgb(209, 204, 204)'}}>
            <h4 className='p-2  text-white' style={{backgroundColor:'rgb(247, 82, 41)'}}>Filter</h4>
            <div  className='px-3' >
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
            {/* <div className='px-3'>
                <form>
                    <div className='form-group type'>
                        <div className='h6'>Type</div>
                        <div className={s.dropdown}>
                            <button 
                                className={"w-100 p-2 bg-white text-start rounded-3 borderGrey " + `${ s.customSelect}`}
                                type="button" 
                                data-toggle="dropdown" 
                                aria-haspopup="true" 
                                aria-expanded="false" 
                                data-text-default="Choose type"
                            >
                                Choose type
                            </button>
                            <div className={s.dropdownModal}>
                                <input 
                                    name="type_3018619396" 
                                    type="checkbox" 
                                    checked={tvChecked} 
                                    class="custom-control-input" 
                                    value="tv"
                                    onClick={()=> setTvChecked(prev => !prev)}
                                />
                                <label htmlFor="">tv</label>
                            </div>
                        </div>
                    </div>
                </form>
            </div> */}
        </div>
    )
}
