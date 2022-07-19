import React, {useEffect, useState} from 'react';
import './clock.css'

export const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(()=> {
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000);

        return(()=>{
            clearInterval(timer)
        })
    })
    
    
    const [hour, minute, second] = date.toLocaleTimeString().split(":")



    return (

        <div>
            <h2>Time Now:</h2>
            <div className='clock'> 
            <h2 className="time">  
                <div className='hour'>{hour}:</div>
                <div className='minute'>{minute}:</div>
                <div className='second'>{second}</div>
                </h2>
        </div>
        </div>
        
    )
}