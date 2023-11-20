import { useState } from "react"
import { TextFieldWrapper } from "../TextFieldWrapper/TextFieldWrapper"
import {ArrowImage} from "../../ArrowImage/ArrowImage"
import { SelectModal } from "../SelectModal/SelectModal"
import { flexPlace } from "../../../utils/flexPlace"

export type TSelectField = { 
    title: string, 
    options: {id: string, label: string}[],
    value: string,
    setValue: (id: string) => void,
    zIndex: number,
}

export const SelectField = ({
    value, 
    setValue, 
    title, 
    options, 
    zIndex
}: TSelectField) => {
    const [opened, setOpened] = useState(false)

    return (
        <div id={title} className="pb-3 position-relative">
            <TextFieldWrapper title={title} opened={opened}>
                <div 
                    className={`w-100 fs-14 text_field m-0 ${flexPlace('between', 'center')}`} 
                    onClick={()=> setOpened((prev) => !prev)}
                >
                    {value}
                    <ArrowImage opened={opened} />
                </div>  
            </TextFieldWrapper>

            {
                opened && 
                <SelectModal
                    active={value}
                    setValue={setValue}
                    options={options}
                    zIndex={zIndex}
                />
            }
        </div>
    )
}





