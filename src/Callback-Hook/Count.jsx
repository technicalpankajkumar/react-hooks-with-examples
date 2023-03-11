import React from 'react'


export default React.memo(function Count({count,text,color}){

     console.log(`This is Count Component: ${text} ${count} `)
    return (
        <div className={`text-center border border-${color} m-2`}>
            <p className='fw-bold text-success'>{text}</p>
            <h3>
                {count}
            </h3>
        </div>
    )
})