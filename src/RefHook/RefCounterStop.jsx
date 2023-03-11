import { useRef,useState,useEffect } from "react";

export default function RefCounterStop(){
    const [counter,setCounter]=useState(0)
    const intervalRef=useRef()

    useEffect(()=>{
        console.log("useEffect call ")

        intervalRef.current=setInterval(()=>{
            setCounter(preCount => preCount + 1)
        },1000)

        return ()=>{
            clearInterval(intervalRef.current)
        }
    },[])

    return(
        <div className="row justify-content-center">
            <div className="col-sm-6 text-center p-0 m-2">
                <h2 className="text-white bg-success p-2">useRef Hook with Counter Stop Example</h2>
                <h3>Count :- {counter}</h3>
                <button onClick={()=> clearInterval(intervalRef.current)}>Stop Count Down</button>
            </div>
        </div>
    )
}