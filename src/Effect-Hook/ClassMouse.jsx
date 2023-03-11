import { Component } from "react";

class ClassMouse extends Component{

    constructor(props){
        super(props)
        this.state={
            x:0,
            y:0
        }
    }

    logMousePosition=(e)=>{
        this.setState({x:e.clientX, y:e.clientY })
    }

    componentDidMount=()=>{
        console.log("component Did Mount")
        window.addEventListener('mousemove',this.logMousePosition) // this function run only one time
    }

    componentDidUpdate=()=>{
        console.log('component did update') // this function run every time when update mouse movement
    }

    componentWillUnmount=()=>{
        console.log("componet will unmount")
        window.removeEventListener('mousemove',this.logMousePosition)   //this function run only remove this component or hide in main layout
    }

    render(){
        return(
            <div className="row justify-content-center">
                <div className="col-sm-12 border border-2 border-dark">
                    <h3>Mouse Event In Class Component</h3>
                    <h6>{this.state.x} and {this.state.y}</h6>
                </div>
            </div>
        )
    }
}

export default ClassMouse;