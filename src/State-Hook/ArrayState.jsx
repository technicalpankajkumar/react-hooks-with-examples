import React, { useState } from 'react'


const ArrayState=()=>{
    const [item,setItem]=useState([])
    const [name,setName]=useState()

    console.log("name " , ...item)   //spread operator
  
    const handleList=()=>{
         setItem([...item,{"id":item.length,"name":name}])
           console.log(item)
    }
    return (
        <div className='row justify-content-center my-2'>
            <div className='col-sm-6 text-center p-0 border border-3 border-primary'>
                <h2 className='bg-danger p-2 text-white'>Array State using useState Hook</h2>
                <input type="text" className='p-1 m-2 rounded' placeholder='Enter Item name' onChange={(e)=>setName(e.target.value)}/>
                
                <button onClick={handleList}>Add Item</button>

                <ul>
                    {item.map((value,index)=>{
                        return <li key={index}>{value.name}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}
export default ArrayState;