import React,{useState} from 'react'

export default function ObjectState(){
    const [data,setData]=useState({firstName:'',lastName:''})
    return (
        <div className='row justify-content-center'>
            <div className='col-sm-6 text-center border border-3 border-dark p-0'>
                <h2 className='bg-primary text-white p-2'>Object State using useState Hook</h2>
                <input type="text" onChange={(e)=>{ setData({...data, firstName: e.target.value })}} with="100px" className='p-1 rounded m-2' placeholder='Enter firstName'/>
                <input type="text" onChange={(e)=>{setData({...data, lastName: e.target.value })}} with="100px" className='p-1 rounded' placeholder='Enter lastName'/>
                <h3>First Name is -- {data.firstName}</h3>
                <h3>Last Name is -- {data.lastName}</h3>
            </div>
        </div>
    )
}