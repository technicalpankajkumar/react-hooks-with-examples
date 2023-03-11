import React, { useState } from 'react'

const PreviousState=()=>{
    const [count,setCount]=useState(0)

    const handleIncrement=()=>{
        for(let i=1 ; i<5 ; i++){
            // setCount(count + 1)   // this is not proper work it only increment 1
            setCount(preCount => preCount + 1 )    // it is write way of increment by 
            
        }
    }
    return (
        <div className='row justify-content-center'>
            <div className='col-sm-6 text-center border border-3 border-success p-0 m-2'>
                <h3 className='bg-warning py-2'>Previous State on useState Hook {count}</h3>

                <button onClick={handleIncrement} className="m-3">Increment + 5</button>
            </div>
        </div>
    )
}

export default PreviousState;