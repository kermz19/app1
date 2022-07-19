import React, {useEffect, useState} from 'react';
import { List } from '../list';
import './search.css'
const items = ['item1', 'item2', 'item3']
export const Search = (props) => {
    const [searchText, setSearchText] = useState('')
    const [debouncedText, setDebouncedText] = useState(searchText)
    const [itemList, setItemList] = useState([]);
    
    const handleChange = (e) => {
        setSearchText(e.target.value)
    }

    useEffect(() => {
        setItemList(items.filter(item => item.includes(debouncedText)))
    }, [debouncedText])



    useEffect(()=>{
        const timeoutID = setTimeout(() => {
            setDebouncedText(searchText)
        }, 500)

        return(() => {
            clearTimeout(timeoutID)
        })

    }, [searchText])


    
    
    return (
        <div >
            <input 
            className="search" 
            type="text"
            value={searchText}
            onChange={handleChange}
            placeholder={props.text}>
            </input>
            <div>
                <List label='Item List' 
                items={itemList}/>
            </div>
        </div>
    )
}