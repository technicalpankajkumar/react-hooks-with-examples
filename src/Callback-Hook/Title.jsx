import React from 'react'

export default React.memo(function Title(){
 
    console.log("This is Title Component")
    return (
        <div className='text-center'>
            <h2 className='bg-success p-2 text-white m-3'>useCallback with CodeRevelution</h2>
        </div>
    )
})