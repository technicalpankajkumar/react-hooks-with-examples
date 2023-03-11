import React,{useReducer} from 'react'

const initialState=0

const reducer=(state,action)=>{
    switch(action){
        case 'INCREMENT':
            return state +1
        case 'DECREMENT':
            return state -1
        default:
            return state;
    }
}
export default function EasyReducer(){
    const [count,dispatch]=useReducer(reducer,initialState)
    
    return(
        <React.Fragment>
            <div className='row justify-content-center my-2'>
                <div className='col-sm-4 border border-3 border-success p-3'>
                    <h3>Easy Counter Program ---- </h3>
                </div>
                <div className='col-sm-4 text-center border border-primary p-4'>
                    <button onClick={()=> dispatch('INCREMENT')}>Increment</button>
                    <span className='px-2 mx-3 text-danger fw-bold'>{count}</span>
                    <button onClick={()=>dispatch('DECREMENT')}>Decrement</button>
                </div>
                
            </div>
        </React.Fragment>
    )
}