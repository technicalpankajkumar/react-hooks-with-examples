import React,{useContext} from 'react'
import {context} from '../ContextAPIReducer'
export default function Ccomponent(){
    const data=useContext(context)
    return(
        <div className='row my-2 justify-content-between'>
            <div className='col-sm-4'>
                <h6 className='text-success'>Component B</h6>
            </div>
            <div className='col-sm-6'>
                <button onClick={()=> data.dispatch({type:'INCREMENT'})}>Increment</button>
                <span className='mx-2'>{}</span>
                <button onClick={()=> data.dispatch({type:'DECREMENT'})}>Decrement</button>
            </div>
        </div>
    )
}