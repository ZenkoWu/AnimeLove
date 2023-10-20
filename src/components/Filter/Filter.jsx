import { useCallback, useState } from 'react'
import s from './Filter.module.css'
import { SelectField } from './SelectField/SelectField'
import { ageRating, status } from '../Anime/Anime'

export const typeChangeAC = (payload) => ({type: 'setType', payload})
export const orderByAC = (payload) => ({type: 'setOrderBy', payload})
export const ratingAC = (payload) => ({type: 'setRating', payload})
export const statusAC = (payload) => ({type: 'setStatus', payload})

export const Filter = ({state, dispatch, selects}) => {
    // const onChange = useCallback(actionCreator => 
    //     (payload) => dispatch(actionCreator(payload)), 
    // [])

   
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
        </div>
    )
}
