import React,{useReducer,createContext} from 'react'
import Acomponent from './components/Acomponent'
import Bcomponent from './components/Bcomponent'
import Ccomponent from './components/Ccomponent'

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
                count : state.count -1 ,
            }
        default:
            return state;
    }
}

export const context=createContext()

export default function ContextAPIReducer(){
    const [counts,dispatch]=useReducer(reducer,initialState)
    
    return (
        <React.Fragment>
            <context.Provider value={{dispatch:dispatch}}>
                <div className='row justify-content-center my-2'>
                    <div className='col-sm-4 border border-3 border-success'>
                        <h4>useReducer with createContextAPI useContext </h4>
                        <h3 className='text-danger text-center'>{counts.count}</h3>
                    </div>
                    <div className='col-sm-4 border border-1 border-primary'>
                        <Acomponent/>
                        <Bcomponent/>
                        <Ccomponent/>
                    </div>
                </div>
            </context.Provider>
        </React.Fragment>
    )
}