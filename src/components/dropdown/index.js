import { property } from 'lodash';
import React, {useState, useEffect} from 'react';
import { DropdownItem } from '../dropdown_item';
import './dropdown.css'

export const Dropdown = ({...props}) => {
    const [open, isOpen] = useState(false)
    const [isPrimary, setIsPrimary] = useState([props.primary])
    const [isEmpty, setIsEmpty] = useState()

    const handleOpen = () => {
        open === false ? isOpen(true) : isOpen(false)
    }

    const handleitems = () => {
        if (props.items.length() === 0) {
            setIsEmpty(true)
        }
        else {
            setIsEmpty(false)
        }
        return isEmpty
    }

    useState(() => {
        if (isOpen === true) {
            setIsPrimary(false)
        } 
    },[isOpen])



    return(
        <div>
            <div className="dropdown" onClick={handleOpen}>
            {props.label}
            
        </div>
        {open === true ? 
            props.items.map(item => {
                return isEmpty ? <DropdownItem label='Empty'/> : <DropdownItem label={item}/>
            }): ''}

        </div>
        
    )
}