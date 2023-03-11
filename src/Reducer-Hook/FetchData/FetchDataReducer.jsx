import axios from 'axios'
import React,{useEffect, useReducer} from 'react'

const initialState={
    loading: true,
    users:[],
    error:''
}

const reducer =(state,action)=>{
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                ...state,
                loading: false,
                users:action.payload
            }
        case 'FETCH_FAILD':
            return {
                ...state,
                loading:false,
                error: " Somthing went wrong !!"
            }
        default:
            return state;
    }
}

export default function FetchDataReducer(){
    const [users,dispatch]=useReducer(reducer,initialState)

    console.log(users.users)

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then((response)=> dispatch({type:'FETCH_SUCCESS', payload:response.data}))
        .catch((err)=> dispatch({type:'FETCH_FAILD'}))
    },[])

    return (
        <div className='row justify-content-around my-2'>
            <div className='col-sm-4 border border-2 border-primary'>
                <h5>25 PHOTO WITH API AXIOS PACKAGE FETCHING STORE A REDUCER STORE</h5>
            </div>
            <div className='col-sm-6'>
                <div className='row'>
                    {users.users.slice(0,25).map((photo,index)=>{
                        return <div key={index} className='col-sm-2 text-center rounded m-1 p-2 border border-2 border-success'>
                                <img src={photo.url} height="50px" key={index}/>
                                </div>
                    })}
                    {users.error ? users.error : null}
                </div>
            </div>
        </div>
    )
}