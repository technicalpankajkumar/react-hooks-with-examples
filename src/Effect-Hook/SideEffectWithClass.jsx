import React from 'react'

class SideEffectWithClass extends React.Component{

    constructor(props){
        super(props)
        this.state={
            count:0,
            dumyCount:10
        }
    }

    componentDidMount(){
        console.log("component did mount")

        document.title="Title count "+ this.state.count ;
    }

    componentDidUpdate(preProps,preState){                //conditional rendering
        if(preState.count !== this.state.count){      //Render component ofter updating count state 
        console.log("component did update")
        document.title="Update Component "+ this.state.count;
        }
    }

    componentWillUnmount(){
        console.log("Component willmount")
    }

    render(){
        return(
            <div className='row justify-content-center'>
                <div className='col-sm-6 text-center border border-2 border-dark p-0 m-2'>
                    <h3 className='bg-danger p-2 '>Class Component Lifecycle</h3>
                    <button onClick={(e)=> this.setState({...this.state, count: this.state.count + 1 })}>Button Render Time of {this.state.count}</button>
                    <button onClick={()=>{this.setState({...this.state, dumyCount:this.state.dumyCount+10})}} className="my-3">Click Dumy {this.state.dumyCount}</button>
                </div>
            </div>
        )
    }
}

export default SideEffectWithClass;