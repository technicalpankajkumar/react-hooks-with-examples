import React, { useEffect,useState } from 'react'

export default function CounterEffect(){
    const [counter,setCounter]=useState(0)

    const Count=()=>{
        console.log('Count function updated ....')
        setCounter(preCount => preCount + 1)
    }

    useEffect(()=>{
        console.log("useEffect function updated...")
        setInterval(Count,1000)
    },[])

    return (
        <div className='row justify-content-center'>
            <div className='col-sm-6 p-2 text-center'>
                <h4>Counter Program by useEffect</h4>
                <h3>{counter}</h3>
            </div>
        </div>
    )
}