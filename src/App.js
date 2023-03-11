import React from 'react'
import ExampleCallback from './Callback-Hook/ExampleCallback'
import ParentComponent from './Callback-Hook/ParentComponent'
import SideEffectWithClass from './Effect-Hook/SideEffectWithClass'
import SideEffectWithHook from './Effect-Hook/SideEffectWithHook'
import CounterMemo from './Memo-Hook/CounterMemo'
import ComplexReducer from './Reducer-Hook/ComplexReducer'
import EasyReducer from './Reducer-Hook/EasyReducer'
import FetchDataReducer from './Reducer-Hook/FetchData/FetchDataReducer'
import MultipleReducer from './Reducer-Hook/MultipleReducer'
import SimpleReducer from './Reducer-Hook/SimpleReducer'
import ContextAPIReducer from './Reducer-Hook/WithContextAPI/ContextAPIReducer'
import ArrayState from './State-Hook/ArrayState'
import ObjectState from './State-Hook/ObjectState'
import PreviousState from './State-Hook/PreviousState'
import ClassMouse from './Effect-Hook/ClassMouse'
import EffectContainer from './Effect-Hook/EffectContainer'
import CounterEffect from './Effect-Hook/CounterEffect'
import ContextApi from './ContextAPI/ContextApi'
import RefInputFocus from './RefHook/RefInputFocus'
import RefCounterStop from './RefHook/RefCounterStop'

export default function APP(){

    return(
        <React.Fragment>
            {/* The example of useReducer hook start from here */}
            { /*<div className='container-fluid'>
                <h1 className='text-center bg-warning p-2'> useReducer Hooks with Counter Program Examples</h1>
                <EasyReducer/>
                <SimpleReducer/>
                <ComplexReducer/>
                <MultipleReducer/>
                <ContextAPIReducer/>
                <FetchDataReducer/>
            </div> */}
            {/* The example of useReducer hook end from here */}


            {/* The example of callback hook starts from here */}
                {/* <ExampleCallback/> 
                <ParentComponent/>
                */}
            {/* The example of useCallback hook end from here */}


            {/* The example of useMemo hook start from here */}
                {/* <CounterMemo/> */}
            {/* The example of useMemo hook end from here */}
            
             {/* The example of useState hook start from here */}
                {/* <PreviousState/>
                  <ObjectState/>
                  <ArrayState/> 
                */}
             {/* The example of useState hook end from here */}  

            {/* The example of useEffect hook start from here */}     
            {
            /* <SideEffectWithClass/>
               <SideEffectWithHook/> */
            }

            {
            /* <ClassMouse/> 
              <EffectContainer/> */
            }

            {/* <CounterEffect/> */}

            {/* The example of useEffect hook end here */} 

            {/* The example of contextApi start from here */} 
            {/* <ContextApi/> */}
            {/* The example of contextApi end here */} 

            {/* The example of useRef hook start from here */} 

            {/* The example of useRef hook end here */} 
            {/* <RefInputFocus/> */}
            <RefCounterStop/>

        </React.Fragment>
    )
}