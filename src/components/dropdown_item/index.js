import React from 'react';
import './dropdown_item.css';

export const DropdownItem = (props) => {
    const handleClick = () => {
        alert(props.label)
    }
    return (
        <div className="dropdown-item" onClick={handleClick}>
            {props.label}
        </div>
    )
}