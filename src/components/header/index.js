import React from 'react';
import { Button } from '../button';
import './header.css';

export const Header = () => {
    return(
        <div className="header">
            <div className="buttons">
                <Button label="secondary" className="button1" />
                <Button label ="secondary" className="button2"/>
            </div>
            
        </div>
    )
}