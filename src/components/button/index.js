import { property } from 'lodash';
import React from 'react';
import "./button.css";

export const Button = ({...props}) => {

    function alertHandler() {
        return alert("This is the alert")
    }

    const buttonType = props.label


    return(
        <div onClick={alertHandler} className={`button ${buttonType}`}>
            <p  className="button-text">Button</p>
        </div>
    )
}
