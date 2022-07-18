import React, {useEffect, useState} from 'react';

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
    



    return (
        <div>
            <h2>Time Now: {date.toLocaleTimeString()}</h2>
        </div>
    )
}