import React, { useCallback, useState } from 'react'
import ChildCallback from './ChildCallback'

export default function ExampleCallback(){
    const [count,setCount]=useState(0)
    const [item, setItem]=useState("Hello")

    const fn=useCallback(()=>{
        console.log("callback function call")
    },[item])       //if any changes in item variable, so wil be re-render childCallback component other wise not.

    const decrement=()=>{
        setCount(count-1)
    }
   
    return (
        <React.Fragment>
            {console.log("This Is Main Callback Component")}
          <h1 className='bg-danger text-white text-center p-2'>useCallback Hook with Example </h1>
          <ChildCallback func={fn}/>
          <p className='text-center'><button onClick={()=>setCount(count+1)}>Icrement {count}</button></p>
          <p className='text-center'><button onClick={decrement}>Decrement {count}</button></p>
        </React.Fragment>
    )
}