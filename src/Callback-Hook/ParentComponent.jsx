import React, { useCallback, useState } from 'react'
import Count from './Count'
import Title from './Title'
import BUTTON from './BUTTON'
export default function ParentComponent(){
    const [count,setCount]=useState(0)
    const [salary,setSalary]=useState(20000000)

    const increment =useCallback(() =>{
        setCount(count + 1 )
    },[count])
    const decrement = useCallback(() =>{
        setSalary(salary - 1000)
    },[salary])

    return(
        <div className='row justify-content-center'>
            <div className='col-sm-8 text-center'>
                <Title/>
                <Count text="Count is Increment :- " count={count} color={"success"}/>
                <BUTTON text="Increment" func={increment}/>

                <Count text="Salary is Decrement :- " count={salary} color={"danger"}/>
                <BUTTON text="Decrement" func={decrement}/>
            </div>
        </div>
    )

}