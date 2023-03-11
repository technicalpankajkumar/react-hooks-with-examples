import React, { useState,useEffect } from 'react'

export default function FuncMouse(){
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)

    const logMousePosition=(e)=>{
        console.log("mouse Event")
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log("Function component did Mount")
        window.addEventListener("mousemove",logMousePosition)

        return ()=>{
            console.log("functional component will unmount")
            window.removeEventListener("mousemove",logMousePosition)
        }
    },[])

    return (
        <div className="row justify-content-center">
        <div className="col-sm-12 border border-2 border-dark">
            <h3>Mouse Event In Functional Component</h3>
            <h6>{x} and {y}</h6>
        </div>
    </div>
    )
}