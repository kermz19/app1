import React, {useEffect, useState} from 'react';
import './search.css'

export const Search = (props) => {
    const [searchText = setSearchText] = useState(props.text)
    const [debouncedText, setDebouncedText] = useState(searchText)
    const handleChange = (e) => {
        setSearchText(e)
    }

    useEffect(()=>{
        const timeoutID = setTimeout(() => {
            setDebouncedText(searchText)
        }, 2000)

        return(() => {
            clearTimeout(timeoutID)
        })

    }, [searchText])
    
    return (
        <div >
            <input 
            className="search" 
            type="text"
            onChange={e => handleChange}
            placeholder={props.text}>
            </input>
        </div>
    )
}