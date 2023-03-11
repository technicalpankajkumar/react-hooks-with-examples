import React,{useState,useMemo} from 'react'

export default function CounterMemo(){
    const [countOne,setCountOne]=useState(0)
    const [countTwo,setCountTwo]=useState(0)

    const incementOne=()=>{
        setCountOne(countOne + 1)
    }

    const incrementTwo=()=>{
        setCountTwo(countTwo + 1)
    }

    const even = useMemo(()=>{
        let i=0
        while( i < 2000000000 ) i++ 
        return countOne % 2 === 0
    },[countOne])

    return (
        <div className='row justify-content-center'>
            <div className="col-sm-6 bg-danger text-center">
               <h2 className='text-white bg-success'>useMemo Hook</h2>

               <p>
                <button onClick={incementOne}>Increment Button One {countOne} </button>

                <span className='mx-1 fw-bold text-white'>{even ? 'Even' : 'Odd'}</span>

                <button onClick={incrementTwo}>Increment Button Two {countTwo} </button>
               </p>

            </div>
        </div>
    )
}