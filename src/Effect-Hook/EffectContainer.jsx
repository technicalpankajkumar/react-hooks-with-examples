import React, { useState } from 'react'
import ClassMouse from './ClassMouse'
import FuncMouse from './FuncMouse'

export default function EffectContainer(){
    const [display,setDisplay]=useState(false)

    return (
        <div className='row justify-content-center'>
            <div className='col-sm-6 text-center'>
                <button onClick={()=>setDisplay(!display)} className="m-2">Toggle Component</button>
                {/* {display && <ClassMouse/>}   with class unmount cycle */}
                {display && <FuncMouse/>} {/* with functional unmount lifecycle */}
            </div>
        </div>
    )
}