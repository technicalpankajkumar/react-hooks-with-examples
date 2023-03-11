import { useContext } from "react";
import { userContext, detailsContext } from "./ContextApi";

export default function ContextHook(){
    const user=useContext(userContext)
    const details=useContext(detailsContext)
    return (
        <div className=" bg-warning p-2">
           <h5 className="text-white bg-danger p-1">useContext Hook</h5>
           <h6>Id : {user.id} Name is {user.name}</h6>
           <p>{details.district} {details.state}</p>
        </div>
    )
}