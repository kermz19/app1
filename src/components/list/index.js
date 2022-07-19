import React from 'react';
import {ListItem}  from '../list_item';

export const List = (props) => {
    return(
        <div>
            <div>{props.label}:</div>
            <ul>
                {props.items.map((item, index) => <ListItem key={index} label={item}/>)}
                {/* {props.items.map(item => {
                    <ListItem label={item}/>
                })} */}
            </ul>
        </div>
    )
}