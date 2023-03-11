import React,{useState,useEffect} from 'react'

const SideEffectWithHook=()=>{
    const [count,setCount]=useState(0)
    const [name,setName]=useState('')

    useEffect(()=>{
        console.log("Effect is Rendering")
        document.title="title is "+ count
    },[count]) // conditional rendering

    return (
        <div className='row justify-content-center'>
            <div className='col-sm-6 text-center bg-success border border-2 border-warning p-2 text-white'>
                <h4>useEffect Hook With Example</h4>
                <button onClick={()=>setCount(count+1)}>Count is {count}</button>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
            </div>
        </div>
    )
}

export default SideEffectWithHook;