import React,{memo} from "react";

 function ChildCallback({func}){

   return (
    <React.Fragment>
        {console.log("This is Child Callback Component")}
        {func()}
       <p className="text-center">This is Child Callback Component</p>
    </React.Fragment>
   )
}

export default memo(ChildCallback)