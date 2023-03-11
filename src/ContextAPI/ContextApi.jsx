import React,{createContext} from 'react'
import ComponentA from './ComponentA'
import ContextHook from './ContextHook'

export const userContext=createContext()
export const detailsContext=createContext()

export default function ContextApi(){
    
    return (
        <userContext.Provider value={{name:'pankaj', id:1, email: 'pankajkumarpk@gmail.com'}}>
            <detailsContext.Provider value={{village:'Hajipur', district: 'Azamgarh' , state :'Uttar Pradesh'}}>
              
                <div className='row justify-content-center'>
                    <div className='col-sm-6 text-center'>
                        <h1>Context API example</h1>
                        {/* <ComponentA/> */}
                        <ContextHook/>
                    </div>
                </div>

            </detailsContext.Provider>
        </userContext.Provider>
    )
}