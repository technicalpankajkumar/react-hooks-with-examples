import { userContext,detailsContext } from "./ContextApi"
export default function ComponentA(){

    return (
        <div className="">
            <h3>Component A</h3>
            <userContext.Consumer>
                {
                    user =>{
                        return <detailsContext.Consumer>
                            {
                                details => {
                                    return (
                                    <div>
                                        <h6>Id : {user.id} User Name : {user.name} , Email Id : {user.email}</h6>
                                        <p>Gram : {details.village}</p>
                                        <p>Discrict : {details.district}</p>
                                        <p>State : {details.state}</p>
                                    </div>
                                    )
                                }
                            }
                        </detailsContext.Consumer>
                    }
                }
            </userContext.Consumer>
        </div>
    )
}