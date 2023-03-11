import { useEffect, useRef } from "react";

export default function RefInputFocus(){
    const inputRef=useRef()

    useEffect(()=>{
        inputRef.current.focus()
    },[])
    
    return (
        <div className="row justify-content-center">
            <div className="col-sm-6 text-center p-0 m-2">
                <h2 className="text-white bg-success p-2">useRef Hook with Focus Input Example</h2>
                <input type="text" ref={inputRef}/>
            </div>
        </div>
    )
}