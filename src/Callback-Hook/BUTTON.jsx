import React from 'react'

export default React.memo(function BUTTON({text,func}){

    return (
        <React.Fragment>
            {console.log("This is Button Component "+ text)}
            <button className='mx-2' onClick={func}>{text}</button>
        </React.Fragment>
    )
})