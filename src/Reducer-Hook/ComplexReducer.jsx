import React,{useReducer} from 'react'

const initialState={
    countOne:0,
    countFive:0,
    countTwenty:0
}

const reducer=(state,action)=>{
    switch(action.type){
        case 'INCREMENT':
            if(action.payload == 1)
            return { 
                ...state, 
                countOne : state.countOne + action.payload
            }
            else if(action.payload == 5)
            return {
                ...state,
                countFive : state.countFive + action.payload
            }
            else if(action.payload == 20)
            return {
                ...state,
                countTwenty : state.countTwenty + action.payload
            }
        case 'DECREMENT':
            if(action.payload == 1)
            return { 
                ...state, 
                countOne : state.countOne - action.payload
            }
            else if(action.payload == 5)
            return {
                ...state,
                countFive : state.countFive - action.payload
            }
            else if(action.payload == 20)
            return {
                ...state,
                countTwenty : state.countTwenty - action.payload
            }   
        default:
            return state;
    }
}
export default function ComplexReducer(){
    const [count,dispatch]=useReducer(reducer,initialState)

    return (
        <React.Fragment>
            <div className='row justify-content-center'>
                <div className='col-sm-4 border border-3 border-success p-3'>
                    <h3>Complex Counter Program ---</h3>
                </div>
                <div className='col-sm-4 text-center border border-primary p-3'>
                    <button onClick={()=>dispatch({type:'INCREMENT',payload:1})}>Increment + 1</button>
                    <span className='mx-3 text-danger fw-bold'>{count.countOne}</span>
                    <button onClick={()=>dispatch({type:'DECREMENT',payload:1})}>Decrement - 1</button>
                    <br/>
                    <br/>
                    <button onClick={()=>dispatch({type:'INCREMENT',payload:5})}>Increment + 5</button>
                    <span className='mx-3 text-danger fw-bold'>{count.countFive}</span>
                    <button onClick={()=>dispatch({type:'DECREMENT',payload:5})}>Decrement - 5</button>
                    <br/>
                    <br/>
                    <button onClick={()=>dispatch({type:'INCREMENT',payload:20})}>Increment + 20</button>
                    <span className='mx-3 text-danger fw-bold'>{count.countTwenty}</span>
                    <button onClick={()=>dispatch({type:'DECREMENT',payload:20})}>Decrement - 20</button>
                </div>
            </div>
        </React.Fragment>
    )
}