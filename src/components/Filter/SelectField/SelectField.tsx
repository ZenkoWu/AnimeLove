import { useState } from "react"
import { TextFieldWrapper } from "../TextFieldWrapper/TextFieldWrapper"
import ArrowImage from "../../ArrowImage/ArrowImage"
import { SelectModal } from "../SelectModal/SelectModal"
import { createFlexStyle } from "../../../utils.js/createFlexStyle"

type TSelectField = {
    value: string, 
    setValue:  (payload: string) => void,
    title: string,
    placeholder: string,
    options: string[],
    zIndex?: number
}

export const SelectField = ({
    value, 
    setValue, 
    placeholder, 
    title, 
    options, 
    zIndex
}: TSelectField) => {
    const [opened, setOpened] = useState(false)

    return (
        <div id={title} className="pb-3 position-relative">
            <TextFieldWrapper title={title} opened={opened}>
                <div 
                    className={`w-100 fs-14 text_field m-0 ${createFlexStyle()}`} 
                    onClick={()=> setOpened((prev) => !prev)}
                >
                    {value ?? placeholder}
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





