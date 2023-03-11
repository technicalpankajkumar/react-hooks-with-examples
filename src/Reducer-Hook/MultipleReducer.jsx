import React,{useReducer} from 'react'

const initialState={
    count:0
}
const reducer=(state,action)=>{
      switch(action.type){
         case 'INCREMENT':
            return {
                count : state.count + 1,
            }
        case 'DECREMENT':
            return {
                count : state.count - 1,
            }
        default:
            return state
      }
}
export default function MultipleReducer(){
    const [countOne,dispatchOne]=useReducer(reducer,initialState)
    const [countTwo,dispatchTwo]=useReducer(reducer,initialState)
   
    return (
        <React.Fragment>
           <div className='row justify-content-center my-2'>
                <div className='col-sm-4 border border-3 border-success p-3'>
                    <h3>Counter Program Of Multiple Reducer </h3>
                    <h5 className='text-danger'>Using Single InitialState</h5>
                </div>
                <div className='col-sm-4 text-center border border-primary p-3'>
                    <button onClick={()=>dispatchOne({type:'INCREMENT'})}>Increment</button>
                    <span className='m-2 text-danger fw-bold'>{countOne.count}</span>
                    <button onClick={()=>dispatchOne({type:'DECREMENT'})}>Decrement</button>
                    <br/>
                    <button onClick={()=>dispatchTwo({type:'INCREMENT'})} className='my-2'>Increment</button>
                    <span className='m-2 text-danger fw-bold'>{countTwo.count}</span>
                    <button onClick={()=>dispatchTwo({type:'DECREMENT'})}>Decrement</button>
                </div>
            </div>
        </React.Fragment>
    )
}